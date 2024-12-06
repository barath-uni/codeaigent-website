"use client";

import { motion } from "framer-motion";
// import { useForm } from "react-hook-form";
// import { 
//   ArrowRightIcon, 
//   BoltIcon,
//   CpuChipIcon,
//   CommandLineIcon,
//   CodeBracketIcon,
//   ClockIcon,
//   ShieldCheckIcon
// } from "@heroicons/react/24/outline";


export default function HomePage() {
  // const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  return (
    <div className="min-h-screen flex flex-col bg-brand-floralWhite">
      {/* Header */}
      <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm border-b border-brand-jordyBlue/20 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-brand-byzantineBlue">CodeAIgent</h1>
          <nav>
            <a href="#what-we-solve" className="text-brand-licorice hover:text-brand-byzantineBlue px-4 py-2 transition-colors">What We Solve</a>
            <a href="#how-it-works" className="text-brand-licorice hover:text-brand-byzantineBlue px-4 py-2 transition-colors">How It Works</a>
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
            CodeAIgent: <span className="text-brand-byzantineBlue">AI-Powered</span> Code Review Intelligence
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-licorice mb-8">
            Code Reviews: Boring and Distracting for Engineers
          </h2>
          <p className="text-xl text-brand-licorice/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Code reviews can be a source of annoyance and distraction. Our AI agents transform this process into a strategic advantage by integrating seamlessly with GitHub.
          </p>

          {/* What We Solve & How It Works */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 max-w-6xl mx-auto">
            {/* What We Solve */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-brand-jordyBlue/20"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-brand-licorice mb-6 text-left">What We Solve</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  {/* <BoltIcon className="w-6 h-6 text-brand-byzantineBlue mr-3 flex-shrink-0" /> */}
                  - <span className="text-lg text-brand-licorice">Reduce code review time by 40%</span>
                </li>
                <li className="flex items-start">
                  {/* <CpuChipIcon className="w-6 h-6 text-brand-byzantineBlue mr-3 flex-shrink-0" /> */}
                  - <span className="text-lg text-brand-licorice">Catch architectural issues early</span>
                </li>
                <li className="flex items-start">
                  {/* <CommandLineIcon className="w-6 h-6 text-brand-byzantineBlue mr-3 flex-shrink-0" /> */}
                  - <span className="text-lg text-brand-licorice">Bridge knowledge gaps in engineering teams</span>
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
              <h3 className="text-2xl lg:text-3xl font-bold text-brand-licorice mb-6 text-left">How It Works</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  {/* <CodeBracketIcon className="w-6 h-6 text-brand-byzantineBlue mr-3 flex-shrink-0" /> */}
                  - <span className="text-lg text-brand-licorice">AI-powered intelligent code analysis</span>
                </li>
                <li className="flex items-start">
                  {/* <ClockIcon className="w-6 h-6 text-brand-byzantineBlue mr-3 flex-shrink-0" /> */}
                  - <span className="text-lg text-brand-licorice">Seamless GitHub integration</span>
                </li>
                <li className="flex items-start">
                  {/* <ShieldCheckIcon className="w-6 h-6 text-brand-byzantineBlue mr-3 flex-shrink-0" /> */}
                  - <span className="text-lg text-brand-licorice">Context-aware review assistance</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* How Are We Different */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-brand-jordyBlue/20 mb-16"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-brand-licorice mb-6 text-left">How Are We Different</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-lg text-brand-licorice">Unlike other GitHub code review bots that work on the PR level, we have context of the entire repository.</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg text-brand-licorice">Perform architectural reviews, understand images, write documentation, and suggest improvements.</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg text-brand-licorice">Understand design patterns and style guides.</span>
              </li>
            </ul>
          </motion.div>

          {/* Early Access Form */}
          <section id="early-access" className="bg-white p-8 rounded-3xl shadow-xl border border-brand-jordyBlue/20 max-w-2xl mx-auto mb-24">
            <h3 className="text-2xl font-bold text-brand-licorice mb-2">Get on a call with us</h3>
            <p className="text-brand-licorice/70 mb-6">In our first iteration, we aim to make code reviews complete, accurate, and fast.</p>
            <form onSubmit={() => {console.log("submitted")}} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  // {...register("email", { 
                  //   required: "Email is required",
                  //   pattern: {
                  // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  //message: "Invalid email address"
                  //   }
                  // })}
                  className="flex-1 px-8 py-5 text-lg rounded-2xl bg-brand-floralWhite border-2 border-brand-jordyBlue/30 text-brand-licorice placeholder-brand-licorice/50 focus:outline-none focus:border-brand-byzantineBlue focus:ring-2 focus:ring-brand-byzantineBlue/20"
                  placeholder="Enter your work email"
                />
                <button
                  type="submit"
                  className="px-8 py-5 bg-brand-byzantineBlue rounded-2xl font-semibold text-white hover:bg-brand-sapphire transition-colors shadow-lg shadow-brand-byzantineBlue/20 text-lg whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Let&lsquo;s Chat</span>
                  {/* <ArrowRightIcon className="w-6 h-6 sm:hidden" /> */}
                </button>
              </div>
              {/* {errors.email && (
                <p className="text-brand-coquelicot text-sm font-medium">{errors.email.message}</p>
              )} */}
            </form>
          </section>

          {/* Coming Soon Banner */}
          <section className="bg-brand-byzantineBlue/5 border-t border-brand-jordyBlue/20 mt-16 py-12">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold text-brand-licorice mb-4">Coming Soon</h2>
              <div className="flex flex-wrap justify-center gap-8 text-brand-licorice/70">
                <span> - Detailed Product Insights</span>
                <span> - Free Pilot Program</span>
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
