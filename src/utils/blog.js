import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/data/blog');

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => path.extname(fileName).toLowerCase() === '.md')
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: frontmatter, content } = matter(fileContents);
      
      return {
        slug: fileName.replace(/\.md$/, ''),
        ...frontmatter,
        content
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter, content } = matter(fileContents);

    return {
      slug,
      ...frontmatter,
      content
    };
  } catch (error) {
    console.error(`Error getting blog post with slug ${slug}:`, error);
    return null;
  }
}

export async function getBlogPostBySlug(slug) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    console.log('Looking for blog post at:', fullPath);
    
    if (!fs.existsSync(fullPath)) {
      console.log('Blog post not found:', fullPath);
      throw new Error(`Blog post not found: ${slug}`);
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    // Ensure date is serializable, with a fallback
    let date = matterResult.data.date;
    if (!date) {
      date = new Date().toISOString();
    } else if (date instanceof Date) {
      date = date.toISOString();
    } else if (typeof date === 'string') {
      const parsedDate = new Date(date);
      if (!isNaN(parsedDate.getTime())) {
        date = parsedDate.toISOString();
      } else {
        date = new Date().toISOString();
      }
    }
    
    // Return the raw content for MDX processing
    const post = {
      slug,
      content: matterResult.content,
      frontMatter: {
        ...matterResult.data,
        date,
        excerpt: matterResult.data.excerpt || matterResult.content.slice(0, 150) + '...',
      }
    };

    return post;
  } catch (error) {
    console.error(`Error getting blog post with slug ${slug}:`, error);
    throw error;
  }
} 