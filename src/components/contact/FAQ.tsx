import FAQList from './FAQList';

const FAQ = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-base leading-relaxed text-zinc-500">
          Got questions? We&rsquo;ve got answers. If you don&rsquo;t see what
          you&rsquo;re looking for, feel free to reach out.
        </p>
      </div>

      <FAQList />
    </div>
  );
};

export default FAQ;
