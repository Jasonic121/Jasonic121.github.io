import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/data/blog');

export function getBlogPosts() {
  // Create the blog directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');
      
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      
      // Ensure date is serializable as ISO string, with a fallback
      let date = matterResult.data.date;
      if (!date) {
        date = new Date().toISOString(); // Default to current date if missing
      } else if (date instanceof Date) {
        date = date.toISOString();
      } else if (typeof date === 'string') {
        // Ensure the string is properly formatted by parsing and reformatting
        const parsedDate = new Date(date);
        if (!isNaN(parsedDate.getTime())) {
          date = parsedDate.toISOString();
        } else {
          date = new Date().toISOString(); // Fallback if string date is invalid
        }
      }
      
      // Combine the data with the slug
      return {
        slug,
        ...matterResult.data,
        date,
        excerpt: matterResult.data.excerpt || matterResult.content.slice(0, 150) + '...',
      };
    });
    
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getBlogPostBySlug(slug) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
    
    // Ensure date is serializable, with a fallback
    let date = matterResult.data.date;
    if (!date) {
      date = new Date().toISOString(); // Default to current date if missing
    } else if (date instanceof Date) {
      date = date.toISOString();
    } else if (typeof date === 'string') {
      // Ensure the string is properly formatted by parsing and reformatting
      const parsedDate = new Date(date);
      if (!isNaN(parsedDate.getTime())) {
        date = parsedDate.toISOString();
      } else {
        date = new Date().toISOString(); // Fallback if string date is invalid
      }
    }
    
    // Combine the data with the id and contentHtml
    return {
      slug,
      content: contentHtml,
      ...matterResult.data,
      date,
      excerpt: matterResult.data.excerpt || matterResult.content.slice(0, 150) + '...',
    };
  } catch (error) {
    console.error(`Error getting blog post with slug ${slug}:`, error);
    return null;
  }
} 