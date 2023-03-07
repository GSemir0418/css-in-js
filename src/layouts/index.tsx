import { Link, Outlet } from "umi";
import "uno.css";

export default function Layout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home1">Home</Link>
        </li>
        <li>
          <Link to="/home2">Home2</Link>
        </li>
        <li>
          <Link to="/home3">Home3</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
