import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'

import { blogPostsType, blogPostsActionType } from '../types';

const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost }: 
        { state: blogPostsType[], 
          addBlogPost: () => void,
          deleteBlogPost: (id:number) => void } 
          = useContext(Context)

  return (
    <View>
      <Button title="Add Post" onPress={() => addBlogPost()}/>
      <FlatList 
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
            return <View style={styles.row}>
              <Text style={styles.title}>{item.title} - {item.id}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 20
  }
});

export default IndexScreen;