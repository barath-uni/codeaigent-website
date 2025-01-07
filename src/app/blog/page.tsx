import { getPosts } from '@/lib/ghost';
import { AnimatedHeader } from './components/AnimatedHeader';
import { AnimatedContainer } from './components/AnimatedContainer';
import { AnimatedBlogCard } from './components/AnimatedBlogCard';

export const revalidate = 3600;

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="container mx-auto px-4 py-12">
            <AnimatedHeader />
            <AnimatedContainer>
                {posts.map((post) => (
                    <AnimatedBlogCard key={post.slug} post={post} />
                ))}
            </AnimatedContainer>
        </div>
    );
} 