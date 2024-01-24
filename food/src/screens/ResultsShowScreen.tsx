import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { NavigationStackProp } from "react-navigation-stack";
import yelp, { resultDetailType } from '../api/yelp';

const ResultsShowScreen = ( { navigation } : { navigation: NavigationStackProp }) => {
    const [result, setResult] = useState<resultDetailType | null>(null);
    const id: string = navigation.getParam('id');

    const getResult = async (id: string) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    
    return (
        <View>
            <Text>
                {result.name}
            </Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={( {item} ) => {
                    return <Image style={styles.image} source={{ uri: item }}/>;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
    }
});

export default ResultsShowScreen;