import { Link } from "react-router-dom";
import { ChartBar } from "lucide-react";
import { PayoutSettings } from "@/features/payouts";

const Payout = () => {
  return (
    <section
      aria-label="Payout Settings"
      className="w-full flex flex-col gap-8"
    >
      <div className="w-full flex items-center justify-between gap-3">
        <h2 className="text-2xl">Payout Settings</h2>

        <Link
          to="/payout-logs"
          className="flex items-center gap-2 bg-card text-card-foreground py-2
          px-3 whitespace-nowrap rounded-sm"
        >
          <ChartBar /> Payout Logs
        </Link>
      </div>

      <PayoutSettings />
    </section>
  );
};
export default Payout;
