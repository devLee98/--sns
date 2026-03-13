"use client";

import { usePostEditModal } from "@/app/store/posteditmodal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ImageIcon } from "lucide-react";
import { createPortal } from "react-dom";

export default function PostEditModal() {
  const { isOpen, close } = usePostEditModal();

  const handleClostModal = () => {
    close();
  };

  // 1. 서버(SSR)에서는 바로 null 반환 (document 없음)
  if (typeof window === "undefined") {
    return null;
  }

  // 2. 클라이언트에서만 modal-root를 찾고, 없으면 null
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <Dialog open={isOpen} onOpenChange={handleClostModal}>
      <DialogContent>
        <DialogTitle>포스트 작성</DialogTitle>
        <textarea />
        <Button>
          <ImageIcon />
          이미지 추가
        </Button>
        <Button>저장</Button>
      </DialogContent>
    </Dialog>,
    modalRoot,
  );
}
