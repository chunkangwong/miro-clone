"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { useRenameModal } from "@/store/useRenameModal";
import { DialogDescription } from "@radix-ui/react-dialog";

export const RenameModal = () => {
  const { isOpen, onClose, initialValues } = useRenameModal();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>Edit board title</DialogHeader>
        <DialogDescription>Enter a new title for this board</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
