import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Posts() {
  const users = await prisma.user.findMany({});

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Users
      </h1>
      <ul className="font-[family-name:var(--font-geist-sans)] max-w-2xl space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-gray-800 hover:bg-gray-700 cursor-pointer p-4 rounded text-white"
          >
            <Link href={`/post/${user.id}`}>
              <span className="font-semibold ">{user.fullName}</span>
              <span className="text-sm  ml-2">email: {user.emailAddress}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
