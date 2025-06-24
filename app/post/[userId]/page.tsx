
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { redirect } from "next/navigation";



async function userDetails({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {

  const { userId } = await params;
  const user = await prisma.user.findUnique({
    where: { id: parseInt(userId) },
  });

  if (!user) {
    notFound();
  }
  // function to delete user.
async function deleteUser(userId: number){
  try{
    const deletedUser = await prisma.user.delete({
      where: { id: userId}
    });
    console.log('Successfully deleted this User: ', deletedUser)
  }
  catch(ex : unknown){
    if( ex instanceof Error){
      console.log(ex.message)
    }
    console.log('An unknown error occoured..')
  }
  finally{
    redirect('/post')

    await prisma.$disconnect()
  }
}

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <article className="max-w-2xl bg-gray-300 p-4 rounded space-y-4 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl font-bold mb-8 text-[#333333]">
          {user.emailAddress}
        </h1>
        <p className="text-gray-600 text-center">by {user.fullName}</p>
        <div className="flex gap-4 justify-end text-sm">
          <button className="cursor-pointer hover:underline">Update</button>
          <button className="cursor-pointer hover:underline" 
          onClick={() =>deleteUser(user.id)}>Delete</button>
        </div>
      </article>
    </div>
  );
}

export default userDetails;
