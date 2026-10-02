const UPDATED = '2026-10-02';

const cookieSections = [
  {
    id: 'what-are-cookies',
    heading: 'What cookies are',
    body: (
      <>
        <p>
          Cookies are small text files a website places on your device. They are
          widely used to make sites work, to remember preferences and to
          understand how a page is used.
        </p>
        <p>
          This policy explains which cookies{' '}
          <span className="font-medium text-zinc-900 dark:text-white">weblign.in</span> sets,
          why, and how to control them.
        </p>
      </>
    ),
  },
  {
    id: 'types',
    heading: 'Types of cookies we use',
    body: (
      <>
        <p>
          <span className="font-medium text-zinc-900 dark:text-white">
            Strictly necessary.
          </span>{' '}
          Required for the site to function — security checks, load balancing
          and session handling. These are always on and cannot be switched off.
        </p>
        <p>
          <span className="font-medium text-zinc-900 dark:text-white">
            Preferences.
          </span>{' '}
          Remember choices such as your theme (light or dark) so we do not have
          to ask again on every visit.
        </p>
        <p>
          <span className="font-medium text-zinc-900 dark:text-white">
            Analytics.
          </span>{' '}
          Help us see aggregate, anonymous usage patterns — which pages are
          visited and which links are useful. They do not identify you
          personally.
        </p>
      </>
    ),
  },
  {
    id: 'third-party',
    heading: 'Third-party cookies',
    body: (
      <p>
        Some content on our site may come from third-party providers such as
        embedded maps, video players or social media. Those providers may set
        their own cookies under their own policies. We do not control how they
        are used.
      </p>
    ),
  },
  {
    id: 'consent',
    heading: 'How we handle consent',
    body: (
      <>
        <p>
          Strictly necessary cookies are set without asking, because the site
          cannot work without them.
        </p>
        <p>
          Optional cookies such as analytics are only set with your agreement.
          Where consent is required by law, you can withdraw it at any time and
          your choice is respected on future visits.
        </p>
      </>
    ),
  },
  {
    id: 'control',
    heading: 'How to control cookies',
    body: (
      <>
        <p>
          Your browser gives you full control over cookies. You can view, block
          or delete them through its settings. Blocking analytics cookies does
          not affect your ability to use this site.
        </p>
        <p>
          Clearing your browser&rsquo;s cookie storage will also clear saved
          preferences such as your theme selection, so you may need to set those
          again.
        </p>
      </>
    ),
  },
  {
    id: 'do-not-track',
    heading: 'Do Not Track',
    body: (
      <p>
        Some browsers send a &ldquo;Do Not Track&rdquo; signal. Because there is
        no agreed standard for interpreting it in browsers, our analytics may
        still record technical data needed to serve the site.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Questions',
    body: (
      <p>
        If you have a question about cookies on our site, raise it on our{' '}
        <a href="/contact" className="font-medium text-primary hover:underline">
          contact page
        </a>
        and we will explain what we set and why.
      </p>
    ),
  },
];

export { UPDATED, cookieSections };
export default cookieSections;