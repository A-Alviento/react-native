import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { result } from '../api/yelp';
import ResultDetail from './ResultDetail';
import { navProp } from '../screens/SearchScreen';

const ResultsList = ({ title, results, navigation } : { title: string, results: result[], navigation: navProp['navigation'] }) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal = {true}
            showsHorizontalScrollIndicator = {false}
            data = {results}
            keyExtractor = {(result) => result.id}
            renderItem = {({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow')}>
                        <ResultDetail result={item} />
                    </TouchableOpacity>
                )
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList; 