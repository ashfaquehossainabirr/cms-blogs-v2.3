import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { viewsAnalytics, postsAnalytics } from "../data/analytics";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const AnalyticsCharts = () => {
  return (
    <div className="charts-grid">

      {/* Line Chart */}
      <div className="chart-card">
        <h3>Views Over Time</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={viewsAnalytics}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="views" stroke="#0088FE" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="chart-card">
        <h3>Post Views</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={postsAnalytics}>
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="views" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="chart-card">
        <h3>Top Posts Share</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={postsAnalytics}
              dataKey="views"
              nameKey="title"
              cx="50%"
              cy="50%"
              outerRadius={80}
            >
              {postsAnalytics.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default AnalyticsCharts;