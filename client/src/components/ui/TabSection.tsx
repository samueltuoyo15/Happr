import type { Dispatch, SetStateAction } from "react";
import Button from "@/components/ui/Button";

type TabSectionProps<T extends string> = {
  currentTab: T;
  setCurrentTab: Dispatch<SetStateAction<T>>;
  tabsList: T[];
};

const TabSection = <T extends string>({
  currentTab,
  setCurrentTab,
  tabsList
}: TabSectionProps<T>) => {
  return (
    <div className="w-fit flex items-center gap-4">
      {tabsList.map(tabItem => (
        <Button
          key={tabItem}
          variant={currentTab === tabItem ? "filled" : "outline"}
          className="capitalize rounded-md"
          onClick={() => setCurrentTab(tabItem)}
        >
          {tabItem}
        </Button>
      ))}
    </div>
  );
};

export default TabSection;
