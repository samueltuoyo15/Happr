import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ChartColumn } from "lucide-react";

// imported from other features
import {
  SupportersSkeletonLoader,
  DisplaySupporters,
  NoSupporters
} from "@/features/supporters/components";
import getSupporters from "@/features/supporters/api/getSupporters";

const RecentSupporters = () => {
  const creatorId = "creator_001";

  const {
    data: supporters,
    isLoading,
    isError,
    error
  } = useQuery({
    queryFn: () => getSupporters(creatorId, 5),
    queryKey: ["recent", "supporters", creatorId],
    enabled: !!creatorId
  });

  return (
    <section className="relative w-full flex flex-col gap-4 p-4 border border-border rounded-xl">
      <div className="w-full flex items-center justify-between gap-3 mb-4">
        <h2 className="text-2xl">Recent Supporters</h2>
        <Link
          to="/supporters"
          className="flex items-center gap-2 bg-card text-card-foreground capitalize py-2 px-3 whitespace-nowrap rounded-sm"
        >
          <ChartColumn /> View All
        </Link>
      </div>

      <div
        aria-label="recent-supporters"
        className="w-full block hide-scrollbar overflow-x-auto overflow-y-visible"
      >
        {isLoading && <SupportersSkeletonLoader />}

        {isError && (
          <div className="w-full flex flex-col items-center gap-2 p-4 bg-red-100 text-red-700 text-center rounded-md">
            <h3 className="text-2xl">Error loading supporters</h3>
            <p>{error.message || "Something went wrong. Please try again."}</p>
          </div>
        )}

        {!isLoading && !isError && supporters?.length === 0 && <NoSupporters />}

        {!isLoading && !isError && supporters?.length > 0 && (
          <DisplaySupporters supporters={supporters} />
        )}
      </div>
    </section>
  );
};

export default RecentSupporters;
