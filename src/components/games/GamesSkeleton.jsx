import Skeleton from "@/components/ui/Skeleton";

const placeholders = ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8"];

export const GameGridSkeleton = () => (
  <div role="status" aria-busy="true" className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
    <span className="sr-only">খেলাগুলো লোড হচ্ছে</span>
    {placeholders.map((id) => (
      <Skeleton key={id} className="aspect-[4/5]" />
    ))}
  </div>
);

const GamesSkeleton = () => (
  <>
    <div aria-hidden="true" className="mt-7 flex gap-2.5">
      {placeholders.slice(0, 5).map((id) => (
        <Skeleton key={id} className="h-11 w-28 rounded-t-lg rounded-b-none" />
      ))}
    </div>
    <Skeleton className="mt-4 h-12 rounded-none" />
    <GameGridSkeleton />
  </>
);

export default GamesSkeleton;
