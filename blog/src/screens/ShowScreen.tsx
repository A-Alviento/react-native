import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationStackProp } from "react-navigation-stack";
import { Context } from '../context/BlogContext';
import { blogPostsType } from '../types';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }: {navigation: NavigationStackProp}) => {
    const { state }: { state: blogPostsType[] } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
    <View>
        <Text>{blogPost?.title}</Text>
        <Text>{blogPost?.content}</Text>
    </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }: { navigation: NavigationStackProp }) => {
    const id = navigation.getParam('id');
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: id})}>
                <EvilIcons name="pencil" size={40}/>
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({});

export default ShowScreen;