"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { 
  ArrowRightIcon, 
  RocketLaunchIcon,
  PuzzlePieceIcon,
  DocumentTextIcon,
  CubeTransparentIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowPathIcon
} from "@heroicons/react/24/outline";

type FormData = {
  email: string;
};

export default function HomePage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // TODO: Implement email collection logic
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-floralWhite">
      {/* Header */}
      <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm border-b border-brand-jordyBlue/20 sticky top-0 z-50">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-bold text-brand-byzantineBlue">CodeAIgent</h1>
          <nav className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <a href="#features" className="text-brand-licorice hover:text-brand-byzantineBlue px-4 py-2 transition-colors">Features</a>
            <a href="#workflow" className="text-brand-licorice hover:text-brand-byzantineBlue px-4 py-2 transition-colors">Workflow</a>
            <a href="#early-access" className="text-brand-licorice hover:text-brand-byzantineBlue px-4 py-2 transition-colors">Early Access</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-licorice mb-6">
            From <span className="text-brand-byzantineBlue">Trello</span> to Code in Minutes
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-licorice mb-8">
            AI-Powered Development That Understands Your Team&apos;s Patterns
          </h2>
          <p className="text-xl text-brand-licorice/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your Trello cards into production-ready code scaffolds. Our AI understands your requirements, asks smart questions, and generates code that follows your team&apos;s conventions.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 max-w-6xl mx-auto">
            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-brand-jordyBlue/20"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-brand-licorice mb-6 text-left">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <RocketLaunchIcon className="w-6 h-6 text-brand-byzantineBlue mr-3 flex-shrink-0" />
                  <span className="text-lg text-brand-licorice">Instant code generation from Trello cards</span>
                </li>
                <li className="flex items-start">
                  <PuzzlePieceIcon className="w-6 h-6 text-brand-byzantineBlue mr-3 flex-shrink-0" />
                  <span className="text-lg text-brand-licorice">Pattern-aware implementation</span>
                </li>
                <li className="flex items-start">
                  <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-brand-byzantineBlue mr-3 flex-shrink-0" />
                  <span className="text-lg text-brand-licorice">Interactive requirement clarification</span>
                </li>
              </ul>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-brand-jordyBlue/20"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-brand-licorice mb-6 text-left">Workflow</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <DocumentTextIcon className="w-6 h-6 text-brand-byzantineBlue mr-3 flex-shrink-0" />
                  <span className="text-lg text-brand-licorice">Connect your Trello board</span>
                </li>
                <li className="flex items-start">
                  <CubeTransparentIcon className="w-6 h-6 text-brand-byzantineBlue mr-3 flex-shrink-0" />
                  <span className="text-lg text-brand-licorice">AI analyzes requirements and patterns</span>
                </li>
                <li className="flex items-start">
                  <ArrowPathIcon className="w-6 h-6 text-brand-byzantineBlue mr-3 flex-shrink-0" />
                  <span className="text-lg text-brand-licorice">Generate and iterate on code</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-brand-jordyBlue/20 mb-16"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-brand-licorice mb-6 text-left">Benefits</h3>
            <ul className="space-y-4 text-left">
              <li className="flex items-start">
                <span className="text-lg text-brand-licorice">Reduce initial development time by up to 60%</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg text-brand-licorice">Maintain consistent code structure across the team</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg text-brand-licorice">Accelerate onboarding with pattern-aware code generation</span>
              </li>
            </ul>
          </motion.div>

          {/* Early Access Form */}
          <section id="early-access" className="bg-white p-8 rounded-3xl shadow-xl border border-brand-jordyBlue/20 max-w-2xl mx-auto mb-24">
            <h3 className="text-2xl font-bold text-brand-licorice mb-2">Get on a call with us</h3>
            <p className="text-brand-licorice/70 mb-6">In our first iteration, we aim to make code reviews complete, accurate, and fast.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="flex-1 px-8 py-5 text-lg rounded-2xl bg-brand-floralWhite border-2 border-brand-jordyBlue/30 text-brand-licorice placeholder-brand-licorice/50 focus:outline-none focus:border-brand-byzantineBlue focus:ring-2 focus:ring-brand-byzantineBlue/20"
                  placeholder="Enter your work email"
                />
                <button
                  type="submit"
                  className="px-8 py-5 bg-brand-byzantineBlue rounded-2xl font-semibold text-white hover:bg-brand-sapphire transition-colors shadow-lg shadow-brand-byzantineBlue/20 text-lg whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Let&lsquo;s Chat</span>
                  <ArrowRightIcon className="w-6 h-6 sm:hidden" />
                </button>
              </div>
              {errors.email && (
                <p className="text-brand-coquelicot text-sm font-medium">{errors.email.message}</p>
              )}
            </form>
          </section>

          {/* Coming Soon Banner */}
          <section className="bg-brand-byzantineBlue/5 border-t border-brand-jordyBlue/20 mt-16 py-12">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold text-brand-licorice mb-4">Coming Soon</h2>
              <div className="flex flex-wrap justify-center gap-8 text-brand-licorice/70">
                <span>✨ Detailed Product Insights</span>
                <span> Free Pilot Program</span>
              </div>
            </div>
          </section>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 px-6 bg-white/80 backdrop-blur-sm border-t border-brand-jordyBlue/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-brand-byzantineBlue mb-4">CodeAIgent</h3>
              <p className="text-brand-licorice">Transforming code reviews with AI</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-byzantineBlue mb-4">Main</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-brand-licorice hover:text-brand-byzantineBlue">About</a></li>
                <li><a href="#" className="text-brand-licorice hover:text-brand-byzantineBlue">Contact</a></li>
                <li><a href="#" className="text-brand-licorice hover:text-brand-byzantineBlue">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-byzantineBlue mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-brand-licorice hover:text-brand-byzantineBlue">Twitter</a></li>
                <li><a href="#" className="text-brand-licorice hover:text-brand-byzantineBlue">GitHub</a></li>
                <li><a href="#" className="text-brand-licorice hover:text-brand-byzantineBlue">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-brand-jordyBlue/20 text-center text-brand-licorice">
            <p>&copy; 2024 CodeAIgent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
