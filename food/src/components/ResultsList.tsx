import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { result } from '../api/yelp';
import ResultDetail from './ResultDetail';

const ResultsList = ({ title, results } : { title: string, results: result[] }) => {
    return <View>
        <Text style={styles.title}>{title}</Text>
        <Text>Results: {results.length}</Text>
        <FlatList
            horizontal = {true}
            data = {results}
            keyExtractor = {(result) => result.id}
            renderItem = {({ item }) => {
                return <ResultDetail result={item} />
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList; 