"use client";

import { useActionState } from "react";
import { createUser } from "../actions";
import SubmitButton from "./SubmitButton";

const initialState = {
  success: false,
  message: "",
};

export default function AddUser() {
  const [state, formAction] = useActionState(
    createUser,
    initialState
  );

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-5">
        Add User
      </h1>

      <form action={formAction} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-2 block w-80"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 block w-80"
        />

        <select
          name="role"
          className="border p-2 block w-80"
        >
          <option value="">Select Role</option>
          <option value="Student">Student</option>
          <option value="Instructor">Instructor</option>
        </select>

        <SubmitButton />

      </form>

      {state.message && (
        <p
          className={`mt-5 ${
            state.success
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {state.message}
        </p>
      )}

    </div>
  );
}