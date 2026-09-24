const ScrollProgress = () => {
  return (
    <div
      className="scroll-progress fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary via-accent to-primary"
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
