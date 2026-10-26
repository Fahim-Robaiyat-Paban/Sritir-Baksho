const Skeleton = ({ className = "" }) => {
  return <div aria-hidden="true" className={`rounded bg-skeleton motion-safe:animate-pulse ${className}`} />;
};

export default Skeleton;
