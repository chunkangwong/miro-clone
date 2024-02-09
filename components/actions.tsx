"use client";

import type { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Link2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/useApiMutation";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { ConfirmModal } from "./confirmModal";
import { Button } from "./ui/button";

interface ActionsProp {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export function Actions({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionsProp) {
  const { mutate: remove, isLoading } = useApiMutation(api.board.remove);

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/boards/${id}`)
      .then(() => toast.success("Link copied!"))
      .catch(() => toast.error("Failed to copy link"));
  };

  const handleDelete = () => {
    remove({ id: id as Id<"boards"> })
      .then(() => toast.success("Board deleted!"))
      .catch(() => toast.error("Failed to delete board"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffset}
        className="w-60"
      >
        <DropdownMenuItem
          className="p-3 cursor-pointer"
          onClick={handleCopyLink}
        >
          <Link2 className="h-4 w-4 mr-2" />
          Copy board link
        </DropdownMenuItem>
        <ConfirmModal
          header="Delete board?"
          description="This will delete the board and all of its content"
          disabled={isLoading}
          onConfirm={handleDelete}
        >
          <Button
            className="p-3 cursor-pointer w-full justify-start font-normal"
            variant="ghost"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
