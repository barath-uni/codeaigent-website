'use client';

import Link from "next/link";

export function Header() {
    return (
        <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm border-b border-brand-jordyBlue/20 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-brand-byzantineBlue">
                    CodeAIgent
                </Link>
                <nav className="flex items-center gap-6">
                    <Link href="/blog" className="text-brand-licorice hover:text-brand-byzantineBlue transition-colors">
                        Blog
                    </Link>
                </nav>
            </div>
        </header>
    );
} 