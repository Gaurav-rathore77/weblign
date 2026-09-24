import type { FAQItem as FAQItemType } from './contactData';

interface FAQItemProps {
  item: FAQItemType;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem = ({ item, isOpen, onToggle, index }: FAQItemProps) => {
  const answerId = `contact-faq-answer-${index}`;

  return (
    <div className="rounded-xl border border-zinc-100 bg-white shadow-xs transition-shadow duration-200 hover:shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span>{item.question}</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div id={answerId} role="region" className="border-t border-zinc-50 px-5 py-4 text-sm leading-relaxed text-zinc-500">
          {item.answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
