'use client';

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = zod.object({
    name: zod.string().min(1)
})

export const StoreModal = () => {
    const storeModal = useStoreModal();
    const form = useForm<zod.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: 'Bram'
        }
    });

    const onSubmit = async (value: zod.infer<typeof formSchema>) => {
        console.log(value);
    };

    return (
        <Modal
            title="Create store"
            description="Add a new store to manage products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}>
            <div>
                <div className="space-y-4 py-2 pb-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                name='name'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="E-commerce"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="pt-6 space-x-2 flex-items-center justify-end w-full">
                                <Button variant="outline" onClick={() => storeModal.onClose()}>Cancel</Button>
                                <Button type="submit">Continue</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
    );
};
