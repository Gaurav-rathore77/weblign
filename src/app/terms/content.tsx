const UPDATED = '2026-10-02';

const termsSections = [
  {
    id: 'agreement',
    heading: 'Agreement to these terms',
    body: (
      <p>
        By using <span className="font-medium text-zinc-900 dark:text-white">weblign.in</span> or
        engaging Weblign for services, you agree to these terms. If you do not
        agree, please do not use the site.
      </p>
    ),
  },
  {
    id: 'services',
    heading: 'Services we provide',
    body: (
      <>
        <p>
          Weblign builds digital products — websites, web applications, landing
          pages, integrations and related support. Specific scope, deliverables,
          timelines and fees are always confirmed in a written proposal or
          contract before work begins.
        </p>
        <p>
          Where this site describes a capability, that description is general.
          Your engagement is governed by the signed agreement, not by this page.
        </p>
      </>
    ),
  },
  {
    id: 'proposals',
    heading: 'Proposals, quotes and estimates',
    body: (
      <>
        <p>
          Estimates given on this site or in conversation are indicative until a
          written proposal is issued. A proposal becomes binding only once
          accepted in writing.
        </p>
        <p>
          Scope changes after a proposal is accepted may affect cost and
          timeline. We will always flag this in writing before doing extra work.
        </p>
      </>
    ),
  },
  {
    id: 'payment',
    heading: 'Payment terms',
    body: (
      <>
        <p>
          Payment terms such as deposit, milestone schedule and final payment are
          set out in your contract. Work starts once the agreed deposit is
          received.
        </p>
        <p>
          Unpaid invoices past the due date may pause ongoing work. Client is
          responsible for any third-party costs we pass through at cost.
        </p>
      </>
    ),
  },
  {
    id: 'ip',
    heading: 'Intellectual property',
    body: (
      <>
        <p>
          On full payment, ownership of the final deliverables transfers to the
          client. Weblign retains ownership of anything we created beforehand
          and is free to reuse — such as internal tools, generic code patterns,
          component libraries and design primitives.
        </p>
        <p>
          Third-party assets we integrate — stock photography, open-source
          packages, paid plugins, fonts and icons — remain under their own
          licences. Pass-on licences apply to the client.
        </p>
        <p>
          We may show work in our portfolio unless a written NDA is in place or
          the client asks us not to.
        </p>
      </>
    ),
  },
  {
    id: 'client-responsibilities',
    heading: 'Your responsibilities',
    body: (
      <>
        <p>Timelines depend on timely input from you. We expect:</p>
        <ul className="ml-5 list-disc space-y-2 marker:text-primary">
          <li>Content, copy, images, logos and brand assets, or the source of them.</li>
          <li>Approvals at agreed review stages, consolidated into one response.</li>
          <li>Access to any accounts, hosting or third-party systems in scope.</li>
          <li>A single point of contact for decisions.</li>
        </ul>
        <p>
          Delays in receiving the above move the delivery date accordingly.
        </p>
      </>
    ),
  },
  {
    id: 'revisions',
    heading: 'Revisions and feedback',
    body: (
      <p>
        Each proposal defines how many revision rounds are included per stage.
        Additional rounds are billed at our then-current rate. We consider a
        stage approved when you confirm it or stop responding for 10 business
        days.
      </p>
    ),
  },
  {
    id: 'third-party',
    heading: 'Third-party platforms',
    body: (
      <p>
        Projects often rely on third-party services — hosting, payment gateways,
        ad platforms, CRMs, government APIs or app stores. Their availability,
        pricing and policies are outside our control. We are not liable for
        outages, policy changes or account actions taken by those providers.
      </p>
    ),
  },
  {
    id: 'warranty',
    heading: 'Warranties and liability',
    body: (
      <>
        <p>
          We warrant that work will be performed with reasonable skill and care.
          We cannot guarantee specific search rankings, revenue figures or
          conversion outcomes, as these depend on factors outside any developer&rsquo;s
          control.
        </p>
        <p>
          To the extent permitted by law, our total liability is limited to the
          fees you paid for the relevant engagement.
        </p>
      </>
    ),
  },
  {
    id: 'termination',
    heading: 'Cancelling an engagement',
    body: (
      <>
        <p>
          Either party may terminate a project with 14 days written notice.
          Work completed up to that point is payable, and you receive whatever
          has been delivered to that date.
        </p>
        <p>
          Support and hosting commitments already paid for continue for their
          stated period unless terminated as well.
        </p>
      </>
    ),
  },
  {
    id: 'confidentiality',
    heading: 'Confidentiality',
    body: (
      <p>
        We keep confidential anything you share that is marked as such — NDA
        documents, credentials, business data or unpublished designs — and use it
        only to deliver your project.
      </p>
    ),
  },
  {
    id: 'law',
    heading: 'Governing law',
    body: (
      <p>
        These terms are governed by the laws of India, and the courts of India
        have exclusive jurisdiction over any dispute arising from them.
      </p>
    ),
  },
  {
    id: 'general',
    heading: 'General',
    body: (
      <>
        <p>
          These terms do not create a partnership or employment relationship.
          If any provision is found unenforceable, the rest stays in force.
        </p>
        <p>
          Questions about terms can be raised on our{' '}
          <a href="/contact" className="font-medium text-primary hover:underline">
            contact page
          </a>
          .
        </p>
      </>
    ),
  },
];

export { UPDATED, termsSections };
export default termsSections;