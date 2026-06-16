import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../auth";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <h2 className="logo">Admin</h2>

      <nav>
        <NavLink to="/admin" end>
          Dashboard
        </NavLink>
        <NavLink to="/admin/posts">
          Posts
        </NavLink>
        <NavLink to="/admin/manage-posts">
          Manage Posts
        </NavLink>
      </nav>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;