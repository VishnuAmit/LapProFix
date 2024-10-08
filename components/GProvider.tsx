'use client';

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface ProviderProps {
    children: ReactNode;
    session?: Session | null; 
}

const GProvider: React.FC<ProviderProps> = ({ children, session }) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    );
}

export default GProvider;
