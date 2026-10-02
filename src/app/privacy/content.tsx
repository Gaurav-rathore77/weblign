const UPDATED = '2026-10-02';

const privacySections = [
  {
    id: 'overview',
    heading: 'Overview',
    body: (
      <>
        <p>
          Weblign (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects
          your privacy. This policy explains what information we collect when you
          visit <span className="font-medium text-zinc-900 dark:text-white">weblign.in</span>,
          why we collect it, and the choices available to you.
        </p>
        <p>
          We keep this document in plain language. If anything is unclear, contact
          us and we will explain it in detail.
        </p>
      </>
    ),
  },
  {
    id: 'what-we-collect',
    heading: 'What we collect',
    body: (
      <>
        <p>We only collect information you actively choose to share with us.</p>
        <ul className="ml-5 list-disc space-y-2 marker:text-primary">
          <li>
            <span className="font-medium text-zinc-900 dark:text-white">
              Information you submit.
            </span>{' '}
            When you use our contact form, we receive your name, email address,
            phone number, company, project budget and the details you write. This
            lets us respond to your enquiry.
          </li>
          <li>
            <span className="font-medium text-zinc-900 dark:text-white">
              Newsletter subscriptions.
            </span>{' '}
            If you subscribe, we store your email address so we can send the
            updates you asked for.
          </li>
          <li>
            <span className="font-medium text-zinc-900 dark:text-white">
              Technical data.
            </span>{' '}
            Our hosting provider records standard server logs — IP address,
            browser type, device type, referring page and time of visit. This is
            normal for any website and is used for security and diagnostics.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use',
    heading: 'How we use your information',
    body: (
      <ul className="ml-5 list-disc space-y-2 marker:text-primary">
        <li>To respond to enquiries and discuss your project.</li>
        <li>To send newsletters you have explicitly subscribed to.</li>
        <li>To keep the website secure and working reliably.</li>
        <li>To understand which pages are useful so we can improve them.</li>
      </ul>
    ),
  },
  {
    id: 'cookies',
    heading: 'Cookies and analytics',
    body: (
      <>
        <p>
          We use cookies sparingly. A cookie is a small text file placed on your
          device by a website. We currently use:
        </p>
        <ul className="ml-5 list-disc space-y-2 marker:text-primary">
          <li>
            <span className="font-medium text-zinc-900 dark:text-white">
              Strictly necessary cookies.
            </span>{' '}
            Required for core site features such as security and session
            handling. These cannot be disabled.
          </li>
          <li>
            <span className="font-medium text-zinc-900 dark:text-white">
              Analytics cookies.
            </span>{' '}
            Help us understand aggregate usage patterns. These are optional.
          </li>
        </ul>
        <p>
          You can block or delete cookies in your browser settings at any time.
          See our{' '}
          <a href="/cookies" className="font-medium text-primary hover:underline">
            Cookie Policy
          </a>{' '}
          for full detail.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    heading: 'When we share information',
    body: (
      <>
        <p>
          We do not sell, rent or trade your personal information. We share data
          only with the minimum number of trusted partners who help us operate
          the site:
        </p>
        <ul className="ml-5 list-disc space-y-2 marker:text-primary">
          <li>
            <span className="font-medium text-zinc-900 dark:text-white">
              Hosting provider
            </span>{' '}
            — keeps the site online and stores the database.
          </li>
          <li>
            <span className="font-medium text-zinc-900 dark:text-white">
              Email provider
            </span>{' '}
            — delivers messages you have asked us to send.
          </li>
          <li>
            <span className="font-medium text-zinc-900 dark:text-white">
              Analytics provider
            </span>{' '}
            — anonymous usage statistics only.
          </li>
        </ul>
        <p>
          If we ever need to share information for a legal reason, we will tell
          you first unless the law prevents us from doing so.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    heading: 'How long we keep information',
    body: (
      <p>
        Enquiry details are kept only as long as needed to respond and to
        maintain a record of our business conversation, after which they are
        deleted. Server logs are retained by our hosting provider for a limited
        period for security purposes.
      </p>
    ),
  },
  {
    id: 'rights',
    heading: 'Your rights',
    body: (
      <>
        <p>You have the right to:</p>
        <ul className="ml-5 list-disc space-y-2 marker:text-primary">
          <li>Ask what information we hold about you.</li>
          <li>Request a correction if any detail is inaccurate.</li>
          <li>Ask us to delete your information.</li>
          <li>Withdraw from our newsletter at any time.</li>
        </ul>
        <p>
          To exercise any of these, email us. We normally respond within 2
          business days.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    heading: 'How we protect your data',
    body: (
      <p>
        All traffic to our site is encrypted with HTTPS. Project data is stored
        in an access-controlled database. We limit who inside our team can view
        enquiry details, and we only give contractors the access they genuinely
        need to do their work.
      </p>
    ),
  },
  {
    id: 'children',
    heading: 'Children',
    body: (
      <p>
        Our services are aimed at businesses and adults. We do not knowingly
        collect personal information from children under 18. If you believe a
        child has sent us information, contact us and we will delete it.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    body: (
      <p>
        We may update this policy as our site or legal obligations change. The
        &ldquo;last updated&rdquo; date above always reflects the current version.
        Material changes will be summarised on this page.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact',
    body: (
      <p>
        Questions about privacy, or a request to access or delete your data? Use
        our{' '}
        <a href="/contact" className="font-medium text-primary hover:underline">
          contact page
        </a>{' '}
        and we will help.
      </p>
    ),
  },
];

export { UPDATED, privacySections };
export default privacySections;