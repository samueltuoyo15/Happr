import { GreetUser, UserStats, RecentSupporters } from "@/features/dashboard";

const Dashboard = () => {
  return (
    <section aria-label="dashboard page" className="w-full flex flex-col gap-8">
      <GreetUser />
      <UserStats />
      <RecentSupporters />
    </section>
  );
};
export default Dashboard;
