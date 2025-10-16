import { formatNaira, timeAgo } from "@/utils/formatters";
import type { Supporters } from "../types";

const DisplaySupporters = ({ supporters }: { supporters: Supporters[] }) => {
  return (
    <table aria-label="supporters table" className="w-full mb-0">
      <tbody>
        {supporters.map(supporter => {
          const supporterName = supporter.info.name;
          return (
            <tr
              key={supporter.id}
              className="[&_td]:min-w-32 [&_td]:max-w-[14rem] [&_td]:px-5 [&_td]:py-4 [&_td]:border-b relative"
            >
              <td>
                {supporter.info.xHandle ? (
                  <a
                    href={`https://x.com/${supporterName}`}
                    target="_blank"
                    rel="noopener"
                    className="min-w-32 flex items-center gap-2 font-bold underline"
                  >
                    @{supporterName}
                  </a>
                ) : (
                  <span
                    className={`min-w-32 ${
                      supporter.isAnonymous ? "" : "font-bold"
                    }`}
                  >
                    {supporterName}
                  </span>
                )}
              </td>
              <td>{supporter.smileCount}x 😊</td>
              <td>{formatNaira(supporter.amount)}</td>
              <td className="relative group">
                <div className="truncate">{supporter.message}</div>
                <div
                  className="absolute left-0 top-full mt-1 w-auto max-w-xs bg-card text-card-foreground p-2 rounded-sm opacity-0
                pointer-events-none border transition-opacity duration-200
                group-hover:opacity-100 z-50"
                >
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
  );
};

export default DisplaySupporters;
