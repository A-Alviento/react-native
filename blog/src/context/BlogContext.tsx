import React, { useState } from 'react';
import { propTypes, blogPostsType, blogPostsContext } from '../types';

const BlogContext = React.createContext<blogPostsContext>({} as blogPostsContext);

export const BlogProvider: React.FC<propTypes> = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState<blogPostsType[]>([]);

    const addBlogPost = () => {
        setBlogPosts([ ...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` } ]);
    }

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
        {children}
    </BlogContext.Provider>;
};

export default BlogContext;