import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationStackProp } from "react-navigation-stack";
import { Context } from '../context/BlogContext';
import { blogPostsType } from '../types';
import BlogPostForm from '../component/BlogPostForm';

const EditScreen = ({ navigation }: {navigation: NavigationStackProp}) => {
    const id = navigation.getParam('id');

    const { state, addBlogPost }: { state: blogPostsType[], addBlogPost: (title: string, content: string, callback: () => void) => void} = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return <BlogPostForm onSubmit={(title, content) => {
        console.log(title, content);
    }} initialValues={{ title: blogPost?.title??'', content: blogPost?.content??'' }}/>
};

const styles = StyleSheet.create({
});

export default EditScreen;