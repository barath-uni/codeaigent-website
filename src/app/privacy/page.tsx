import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-brand-floralWhite">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto prose prose-lg">
                    <h1 className="text-4xl font-bold text-brand-licorice mb-8">Privacy Policy</h1>
                    
                    <h2>Introduction</h2>
                    <p>
                        At CodeAIgent, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.
                    </p>

                    <h2>Information We Collect</h2>
                    <ul>
                        <li>Email addresses for early access registration</li>
                        <li>Usage data and analytics</li>
                        <li>Trello integration data (with your explicit permission)</li>
                    </ul>

                    <h2>How We Use Your Information</h2>
                    <p>
                        We use your information to:
                    </p>
                    <ul>
                        <li>Provide and improve our services</li>
                        <li>Communicate about product updates</li>
                        <li>Process early access requests</li>
                        <li>Analyze and improve our service performance</li>
                    </ul>

                    <h2>Data Protection</h2>
                    <p>
                        We implement industry-standard security measures to protect your data. Your code and Trello data are encrypted and securely stored.
                    </p>

                    <h2>Third-Party Services</h2>
                    <p>
                        We integrate with Trello and other development tools. When using these integrations, please refer to their respective privacy policies.
                    </p>

                    <h2>Updates to This Policy</h2>
                    <p>
                        We may update this policy periodically. Check back for any changes. Significant changes will be communicated directly to users.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        For privacy-related questions, contact us through our social media channels.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
} 