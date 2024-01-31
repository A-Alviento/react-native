import React from 'react';

export type propTypes = {
    children: React.ReactNode // standard type for anything that can be rendered
};

export type blogPostsType = {
    id: string,
    title: string;
    content: string;
};

export type blogPostsContext = {
    data: blogPostsType[],
    addBlogPost: () => void
};

export type blogPostsActionType = 
    | { type: 'get_blogposts'; payload: blogPostsType[] }
    | { type: 'add_blogpost'; payload: { title: string, content: string } }
    | { type: 'delete_blogpost'; payload: { id: string } }
    | { type: 'edit_blogpost'; payload: { id: string, title: string, content: string } };
