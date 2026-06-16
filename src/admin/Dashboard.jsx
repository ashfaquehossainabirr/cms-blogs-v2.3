import { initialPosts } from "../data/posts";
import { users } from "../data/users";
import AnalyticsCharts from "../components/AnalyticsCharts";

const Dashboard = () => {
  const totalPosts = initialPosts.length;
  const totalViews = initialPosts.reduce((a, b) => a + b.views, 0);
  const totalUsers = users.length;

  return (
    <>
      <h1>Dashboard</h1>

      <div className="stats">
        <div>Total Posts: {totalPosts}</div>
        <div>Total Views: {totalViews}</div>
        <div>Total Users: {totalUsers}</div>
      </div>

      <AnalyticsCharts />
    </>
  );
};

export default Dashboard;