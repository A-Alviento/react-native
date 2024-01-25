import React from 'react';
import { propTypes } from '../types';

const BlogContext = React.createContext('');

export const BlogProvider: React.FC<propTypes> = ({ children }) => {
    return <BlogContext.Provider value={'Hi there!'}>
        {children}
    </BlogContext.Provider>;
};

export default BlogContext;