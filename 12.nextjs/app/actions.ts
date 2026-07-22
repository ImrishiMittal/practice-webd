"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createUser(
  prevState: {
    success: boolean;
    message: string;
  },
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const role = formData.get("role") as string;

  // Validation
  if (!name || !email || !role) {
    return {
      success: false,
      message: "All fields are required!",
    };
  }

  try {
    await db.query(
      "INSERT INTO users(name,email,role) VALUES(?,?,?)",
      [name, email, role]
    );
    revalidatePath("/users");
    redirect("/users");
  } catch (err: any) {
    return {
      success: false,
      message: "Email already exists!",
    };
  }
}