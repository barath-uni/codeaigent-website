// Define post type
export interface Post {
    slug: string;
    title: string;
    html: string;
    feature_image: string | null;
    excerpt: string;
    published_at: string;
    reading_time: number;
    tags: Array<{
        name: string;
        slug: string;
    }>;
}

const ghostUrl = process.env.GHOST_URL ?? 'http://localhost:2368';
const ghostKey = process.env.GHOST_CONTENT_API_KEY ?? '';

async function fetchGhost<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
    const searchParams = new URLSearchParams({
        key: ghostKey,
        ...params
    });
    
    const url = `${ghostUrl}/ghost/api/v3/content/${endpoint}?${searchParams.toString()}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
        const errorText = await response.text();
        console.error('Ghost API Error Response:', errorText); // Debug log
        throw new Error(`Ghost API error: ${response.statusText}`);
    }
    
    const data = (await response.json()) as T;
    return data;
}

// Get all posts
export async function getPosts(): Promise<Post[]> {
    const data = await fetchGhost<{ posts: Post[] }>('posts', {
        include: 'tags',
        limit: 'all'
    });
    return data.posts;
}

// Get a single post by slug
export async function getPost(slug: string): Promise<Post | null> {
    try {
        const data = await fetchGhost<{ posts: Post[] }>('posts/slug/' + slug, {
            include: 'tags'
        });
        return data.posts[0] ?? null;
    } catch (err) {
        console.error(err);
        return null;
    }
}

// Get all tags
export async function getTags() {
    try {
        const data = await fetchGhost<{ tags: Array<{ name: string; slug: string }> }>('tags', {
            limit: 'all'
        });
        return data.tags;
    } catch (err) {
        console.error(err);
        return [];
    }
} 