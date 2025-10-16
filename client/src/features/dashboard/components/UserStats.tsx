import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { formatNaira } from "@/utils/formatters";

const durationFilters: string[] = ["all-time", "30-days", "90-days"];

const UserStats = () => {
  const [statsDuration, setStatsDuration] = useState<
    "all-time" | "30-days" | "90-days"
  >("all-time");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <section className="relative w-full flex flex-col gap-4 p-4 border border-border rounded-xl">
      <div className="w-full flex items-center justify-between gap-3 mb-4">
        <h2 className="text-2xl"> My Stats </h2>

        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 bg-card text-card-foreground capitalize py-2 px-3 rounded-sm"
        >
          {statsDuration.split("-").join(" ")}
          {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      <div className="w-full flex flex-wrap gap-5">
        <div className="py-2 px-3 border border-border rounded-md">
          <p> Earnings </p>
          <h3 className="text-2xl mt-1"> {formatNaira(19100)}</h3>
        </div>

        <div className="py-2 px-3 border border-border rounded-md">
          <p> Supporters </p>
          <h3 className="text-2xl mt-1"> 10 </h3>
        </div>
      </div>

      {isDropdownOpen && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: [0.5, 1] }}
          className="absolute top-16 right-4 w-24 flex flex-col p-2 bg-card text-card-foreground rounded-md"
        >
          {durationFilters.map((duration, idx) => (
            <div
              key={idx}
              onClick={() => {
                setStatsDuration(duration);
                setIsDropdownOpen(false);
              }}
              className="capitalize p-2 rounded-md transition-colors duration-300 hover:bg-accent"
            >
              {duration.split("-").join(" ")}
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
};
export default UserStats;
