"use client"

import Navbar from '@/components/Navbar';
// context/ServiceContext.tsx
import { createContext, ReactNode, useContext, useState } from 'react';

// Define a type for the context value
interface ServiceContextType {
    products: any[]; // Replace `any` with the specific type of your product if possible
    setProducts: (products: any[]) => void;
}

// Create the context with a default value
export const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export default function ServiceProvider({ children }: { children: ReactNode }) {
    const [products, setProducts] = useState<any[]>([]); // Initialize with an empty array
    
    return (
        <div>
            <ServiceContext.Provider value={{ products, setProducts }}>
                <Navbar />
                {children}
                
            </ServiceContext.Provider>
        </div>
    );
}

// Custom hook to use the ServiceContext
export const useServiceContext = () => {
    const context = useContext(ServiceContext);
    if (!context) {
        throw new Error('useServiceContext must be used within a ServiceProvider');
    }
    return context;
};
