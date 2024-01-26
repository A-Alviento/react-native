import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationStackProp } from "react-navigation-stack";
import { Context } from '../context/BlogContext';
import { blogPostsType } from '../types';

const ShowScreen = ({ navigation }: {navigation: NavigationStackProp}) => {
    const { state }: { state: blogPostsType[] } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
    <View>
        <Text>{blogPost?.title}</Text>
    </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;