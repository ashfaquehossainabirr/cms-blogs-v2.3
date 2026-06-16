import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Admin from "./Admin";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";
import ProtectedRoute from "./ProtectedRoute";

import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import Posts from "./admin/Posts";
import ManagePosts from "./admin/ManagePosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/posts"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Posts />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/manage-posts"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <ManagePosts />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;