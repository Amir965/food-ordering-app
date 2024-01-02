"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const UserTabs = ({ isAdmin }) => {
  const path = usePathname();
  return (
    <div className="flex mx-auto justify-center gap-2 tabs">
      <Link className={path === "/profile" ? "active" : ""} href={"/profile"}>
        Profile
      </Link>
      {isAdmin && (
        <>
          <Link
            className={path === "/categories" ? "active" : ""}
            href={"/categories"}
          >
            categories
          </Link>
          <Link
            className={/menuItems/.test(path) ? "active" : ""}
            href={"/menuItems"}
          >
            Menu Items
          </Link>
          <Link className={path.includes('/users') ? "active" : ""} href={"/users"}>
            Users
          </Link>
        </>
      )}
      <Link
        className={path === "/orders" ? "active" : ""}
        href={"/orders"}
      >Orders</Link>
    </div>
  );
};

export default UserTabs;
