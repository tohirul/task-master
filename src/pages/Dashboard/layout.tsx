import { Link, Outlet } from "@tanstack/react-router";

export default function DashboardLayout() {
  return (
    <div>
      <aside>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/settings">Settings</Link>
          </li>
          <li>
            <Link to="/dashboard/tasks">My Tasks</Link>
          </li>
        </ul>
      </aside>
      <Outlet />
    </div>
  );
}
