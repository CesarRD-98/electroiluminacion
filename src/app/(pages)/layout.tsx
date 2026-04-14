import { ReactNode } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import WhatsAppButton from "../components/layout/WhatsappButton";
import { QuoteCartProvider } from "../context/quote-cart-context";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <QuoteCartProvider>
            <main className="min-h-screen">
                <Header />
                {children}
                <Footer />
                <WhatsAppButton />
            </main>
        </QuoteCartProvider>
    )
}