import DashboardLink from "../components/DashboardLink";
import { useAuthContext } from "../hooks/useAuthContext";

const Dashboard = () => {
  const { user } = useAuthContext();
  return (
    <div className="min-h-screen pt-28 px-8 bg-gray-100">
      <div className="flex flex-col gap-4 mx-auto">
        <div className="flex flex-row gap-4">
          {(user.isBoard || user.isAdvisor) && (
            <DashboardLink text="Manage Accounts" path="/accounts" />
          )}
          <DashboardLink text="Hours" path="/hours" />
          <DashboardLink text="Calendar" path="/calendar" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
