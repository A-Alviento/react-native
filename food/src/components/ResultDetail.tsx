import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { result } from '../api/yelp';

const ResultDetail = ({ result } : { result : result }) => {
    return (
        <View>
            <Text>{result.name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ResultDetail;