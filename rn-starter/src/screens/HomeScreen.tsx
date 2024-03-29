import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  return <View>
    <Text style={styles.text}>Hi There</Text>
    <Button 
      onPress={() => navigation.navigate('Components')}
      title="Go to Components Demo" 
    />
    <Button
      onPress={() => navigation.navigate('List')}
      title="Go to List Demo"
    />
    <Button
      onPress={() => navigation.navigate('Image')}
      title="Go to Image Demo"
    />
    <Button
      onPress={() => navigation.navigate('Counter')}
      title="Go to Counter Demo"
    />
    <Button 
      onPress={() => navigation.navigate('Color')}
      title="Go to Color Demo"
    />
    <Button
      onPress={() => navigation.navigate('SquareScreen')}
      title="Go to SquareScreen Demo"
    />
    <Button
      onPress={() => navigation.navigate('Text')}
      title="Go to TextScreen Demo"
    />
    <Button
      onPress={() => navigation.navigate('Box')}
      title="Go to BoxScreen Demo"
    />
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
