const SkeletonLoader = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`bg-gray-300 animate-pulse rounded ${className}`}></div>
  );
};

export default SkeletonLoader;
