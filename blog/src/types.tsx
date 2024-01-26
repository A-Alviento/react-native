import React from 'react';

export type propTypes = {
    children: React.ReactNode // standard type for anything that can be rendered
};

export type blogPostsType = {
    id: number,
    title: string;
};

export type blogPostsActionType = {
    type: string;
};

export type blogPostsContext = {
    data: blogPostsType[],
    addBlogPost: () => void
};