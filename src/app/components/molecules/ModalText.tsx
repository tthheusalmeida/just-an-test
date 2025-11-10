"use client";

import { lazy, Suspense } from "react";

const LazyModal = lazy(() => import("../molecules/Modal"));

interface ModalTextProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function ModalText({
  isOpen,
  onClose,
  title,
  children,
}: ModalTextProps) {
  return (
    <Suspense fallback={null}>
      <LazyModal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        className="flex flex-col h-full justify-between pb-8 pt-16"
      >
        <div
          className="flex flex-col gap-4 w-full overflow-y-auto py-8 overflow-x-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 4%, black 96%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 4%, black 96%, transparent 100%)",
          }}
        >
          {children}
        </div>
      </LazyModal>
    </Suspense>
  );
}
