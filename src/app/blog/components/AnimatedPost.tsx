'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '@/lib/ghost';

export function AnimatedPost({ post }: { post: Post }) {
    return (
        <article className="min-h-screen bg-brand-floralWhite">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] min-h-[400px] bg-brand-jordyBlue/10">
                {post.feature_image ? (
                    <>
                        <Image
                            src={post.feature_image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                    </>
                ) : (
                    <div className="w-full h-full bg-gradient-to-r from-brand-jordyBlue to-brand-byzantineBlue opacity-20" />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto px-4 text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm md:text-base text-white/90">
                            <time className="drop-shadow-md" dateTime={post.published_at}>
                                {new Date(post.published_at).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                            <span className="drop-shadow-md">{post.reading_time} min read</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-4xl mx-auto px-4 py-12"
            >
                {/* Tags */}
                {post.tags.length > 0 && (
                    <div className="mb-8 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag.slug}
                                className="bg-brand-jordyBlue/10 text-brand-byzantineBlue px-3 py-1 rounded-full text-sm font-medium"
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                )}

                {/* Article Content */}
                <div 
                    className="prose prose-lg max-w-none 
                        prose-headings:text-brand-licorice prose-headings:font-bold
                        prose-p:text-brand-licorice/80
                        prose-a:text-brand-byzantineBlue prose-a:no-underline hover:prose-a:text-brand-sapphire
                        prose-strong:text-brand-licorice
                        prose-code:text-brand-byzantineBlue prose-code:bg-brand-jordyBlue/10 prose-code:px-1 prose-code:rounded
                        prose-pre:bg-white/80 prose-pre:shadow-sm prose-pre:border prose-pre:border-brand-jordyBlue/20
                        prose-img:rounded-xl prose-img:shadow-lg"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />

                {/* Back to Blog */}
                <div className="mt-12 pt-8 border-t border-brand-jordyBlue/20">
                    <Link 
                        href="/blog"
                        className="inline-flex items-center text-brand-byzantineBlue hover:text-brand-sapphire transition-colors group"
                    >
                        <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to all posts
                    </Link>
                </div>
            </motion.div>
        </article>
    );
} 