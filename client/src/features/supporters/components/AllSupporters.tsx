import { useQuery } from "@tanstack/react-query";
import SupportersSkeletonLoader from "./SupportersSkeletonLoader";
import DisplaySupporters from "./DisplaySupporters";
import NoSupporters from "./NoSupporters";
import getSupporters from "../api/getSupporters";

const AllSupporters = () => {
  const creatorId = "creator_001";

  const {
    data: supporters = [],
    isLoading,
    isError,
    error
  } = useQuery<Supporter[]>({
    queryFn: () => getSupporters(creatorId),
    queryKey: ["all", "supporters", creatorId],
    enabled: !!creatorId
  });

  if (isLoading) return <SupportersSkeletonLoader />;

  if (isError)
    return (
      <div className="w-full flex flex-col items-center gap-2 p-4 bg-red-100 text-red-700 text-center rounded-md">
        <h3 className="text-2xl">Error loading supporters</h3>
        <p>
          {error instanceof Error
            ? error.message
            : "Something went wrong. Please try again."}
        </p>
      </div>
    );

  return (
    <section
      aria-labelledBy="supporters section"
      className="relative w-full flex flex-col gap-4 p-4 border border-border rounded-xl"
    >
      <h2 className="text-2xl">Your Supporters</h2>

      <div className="w-full block hide-scrollbar overflow-x-auto overflow-y-visible">
        {supporters.length === 0 ? (
          <NoSupporters />
        ) : (
          <DisplaySupporters supporters={supporters} />
        )}
      </div>
    </section>
  );
};

export default AllSupporters;
