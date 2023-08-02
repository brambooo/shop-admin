'use client';

import { StoreModal } from '@/components/modals/store-modal';
import React, { useEffect, useState } from 'react';

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Avoid hydration errors. (When server side rendering nothing)
    if (!isMounted) return null;

    return (
        <>
            <StoreModal />
        </>
    )
};
