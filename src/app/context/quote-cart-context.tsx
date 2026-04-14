"use client";

import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useMemo,
    useEffect,
} from "react";
import { Product } from "../data/products";

export type QuoteItem = {
    product: Product;
    quantity: number;
    note?: string;
};

type CustomerData = {
    name: string;
    phone: string;
    email?: string;
    comments?: string;
};

type QuoteCartContextType = {
    items: QuoteItem[];
    customerData: CustomerData | null;
    addItem: (product: Product, quantity?: number) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    setCustomerData: (data: CustomerData) => void;
    totalItems: number;
    totalReference: number;
};

const QuoteCartContext = createContext<QuoteCartContextType | undefined>(
    undefined
);

const STORAGE_KEY: string = 'QuoteCart:v1';

export const QuoteCartProvider = ({ children }: { children: ReactNode }) => {
    const [isClient, setIsClient] = useState<boolean>(false)
    const [items, setItems] = useState<QuoteItem[]>([]);

    const [customerData, setCustomerDataState] = useState<CustomerData | null>(
        null
    );

    useEffect(() => {
        try {
            const row = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
            if (!row) {
                setIsClient(false)
                return
            }
            const parse = JSON.parse(row)
            if (Array.isArray(parse.items)) setItems(parse.items)
        } catch (error) {
            console.warn('Error al leer los prodcutos del carrito', error)
        } finally {
            setIsClient(true)
        }
    }, [])

    useEffect(() => {
        try {
            if (!isClient) return
            const payload = JSON.stringify({ items })
            localStorage.setItem(STORAGE_KEY, payload)
        } catch (error) {
            console.warn('Error al guardar en localStorage', error)
        }
    }, [items, isClient])

    const addItem = (product: Product, quantity: number = 1) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.product.id === product.id);
            if (existing) {
                return prev.map((i) =>
                    i.product.id === product.id
                        ? { ...i, quantity: i.quantity + quantity }
                        : i
                );
            }
            return [...prev, { product, quantity }];
        });
    };

    const removeItem = (productId: string) => {
        setItems((prev) => prev.filter((i) => i.product.id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            return removeItem(productId);
        }
        setItems((prev) =>
            prev.map((i) =>
                i.product.id === productId ? { ...i, quantity } : i
            )
        );
    };

    const clearCart = () => {
        setItems([]);
        setCustomerDataState(null);
    };

    const setCustomerData = (data: CustomerData) => {
        setCustomerDataState(data);
    };

    const { totalItems, totalReference } = useMemo(() => {
        const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
        const totalReference = items.reduce(
            (acc, item) => acc + item.quantity * item.product.price,
            0
        );
        return { totalItems, totalReference };
    }, [items]);

    const value: QuoteCartContextType = {
        items,
        customerData,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        setCustomerData,
        totalItems,
        totalReference,
    };

    return (
        <QuoteCartContext.Provider value={value}>
            {children}
        </QuoteCartContext.Provider>
    );
};

export const useQuoteCart = () => {
    const ctx = useContext(QuoteCartContext);
    if (!ctx) {
        throw new Error("useQuoteCart must be used within a QuoteCartProvider");
    }
    return ctx;
};
