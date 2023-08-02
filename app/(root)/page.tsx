'use client';

import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

export default function SetupPage() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    console.log('useEffect SetupPage - isOpen/onOpen')
    if (!isOpen) return onOpen();
  }, [isOpen, onOpen]);

  return (
    <>
      <div className="p-4">
        <p>Hello Brammie</p>

      </div>

      <UserButton afterSignOutUrl="/"></UserButton>
    </>
  )
}
