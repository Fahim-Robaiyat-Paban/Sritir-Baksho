import Skeleton from "@/components/ui/Skeleton";

const Loading = () => {
  return (
    <div role="status" aria-busy="true" className="site-container px-5 sm:px-8 xl:px-0">
      <span className="sr-only">খেলার তথ্য লোড হচ্ছে</span>
      <Skeleton className="mt-3 h-5 w-52" />
      <Skeleton className="mt-4 h-56 md:h-60" />
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_300px]">
        <Skeleton className="h-[420px]" />
        <Skeleton className="h-[420px]" />
      </div>
    </div>
  );
};

export default Loading;
