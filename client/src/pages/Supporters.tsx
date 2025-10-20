import { useState } from "react";
import TabSection from "@/components/ui/TabSection";
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
      <TabSection
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        tabsList={["supporters", "settings"]}
      />

      {currentTab === "supporters" ? <AllSupporters /> : <Settings />}
    </section>
  );
};
export default Supporters;
