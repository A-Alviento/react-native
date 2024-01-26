import React from 'react';
import { blogPostsType, blogPostsActionType } from '../types';
import createDataContext from './createDataContext';

const blogReducer = (state: blogPostsType[], action: blogPostsActionType) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, 
                {
                    id: Math.floor(Math.random() * 9999), 
                    title: `Blog Post #${state.length + 1}`
                }];
        default:
            return state;
    }
};

const addBlogPost = (dispatch: React.Dispatch<blogPostsActionType>) => {
    return () => {
        dispatch({ type: 'add_blogpost' });
    }
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost: addBlogPost }, [])