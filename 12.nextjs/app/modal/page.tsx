"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export default function ModalPage() {
    return (
        <div className="flex justify-center items-center h-screen">

            <Dialog>

            <DialogTrigger className="bg-blue-600 text-white px-5 py-2 rounded-lg">
  Open Modal
</DialogTrigger>

                <DialogContent>

                    <DialogHeader>
                        <DialogTitle>
                            Delete User
                        </DialogTitle>

                        <DialogDescription>
                            Are you sure you want to delete this user?
                            This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex justify-end gap-3 mt-5">
                        <button className="border px-4 py-2 rounded">
                            Cancel
                        </button>

                        <button className="bg-red-600 text-white px-4 py-2 rounded">
                            Delete
                        </button>
                    </div>

                </DialogContent>

            </Dialog>

        </div>
    );
}