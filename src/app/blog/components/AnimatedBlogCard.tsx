'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '@/lib/ghost';

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function AnimatedBlogCard({ post }: { post: Post }) {
    return (
        <motion.article
            variants={item}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-brand-jordyBlue/20 overflow-hidden hover:shadow-xl transition-all duration-300"
        >
            <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-48 bg-brand-jordyBlue/10">
                    {post.feature_image ? (
                        <Image
                            src={post.feature_image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-r from-brand-jordyBlue/20 to-brand-byzantineBlue/20" />
                    )}
                </div>
                <div className="p-6">
                    <h2 className="text-xl font-bold text-brand-licorice group-hover:text-brand-byzantineBlue transition-colors duration-300 mb-3 line-clamp-2">
                        {post.title}
                    </h2>
                    <p className="text-brand-licorice/70 text-sm line-clamp-2 mb-4">
                        {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                        <time className="text-brand-licorice/60">
                            {new Date(post.published_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}
                        </time>
                        <span className="text-brand-byzantineBlue font-medium">
                            {post.reading_time} min read
                        </span>
                    </div>
                    {post.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag.slug}
                                    className="bg-brand-jordyBlue/10 text-brand-byzantineBlue px-2 py-1 rounded-full text-xs font-medium"
                                >
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </Link>
        </motion.article>
    );
} 