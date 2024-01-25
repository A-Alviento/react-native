import React from 'react';
import { propTypes, blogPostsType } from '../types';

const BlogContext = React.createContext<blogPostsType[]>([]);

export const BlogProvider: React.FC<propTypes> = ({ children }) => {
    const blogPosts = [
        { title: 'Blog Post #1' },
        { title: 'Blog Post #2' }
    ];

    return <BlogContext.Provider value={blogPosts}>
        {children}
    </BlogContext.Provider>;
};

export default BlogContext;