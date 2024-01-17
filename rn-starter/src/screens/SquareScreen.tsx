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
    colorToChange: string;
    amount: number;
}

const reducer = (state: ColorState, action: ColorAction) => {
    // state === { red: number, green: number, blue: number };
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
    switch(action.colorToChange) {
        case 'red':
            // never do state.red = state.red - 15
            return {...state, red: state.red + action.amount < 0 || state.red + action.amount > 255 ? state.red : state.red + action.amount};  //red gets overwritten here with the new value
        case 'blue':
            return {...state, blue: state.blue + action.amount < 0 || state.blue + action.amount > 255 ? state.blue : state.blue + action.amount};
        case 'green':
            return {...state, green: state.green + action.amount < 0 || state.green + action.amount > 255 ? state.green : state.green + action.amount};
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
            onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT})}
            onDecrease={() => dispatch({ colorToChange: 'red', amount: -COLOR_INCREMENT})}
        />
        <ColorCounter
            title="Green"
            onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT})}
            onDecrease={() => dispatch({ colorToChange: 'green', amount: -COLOR_INCREMENT})}
        />
        <ColorCounter
            title="Blue"
            onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT})}
            onDecrease={() => dispatch({ colorToChange: 'blue', amount: -COLOR_INCREMENT})}
        />
        <Button
            title="Reset"
            onPress={() => {
                dispatch({ colorToChange: 'red', amount: -state.red})
                dispatch({ colorToChange: 'green', amount: -state.green})
                dispatch({ colorToChange: 'blue', amount: -state.blue})
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