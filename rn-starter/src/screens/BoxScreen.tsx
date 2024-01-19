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
        borderWidth: 1,
        borderColor: 'black'
    },
    viewOneStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'pink',
        alignSelf: 'flex-start'
    },
    viewTwoStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        alignSelf: 'center',
        bottom: 20
    },
    viewThreeStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'purple',
        alignSelf:'flex-end',
        position: 'absolute'
    }
});

export default BoxScreen;