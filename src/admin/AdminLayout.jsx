import Sidebar from "./Sidebar";
import "./admin.css";

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="admin-content">{children}</main>
    </div>
  );
}

export default AdminLayout;