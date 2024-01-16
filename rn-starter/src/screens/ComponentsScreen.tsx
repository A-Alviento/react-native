import React from 'react'; // all about how different components work together
import { Text, StyleSheet, View } from 'react-native'; // all about taking information from 'react' and presenting it to mobile device

const ComponentsScreen = () => {
    const name: string = 'Adrian';

    return (
    <View>
        <Text style={styles.header}>Getting Started with react</Text>
        <Text style={styles.body}>My name is {name}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 45
    },
    body: {
        fontSize: 20
    }
});

export default ComponentsScreen;