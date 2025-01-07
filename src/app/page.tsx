"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { 
  ArrowRightIcon,
  CommandLineIcon,
  CodeBracketIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-brand-licorice mb-6 leading-tight">
              Transform Your <span className="text-brand-byzantineBlue">Trello Cards</span> Into Production-Ready Code
            </h1>
            <p className="text-xl text-brand-licorice/80 mb-12 leading-relaxed">
              CodeAIgent analyzes your Trello cards, understands your team&apos;s patterns, and generates scaffolded code that follows your conventions.
            </p>

            {/* Core Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-brand-jordyBlue/20"
              >
                <CommandLineIcon className="w-8 h-8 text-brand-byzantineBlue mb-4" />
                <h3 className="text-lg font-semibold text-brand-licorice mb-2">
                  Instant Code Generation
                </h3>
                <p className="text-brand-licorice/70">
                  Convert Trello cards into code scaffolds within minutes
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-brand-jordyBlue/20"
              >
                <CodeBracketIcon className="w-8 h-8 text-brand-byzantineBlue mb-4" />
                <h3 className="text-lg font-semibold text-brand-licorice mb-2">
                  Pattern Recognition
                </h3>
                <p className="text-brand-licorice/70">
                  Learns and follows your team&apos;s coding patterns and conventions
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-brand-jordyBlue/20"
              >
                <CpuChipIcon className="w-8 h-8 text-brand-byzantineBlue mb-4" />
                <h3 className="text-lg font-semibold text-brand-licorice mb-2">
                  Smart Requirements
                </h3>
                <p className="text-brand-licorice/70">
                  AI-powered analysis of card requirements and acceptance criteria
                </p>
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-brand-jordyBlue/20 max-w-2xl mx-auto"
            >
              <h2 className="text-2xl font-bold text-brand-licorice mb-2">
                Get Early Access
              </h2>
              <p className="text-brand-licorice/70 mb-6">
                Join our pilot program and transform your Trello workflow.
              </p>
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
                    className="flex-1 px-6 py-4 rounded-xl bg-brand-floralWhite border-2 border-brand-jordyBlue/30 text-brand-licorice placeholder-brand-licorice/50 focus:outline-none focus:border-brand-byzantineBlue"
                    placeholder="Enter your work email"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-brand-byzantineBlue rounded-xl text-white hover:bg-brand-sapphire transition-colors shadow-lg shadow-brand-byzantineBlue/20 whitespace-nowrap"
                  >
                    Get Started
                    <ArrowRightIcon className="w-5 h-5 inline-block ml-2" />
                  </button>
                </div>
                {errors.email && (
                  <p className="text-brand-coquelicot text-sm">{errors.email.message}</p>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
