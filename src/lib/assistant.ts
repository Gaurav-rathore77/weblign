import { getBlogPosts, getProjects, getServices } from '@/lib/site-content';
import { plans } from '@/components/pricing/pricingData';

export interface AssistantLink {
  label: string;
  href: string;
}

export interface AssistantHistoryMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface AssistantResult {
  reply: string;
  links: AssistantLink[];
  suggestions: string[];
  source: 'guide' | 'ai';
}

interface AssistantContext {
  services: string;
  projects: string;
  plans: string;
  blog: string;
}

const defaultSuggestions = [
  'What services do you offer?',
  'Show me your pricing',
  'Tell me about your projects',
  'How can I contact you?',
];

function cleanText(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

async function buildContext(): Promise<AssistantContext> {
  const [services, projects, blogPosts] = await Promise.all([
    getServices(),
    getProjects(),
    getBlogPosts(),
  ]);

  return {
    services: services
      .map((service) => `${service.title}: ${service.description}`)
      .join('\n'),
    projects: projects
      .map((project) => `${project.title} — ${project.description}`)
      .join('\n'),
    plans: plans
      .map(
        (plan) =>
          `${plan.name}: ₹${plan.price.toLocaleString('en-IN')}${
            plan.priceLabel ? ` (${plan.priceLabel})` : ''
          } — ${plan.description}`,
      )
      .join('\n'),
    blog: blogPosts
      .map((post) => `${post.title} (${post.category}) — ${post.excerpt}`)
      .join('\n'),
  };
}

function getLinks(message: string): AssistantLink[] {
  const text = message.toLowerCase();
  const links: AssistantLink[] = [];

  if (/service|web|mobile|design|commerce|cloud|ai|devops/.test(text)) {
    links.push({ label: 'Explore services', href: '/services' });
  }
  if (/price|cost|plan|quote|payment|budget/.test(text)) {
    links.push({ label: 'View pricing', href: '/pricing' });
  }
  if (/project|portfolio|case study|work|example/.test(text)) {
    links.push({ label: 'See our work', href: '/portfolio' });
  }
  if (/contact|email|call|hire|talk|speak/.test(text)) {
    links.push({ label: 'Contact Weblign', href: '/contact' });
  }
  if (/about|team|founder|sachin|garav|employee/.test(text)) {
    links.push({ label: 'Meet the team', href: '/about' });
  }
  if (/blog|article|guide|read|insight/.test(text)) {
    links.push({ label: 'Read the blog', href: '/blog' });
  }

  return links.slice(0, 3);
}

function getSuggestions(message: string): string[] {
  const text = message.toLowerCase();
  if (/service|web|mobile|design|commerce|cloud|ai/.test(text)) {
    return ['Show me your projects', 'What is the starting price?', 'How do I get started?'];
  }
  if (/price|cost|plan|quote|budget/.test(text)) {
    return ['Which plan is right for me?', 'Can I request a custom quote?', 'What is included?'];
  }
  if (/project|portfolio|case study|work/.test(text)) {
    return ['Can I see a relevant case study?', 'Do you work with small businesses?', 'How do you work?'];
  }
  return defaultSuggestions;
}

function localGuideReply(message: string, context: AssistantContext): string {
  const text = message.toLowerCase().trim();

  if (/^(hi|hello|hey|namaste|good morning|good evening)\b/.test(text)) {
    return 'Hello! I am the Weblign Guide. I can explain our services, pricing, projects, process, team and contact options. What would you like to know?';
  }

  if (/what can you do|who are you|help|guide|assistant/.test(text)) {
    return 'I can guide you through Weblign. Ask me about our web development, mobile apps, UI/UX, e-commerce, cloud, AI automation, pricing, portfolio, process or team.';
  }

  if (/service|what do you do|web development|mobile|ui\/ux|ecommerce|cloud|devops|ai automation/.test(text)) {
    return `Weblign builds high-performance digital products for startups, growing businesses and enterprises.\n\nOur main services include:\n${context.services}\n\nWe can help with strategy, design, development, deployment and ongoing support.`;
  }

  if (/price|pricing|cost|plan|quote|budget|payment/.test(text)) {
    return `Our pricing depends on the scope and complexity of the project. Current starting options include:\n\n${context.plans}\n\nFor a custom website, web app, dashboard or AI solution, use Get Quote and our team will prepare an estimate for you.`;
  }

  if (/project|portfolio|case study|previous work|client work|example/.test(text)) {
    return `We have delivered work across education platforms, business websites, web apps and custom software.\n\nA few examples from our portfolio:\n${context.projects}\n\nOpen Portfolio to see the complete case studies and live project links.`;
  }

  if (/process|how do you work|timeline|steps|delivery/.test(text)) {
    return 'Our process is simple: discovery and strategy, design and prototyping, development in sprints, testing and launch, then growth and maintenance. You receive regular updates and a clear point of contact throughout the project.';
  }

  if (/about|team|founder|sachin|garav|employee|who are/.test(text)) {
    return 'Weblign is a digital services team led by Sachin Rathore, CEO and Founder. Our team includes Gaurav (Tech Head), Sagar Bist and Arun Rathore (Web Developers). We combine thoughtful design with practical engineering and transparent communication.';
  }

  if (/contact|email|call|hire|talk|speak|get started/.test(text)) {
    return 'You can reach Weblign at info.weblign@gmail.com or use the Contact page. Share your project goals, preferred service and budget, and our team will get back to you within 24 hours.';
  }

  if (/blog|article|insight|read|guide/.test(text)) {
    return `Our blog covers development, design, AI, accessibility, e-commerce and digital business. Recent topics include:\n${context.blog}\n\nOpen Blog to read the full articles.`;
  }

  if (/location|where|india|office|based/.test(text)) {
    return 'Weblign works with clients remotely and is based in India. We collaborate with businesses across locations and time zones.';
  }

  return 'I can help with Weblign services, pricing, portfolio, process, team and contact details. Try asking: “What services do you offer?”, “Show me pricing” or “How do I contact you?”';
}

async function askOpenAI(
  message: string,
  history: AssistantHistoryMessage[],
  context: AssistantContext,
): Promise<string | null> {
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  if (!apiKey) return null;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        temperature: 0.3,
        max_tokens: 500,
        messages: [
          {
            role: 'system',
            content: `You are the helpful Weblign website guide. Answer in the user's language, keep responses concise and friendly, and never invent services, prices, guarantees or contact details. Use only the website context below. Suggest relevant site links when useful. If the user asks to contact or get a quote, direct them to /contact. Website context:\nServices:\n${context.services}\n\nPricing:\n${context.plans}\n\nProjects:\n${context.projects}\n\nBlog topics:\n${context.blog}`,
          },
          ...history.slice(-8),
          { role: 'user', content: message },
        ],
      }),
    });

    if (!response.ok) return null;
    const result = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    return cleanText(result.choices?.[0]?.message?.content || '') || null;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export async function getAssistantReply(
  message: string,
  history: AssistantHistoryMessage[] = [],
): Promise<AssistantResult> {
  const context = await buildContext();
  const aiReply = await askOpenAI(message, history, context);

  return {
    reply:
      aiReply ||
      localGuideReply(message, context),
    links: getLinks(message),
    suggestions: getSuggestions(message),
    source: aiReply ? 'ai' : 'guide',
  };
}
