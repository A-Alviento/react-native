import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationStackProp } from "react-navigation-stack";

const ResultsShowScreen = ( { navigation } : { navigation: NavigationStackProp }) => {
    const id: string = navigation.getParam('id');
    return (
        <View>
            <Text>
                Results show
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;