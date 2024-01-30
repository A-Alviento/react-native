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
                    title: action.payload.title?action.payload.title:'',
                    content: action.payload.content?action.payload.content:''
                }];
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            })
        default:
            return state;
    }
};

const addBlogPost = (dispatch: React.Dispatch<blogPostsActionType>) => {
    return (title: string, content: string, callback: () => void) => {
        dispatch({ type: 'add_blogpost', payload: { title, content } });
        if (callback) {
            callback();
        }
    }
};

const deleteBlogPost = (dispatch: React.Dispatch<blogPostsActionType>) => {
    return (id: number) => {
        dispatch({ type: 'delete_blogpost',  payload: { id }})
    }
};

const editBlogPost = (dispatch: React.Dispatch<blogPostsActionType>) => {
    return (id: number, title: string, content: string, callback: () => void) => {
        dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
        if (callback) {
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost: addBlogPost, deleteBlogPost: deleteBlogPost, editBlogPost: editBlogPost }, [{id: 1, title: 'TEST POST', content: 'TEST CONTENT'}])