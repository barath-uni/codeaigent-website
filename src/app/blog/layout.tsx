import Link from 'next/link';

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col bg-brand-floralWhite">
            {/* Header */}
            <Header />
            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
} 