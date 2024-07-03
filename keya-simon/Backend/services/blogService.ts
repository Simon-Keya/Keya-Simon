import BlogPost, { IBlogPost } from '../models/Post';

// Create a new blog post
export async function createBlogPost(blogPostData: any): Promise<IBlogPost> {
  try {
    const blogPost = new BlogPost(blogPostData);
    await blogPost.save();
    return blogPost;
  } catch (error) {
    throw error; // Re-throw for error handling in the controller
  }
}

// Get a blog post by ID
export async function getBlogPostById(blogPostId: string): Promise<IBlogPost | null> {
  try {
    const blogPost = await BlogPost.findById(blogPostId).exec();
    return blogPost;
  } catch (error) {
    throw error; // Re-throw for error handling in the controller
  }
}

// Update a blog post
export async function updateBlogPost(blogPostId: string, updatedBlogPost: any): Promise<IBlogPost | null> {
  try {
    const blogPost = await BlogPost.findByIdAndUpdate(
      blogPostId,
      updatedBlogPost,
      { new: true, runValidators: true }
    ).exec();
    return blogPost;
  } catch (error) {
    throw error; // Re-throw for error handling in the controller
  }
}

// Delete a blog post
export async function deleteBlogPost(blogPostId: string): Promise<void> {
  try {
    await BlogPost.findByIdAndDelete(blogPostId).exec();
  } catch (error) {
    throw error; // Re-throw for error handling in the controller
  }
}

// Get all blog posts
export async function getAllBlogPosts(): Promise<IBlogPost[]> {
  try {
    const blogPosts = await BlogPost.find().exec();
    return blogPosts;
  } catch (error) {
    throw error; // Re-throw for error handling in the controller
  }
}

// Search blog posts by title or content
export async function searchBlogPosts(searchTerm: string): Promise<IBlogPost[]> {
  try {
    const blogPosts = await BlogPost.find({
      $or: [
        { title: { $regex: searchTerm, $options: 'i' } },
        { content: { $regex: searchTerm, $options: 'i' } }
      ]
    }).exec();
    return blogPosts;
  } catch (error) {
    throw error; // Re-throw for error handling in the controller
  }
}
