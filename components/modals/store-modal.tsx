'use client';

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";
import { useForm } from "react-hook-form";

const formSchema = zod.object({
    name: zod.string().min(1)
})

export const StoreModal = () => {
    const storeModal = useStoreModal();
    const form = useForm<zod.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });

    return (
        <Modal
            title="Create store"
            description="Add a new store to manage products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}>
            TODO: Create Store Form.
        </Modal>
    );
};
