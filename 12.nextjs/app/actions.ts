"use server";

import db from "@/lib/db";

export async function createUser(
  prevState: any,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const role = formData.get("role") as string;

  if (!name || !email) {
    return {
      success: false,
      message: "Name and Email are required!",
    };
  }

  try {
    await db.query(
      "INSERT INTO users(name,email,role) VALUES(?,?,?)",
      [name, email, role]
    );

    return {
      success: true,
      message: "User added successfully!",
    };
  } catch (err: any) {
    return {
      success: false,
      message: "Email already exists!",
    };
  }
}