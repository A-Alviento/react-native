import React from 'react';

export type propTypes = {
    children: React.ReactNode // standard type for anything that can be rendered
};

export type blogPostsType = {
    title: string;
};

export type blogPostsContext = {
    data: blogPostsType[],
    addBlogPost: () => void
};