import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

async function userDetails({ params }: { params: Promise<{ userId: string}>}) {
    const { userId } = await params;
    const user = await prisma.user.findUnique({
        where: { id: parseInt(userId)}
    })

    if(!user){
        notFound()
    }

  return (
   <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <article className="max-w-2xl space-y-4 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl font-bold mb-8 text-[#333333]">{user.emailAddress}</h1>
        <p className="text-gray-600 text-center">by {user.fullName}</p>
        <div className="prose prose-gray mt-8">
        </div>
      </article>
    </div>
  );
}

export default userDetails
