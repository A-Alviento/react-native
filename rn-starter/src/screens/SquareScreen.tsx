import React, { useReducer } from 'react'
import { View, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 50;

interface ColorState {
    red: number;
    green: number;
    blue: number;
}

interface ColorAction {
    type: string;
    payload: number;
}

const reducer = (state: ColorState, action: ColorAction) => {
    // state === { red: number, green: number, blue: number };
    // action === { type: 'red' || 'green' || 'blue', payload: 15 || -15 }
    switch(action.type) {
        case 'red':
            // never do state.red = state.red - 15
            return {
                ...state, red: state.red + action.payload < 0 
                || state.red + action.payload > 255 
                ? state.red 
                : state.red + action.payload
            };  //red gets overwritten here with the new value
        case 'blue':
            return {
                ...state, blue: state.blue + action.payload < 0 
                || state.blue + action.payload > 255 
                ? state.blue 
                : state.blue + action.payload
            };
        case 'green':
            return {
                ...state, green: state.green + action.payload < 0 
                || state.green + action.payload > 255 
                ? state.green : state.green + action.payload
            };
        default:
            return state;
    }
};

const SquareScreen = () => {


    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state; // destructuring

    return <View>
        <ColorCounter
            title="Red"
            onIncrease={() => dispatch({ type: 'red', payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({ type: 'red', payload: -COLOR_INCREMENT})}
        />
        <ColorCounter
            title="Green"
            onIncrease={() => dispatch({ type: 'green', payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({ type: 'green', payload: -COLOR_INCREMENT})}
        />
        <ColorCounter
            title="Blue"
            onIncrease={() => dispatch({ type: 'blue', payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({ type: 'blue', payload: -COLOR_INCREMENT})}
        />
        <Button
            title="Reset"
            onPress={() => {
                dispatch({ type: 'red', payload: -state.red})
                dispatch({ type: 'green', payload: -state.green})
                dispatch({ type: 'blue', payload: -state.blue})
            }}
        />
        <View
            style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}
        />
    </View>
};

const Styles = StyleSheet.create(() => {
    
});

export default SquareScreen;