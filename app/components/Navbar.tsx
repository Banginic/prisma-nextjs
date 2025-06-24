import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header className=" p-4 bg-gray-50">
      <nav className="flex items-center gap-8 justify-around">
        <Link href={"/"} className="text-lg font-bold">
          Prisma | Next js{" "}
        </Link>
        <ul className="flex gap-4">
          <li className="hover:bg-gray-100 rounded-sm">
            <Link href={"/post"}>Users</Link>
          </li>
          <li className="hover:bg-gray-100 rounded-sm">
            <Link href={"/post/create-user"}>Add user</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
