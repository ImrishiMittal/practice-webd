"use client";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";

export default function DrawerPage() {
  return (
    <div className="flex justify-center items-center h-screen">

      <Drawer>

        <DrawerTrigger className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Open Drawer
        </DrawerTrigger>

        <DrawerContent>

          <DrawerHeader>
            <DrawerTitle>
              Delete User
            </DrawerTitle>

            <DrawerDescription>
              Are you sure you want to delete this user?
            </DrawerDescription>
          </DrawerHeader>

          <DrawerFooter>

            <button className="bg-red-600 text-white px-4 py-2 rounded">
              Delete
            </button>

            <DrawerClose className="border px-4 py-2 rounded">
              Cancel
            </DrawerClose>

          </DrawerFooter>

        </DrawerContent>

      </Drawer>

    </div>
  );
}