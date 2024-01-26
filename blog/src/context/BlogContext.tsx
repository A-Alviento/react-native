import React, { useReducer } from 'react';
import { propTypes, blogPostsType, blogPostsActionType, blogPostsContext } from '../types';

const BlogContext = React.createContext<blogPostsContext>({} as blogPostsContext);

const blogReducer = (state: blogPostsType[], action: blogPostsActionType) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default:
            return state;
    }
};

export const BlogProvider: React.FC<propTypes> = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost' });
    };

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {children}
    </BlogContext.Provider>;
};

export default BlogContext;