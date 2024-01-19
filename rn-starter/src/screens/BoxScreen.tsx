import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <View style={styles.viewOneStyle}/>
        <View style={styles.viewTwoStyle}/>
        <View style={styles.viewThreeStyle}/>
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'pink',
    },
    viewTwoStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        top: 80
    },
    viewThreeStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'purple',
        alignSelf:'flex-end',
    }
});

export default BoxScreen;