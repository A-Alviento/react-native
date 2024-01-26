import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationStackProp } from "react-navigation-stack";
import { Context } from '../context/BlogContext';
import { blogPostsType } from '../types';
import BlogPostForm from '../component/BlogPostForm';

const CreateScreen = ({ navigation }: {navigation: NavigationStackProp}) => {
    const { addBlogPost } = useContext(Context);

    return <BlogPostForm/>

};

const styles = StyleSheet.create({
});

export default CreateScreen;