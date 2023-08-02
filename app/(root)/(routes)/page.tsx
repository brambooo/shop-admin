"use client";

import { useEffect } from "react";

import { useStoreModal } from "@/hooks/use-store-modal";

/**
 * SetupPage is only used to trigger the login modal. 
 */
const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
};

export default SetupPage;