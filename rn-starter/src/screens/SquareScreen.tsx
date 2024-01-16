import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const ColorScreenV2 = () => {
    const [red, setRed] = useState<number>(0)
    const [green, setGreen] = useState<number>(0)
    const [blue, setBlue] = useState<number>(0)

    const COLOR_INCREMENT = 50;

    const setColor = (color: string, change: number) => {
        switch(color) {
            case 'red':
                red+change > 255 || red+change < 0 ? null : setRed(red+change)
                return;
            case 'green':
                green+change > 255 || green+change < 0 ? null : setGreen(green+change)
                return;
            case 'blue':
                blue+change > 255 || blue+change < 0 ? null : setBlue(blue+change)
                return;
            default:
                return;
        }
    }

    return <View>
        <ColorCounter
            title="Red"
            onIncrease={() => setColor('red', COLOR_INCREMENT)}
            onDecrease={() => setColor('red', -COLOR_INCREMENT)}
        />
        <ColorCounter
            title="Green"
            onIncrease={() => setColor('green', COLOR_INCREMENT)}
            onDecrease={() => setColor('green', -COLOR_INCREMENT)}
        />
        <ColorCounter
            title="Blue"
            onIncrease={() => setColor('blue', COLOR_INCREMENT)}
            onDecrease={() => setColor('blue', -COLOR_INCREMENT)}
        />
        <Button
            title="Reset"
            onPress={() => {
                setRed(0)
                setGreen(0)
                setBlue(0)
            }}
        />
        <View
            style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}
        />
    </View>
};

const Styles = StyleSheet.create(() => {
    
});

export default ColorScreenV2;