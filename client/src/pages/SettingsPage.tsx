import { useState } from "react";
import TabSection from "@/components/ui/TabSection";
import { AccountSettings } from "@/features/settings";

const SettingsPage = () => {
  const [currentTab, setCurrentTab] = useState<"account info" | "public info">(
    "account info"
  );

  return (
    <section aria-label="settings page" className="w-full flex flex-col gap-8">
      <TabSection
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        tabsList={["account info", "public info"]}
      />

      {currentTab === "account info" ? (
        <AccountSettings />
      ) : (
        <h1> Public Info </h1>
      )}
    </section>
  );
};
export default SettingsPage;
