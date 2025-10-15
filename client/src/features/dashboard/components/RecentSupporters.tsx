import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ChartColumn } from "lucide-react";
import { formatNaira, timeAgo } from "../utils/formatters";
import getSupporters from "../api/getSupporters";
import RecentSupportersSkeleton from "./RecentSupportersSkeleton";

const RecentSupporters = () => {
  const creatorId = "creator_001";

  const {
    data: supporters,
    isLoading,
    isError,
    error
  } = useQuery({
    queryFn: () => getSupporters(creatorId),
    queryKey: ["supporters", creatorId],
    enabled: !!creatorId
  });

  return (
    <section className="relative w-full flex flex-col gap-4 p-4 border border-border rounded-xl">
      <div className="w-full flex items-center justify-between gap-3 mb-4">
        <h2 className="text-2xl">Recent Supporters</h2>
        <Link
          to="/supporters"
          className="flex items-center gap-2 bg-card text-card-foreground capitalize py-2 px-3 whitespace-nowrap rounded-md"
        >
          <ChartColumn /> View All
        </Link>
      </div>

      <div
        aria-label="recent-supporters"
        className="w-full block overflow-x-auto overflow-y-visible"
      >
        {isLoading && <RecentSupportersSkeleton />}

        {isError && (
          <div className="w-full flex flex-col items-center gap-2 p-4 bg-red-100 text-red-700 text-center rounded-md">
            <h3 className="text-2xl">Error loading supporters</h3>
            <p>{error.message || "Something went wrong. Please try again."}</p>
          </div>
        )}

        {!isLoading && !isError && supporters?.length === 0 && (
          <div className="w-full flex flex-col items-center gap-2 p-4 bg-accent text-accent-foreground text-center rounded-md">
            <h3 className="text-2xl">No Supporters yet</h3>
            <p>Share your page with your fans to start receiving smiles.</p>
            <p>😊</p>
          </div>
        )}

        {!isLoading && !isError && supporters?.length > 0 && (
          <table className="w-full border border-border border-separate rounded-md border-spacing-0 mb-0">
            <thead>
              <tr className="[&_th]:border [&_th]:border-border">
                <th className="px-5 py-3 rounded-tl-md">Name</th>
                <th className="px-5 py-3">Smiles</th>
                <th className="px-5 py-3">Amount</th>
                <th className="px-5 py-3">Message</th>
                <th className="px-5 py-3 rounded-tr-md">Time</th>
              </tr>
            </thead>
            <tbody>
              {supporters.map(supporter => {
                const supporterName = supporter.info.name;
                return (
                  <tr
                    key={supporter.id}
                    className="odd:bg-card [&_td]:min-w-32 [&_td]:max-w-[12rem] [&_td]:px-5 [&_td]:py-3 [&_td]:border relative"
                  >
                    <td>
                      {supporter.info.xHandle ? (
                        <a
                          href={`https://x.com/${supporterName}`}
                          target="_blank"
                          rel="noopener"
                          className="text-primary"
                        >
                          {supporterName}
                        </a>
                      ) : (
                        <span>{supporterName}</span>
                      )}
                    </td>
                    <td>{supporter.smileCount}x 😊</td>
                    <td>{formatNaira(supporter.amount)}</td>
                    <td className="relative group">
                      <div className="truncate">{supporter.message}</div>
                      <div className="absolute left-0 top-full mt-1 w-auto max-w-xs bg-background text-card-foreground p-2 rounded-sm opacity-0 pointer-events-none border transition-opacity duration-200 group-hover:opacity-100 z-50">
                        {supporter.message}
                      </div>
                    </td>
                    <td className="whitespace-nowrap overflow-hidden truncate">
                      {timeAgo(supporter.createdAt)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default RecentSupporters;
