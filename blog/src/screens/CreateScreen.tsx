import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationStackProp } from "react-navigation-stack";
import { Context } from '../context/BlogContext';
import { blogPostsType } from '../types';

const CreateScreen = ({ navigation }: {navigation: NavigationStackProp}) => {
    return (
    <View>
        <Text>create</Text>
    </View>
    );
};

const styles = StyleSheet.create({});

export default CreateScreen;