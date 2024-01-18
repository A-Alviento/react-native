import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    console.log(name)
    return <View>
        <Text>Enter Password:</Text>
        <TextInput 
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
        />
        <Text>{name.length < 6 ? <Text>Password must be longer than 5 characters</Text> : null};</Text>
    </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;