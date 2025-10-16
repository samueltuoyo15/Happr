import { useQuery } from "@tanstack/react-query";
import ErrorBox from "@/components/ui/ErrorBox";
import SupportersSkeletonLoader from "./SupportersSkeletonLoader";
import DisplaySupporters from "./DisplaySupporters";
import NoSupporters from "./NoSupporters";
import getSupporters from "../utils/getSupporters";
import type { Supporter } from "../types";

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

  return (
    <section
      aria-labelledby="supporters section"
      className="relative w-full flex flex-col gap-4"
    >
      <h2 className="text-2xl">Your Supporters</h2>

      <div className="w-full block p-2 border border-border rounded-xl hide-scrollbar overflow-x-auto overflow-y-visible">
        {isLoading ? (
          <SupportersSkeletonLoader />
        ) : isError ? (
          <ErrorBox
            title="Error loading supporters"
            message={`${
              error instanceof Error
                ? error.message
                : "Soemthing went wrong. Please try again"
            }`}
          />
        ) : supporters.length === 0 ? (
          <NoSupporters />
        ) : (
          <DisplaySupporters supporters={supporters} />
        )}
      </div>
    </section>
  );
};

export default AllSupporters;
