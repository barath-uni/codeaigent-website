'use client';

import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full py-8 px-6 bg-white/80 backdrop-blur-sm border-t border-brand-jordyBlue/20">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-4 text-brand-licorice/70">
                        <Link href="/privacy" className="hover:text-brand-byzantineBlue transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/disclaimer" className="hover:text-brand-byzantineBlue transition-colors">
                            Disclaimer
                        </Link>
                    </div>
                    <div className="flex gap-4 text-brand-licorice/70">
                        <a href="https://twitter.com/codeaigent" target="_blank" rel="noopener noreferrer" className="hover:text-brand-byzantineBlue transition-colors">
                            Twitter
                        </a>
                        <a href="https://linkedin.com/company/codeaigent" target="_blank" rel="noopener noreferrer" className="hover:text-brand-byzantineBlue transition-colors">
                            LinkedIn
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-brand-licorice/70">
                    <p>&copy; {new Date().getFullYear()} CodeAIgent. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
} 