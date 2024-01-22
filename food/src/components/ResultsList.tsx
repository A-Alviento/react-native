import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { result } from '../api/yelp';

const ResultsList = ({ title, results } : { title: string, results: result[] }) => {
    return <View>
        <Text style={styles.title}>{title}</Text>
        <Text>Results: {results.length}</Text>
    </View>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList; 