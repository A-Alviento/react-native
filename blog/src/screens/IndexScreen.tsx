import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'

import { blogPostsType, blogPostsActionType } from '../types';
import { NavigationStackProp } from 'react-navigation-stack';

const IndexScreen = ({ navigation }: { navigation: NavigationStackProp }) => {
  const { state, addBlogPost, deleteBlogPost }: 
        { state: blogPostsType[], 
          addBlogPost: () => void,
          deleteBlogPost: (id:number) => void } 
          = useContext(Context)

  return (
    <View>
      <FlatList 
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                <View style={styles.row}>
                  <Text style={styles.title}>{item.title} - {item.id}</Text>
                  <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Feather style={styles.icon} name="trash" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }: {navigation: NavigationStackProp}) => {
  return {
    headerRight: () => <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30}/>
      </TouchableOpacity>
  };
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