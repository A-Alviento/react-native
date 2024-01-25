import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ResultsDetail from "./ResultDetail";
import { result } from '../api/yelp';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type ResultsListNavigationProp = StackNavigationProp<RootStackParamList, 'ResultsShow'>;

 
const ResultsList = ({ title, results } : { title: string, results: result[]}) => {
  const navigation = useNavigation<ResultsListNavigationProp>();
  if (!results.length) {
    return null;
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});
 
export default ResultsList;