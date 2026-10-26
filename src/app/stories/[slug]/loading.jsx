import Skeleton from "@/components/ui/Skeleton";

const Loading = () => {
  return (
    <div role="status" aria-busy="true" className="site-container px-5 sm:px-8 xl:px-0">
      <span className="sr-only">গল্প লোড হচ্ছে</span>
      <Skeleton className="mt-3 h-5 w-64" />
      <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_300px]">
        <div>
          <Skeleton className="h-14 w-3/4" />
          <Skeleton className="mt-6 aspect-[16/9]" />
          <Skeleton className="mt-7 h-40" />
        </div>
        <Skeleton className="h-72" />
      </div>
    </div>
  );
};

export default Loading;
