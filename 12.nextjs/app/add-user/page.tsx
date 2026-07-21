"use client";

import { useActionState } from "react";
import { createUser } from "../actions";

const initialState = {
  success: false,
  message: "",
};

export default function AddUserPage() {
  const [state, formAction] = useActionState(
    createUser,
    initialState
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-5">
        Add User
      </h1>

      <form action={formAction}>

        <input
          name="name"
          placeholder="Name"
          className="border p-2 block mb-3"
        />

        <input
          name="email"
          placeholder="Email"
          className="border p-2 block mb-3"
        />

        <select
          name="role"
          className="border p-2 block mb-3"
        >
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
        </select>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add User
        </button>

      </form>

      {state.message && (
        <p
          className={`mt-4 ${
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