import { useQuery } from "@tanstack/react-query";
import SupportersSkeletonLoader from "./SupportersSkeletonLoader";
import DisplaySupporters from "./DisplaySupporters";
import NoSupporters from "./NoSupporters";
import getSupporters from "../api/getSupporters";

const AllSupporters = () => {
  const creatorId = "creator_001";

  const {
    data: supporters,
    isLoading,
    isError,
    error
  } = useQuery({
    queryFn: () => getSupporters(creatorId),
    queryKey: ["all", "supporters", creatorId],
    enabled: !!creatorId
  });

  return (
    <section
      aria-labelledBy="supporters section"
      className="relative w-full flex flex-col gap-4 p-4 border border-border rounded-xl"
    >
      <h2 className="text-2xl"> Your Supporters </h2>

      <div className="w-full block hide-scrollbar overflow-x-auto overflow-y-visible">
        {isError && (
          <div className="w-full flex flex-col items-center gap-2 p-4 bg-red-100 text-red-700 text-center rounded-md">
            <h3 className="text-2xl">Error loading supporters</h3>
            <p>{error.message || "Something went wrong. Please try again."}</p>
          </div>
        )}

        {isLoading && <SupportersSkeletonLoader />}

        {!isLoading && !isError && supporters?.length === 0 && <NoSupporters />}

        {!isLoading && !isError && supporters?.length > 0 && (
          <DisplaySupporters supporters={supporters} />
        )}
      </div>
    </section>
  );
};

export default AllSupporters;
