import { useState } from "react";
import Button from "@/components/ui/Button";
import { AllSupporters, Settings } from "@/features/supporters/components";

const Supporters = () => {
  const [currentTab, setCurrentTab] = useState<"supporters" | "settings">(
    "supporters"
  );

  return (
    <section
      aria-label="supporters page"
      className="w-full flex flex-col gap-8"
    >
      <div className="w-fit flex items-center gap-4">
        <Button
          variant={currentTab === "supporters" ? "filled" : "outline"}
          className="rounded-md"
          onClick={() => setCurrentTab("supporters")}
        >
          Supporters
        </Button>
        <Button
          variant={currentTab === "settings" ? "filled" : "outline"}
          className="rounded-md"
          onClick={() => setCurrentTab("settings")}
        >
          Settings
        </Button>
      </div>

      {currentTab === "supporters" ? <AllSupporters /> : <Settings />}
    </section>
  );
};
export default Supporters;
