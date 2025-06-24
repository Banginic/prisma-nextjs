import Form from "next/form";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewPost() {
  async function createPost(formData: FormData) {
    "use server";

    const fullName = formData.get("fullName") as string;
    const emailAddress = formData.get("emailAddress") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const age = formData.get("age") as string;

    await prisma.user.create({
      data: {
        fullName,
        emailAddress,
        phoneNumber,
        age,
      },
    });

    revalidatePath("/post");
    redirect("/post");
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create New User</h1>
      <Form action={createPost} className="space-y-4 w-sm border rounded p-4">
        <div>
          <label htmlFor="fullName" className="block text-lg mb-2">
            Full name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="emailAddress" className="block text-lg mb-2">
            Email address
          </label>
          <input
            id="emailAddress"
            name="emailAddress"
            placeholder="example@email.com"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-lg mb-2">
            Phone number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            placeholder="+1 (232) 4344 3432"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-lg mb-2">
            Age
          </label>
          <input
            id="age"
            name="age"
            placeholder="34 years"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 mt-4 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Add user
        </button>
      </Form>
    </div>
  );
}