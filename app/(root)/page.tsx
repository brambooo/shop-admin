'use client';

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <>
      <p>Hello Brammie</p>
      <Modal isOpen={true} title={""} description={""} onClose={function (): void {
        throw new Error("Function not implemented.");
      }}>
        Children bla
      </Modal>
      <UserButton afterSignOutUrl="/"></UserButton>
    </>
  )
}
