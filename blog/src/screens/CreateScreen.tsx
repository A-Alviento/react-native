import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { NavigationStackProp } from "react-navigation-stack";
import { Context } from '../context/BlogContext';
import { blogPostsType } from '../types';

const CreateScreen = ({ navigation }: {navigation: NavigationStackProp}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
    <View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
        <Button title="Add Blog Post"/>
    </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default CreateScreen;