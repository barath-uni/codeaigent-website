import { getPost, getPosts } from '@/lib/ghost';
import { notFound } from 'next/navigation';
import { AnimatedPost } from '../components/AnimatedPost';

export const revalidate = 3600;

export async function generateStaticParams() {
    const posts = await getPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

interface BlogPostProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return <AnimatedPost post={post} />;
} 