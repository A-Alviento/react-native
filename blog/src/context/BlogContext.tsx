import React from 'react';
import { blogPostsType, blogPostsActionType } from '../types';
import createDataContext from './createDataContext';

const blogReducer = (state: blogPostsType[], action: blogPostsActionType) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter((blogpost) => blogpost.id !== action.payload.id);
        case 'add_blogpost':
            return [...state, 
                {
                    id: Math.floor(Math.random() * 9999), 
                    title: action.payload.title?action.payload.title:`Blog Post #${state.length + 1}`,
                    content: action.payload.content
                }];
        default:
            return state;
    }
};

const addBlogPost = (dispatch: React.Dispatch<blogPostsActionType>) => {
    return (title: string, content: string) => {
        dispatch({ type: 'add_blogpost', payload: { title, content } });
    }
};

const deleteBlogPost = (dispatch: React.Dispatch<blogPostsActionType>) => {
    return (id: number) => {
        dispatch({ type: 'delete_blogpost',  payload: { id }})
    }
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost: addBlogPost, deleteBlogPost: deleteBlogPost }, [])