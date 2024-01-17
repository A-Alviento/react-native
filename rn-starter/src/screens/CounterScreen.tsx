import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface counterState {
    counter: number;
}

interface counterAction {
    type?: string;
    payload: number;
}


const CTR_INCREMENT = 1;

const reducer = (state: counterState, action: counterAction) => {
    return { ...state, counter: state.counter + action.payload };
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 })

    const { counter } = state

    return <View>
        <Button 
            title='Increase'
            onPress={() => {
                dispatch({ payload: CTR_INCREMENT })
            }}
        />
        <Button 
            title='Decrease'
            onPress={() => {
                dispatch({ payload: -CTR_INCREMENT })
            }}
        />
        <Text>Current Count: {counter}</Text>
    </View>
};

const styles = StyleSheet.create({

});

export default CounterScreen;