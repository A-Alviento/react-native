import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ColorCounter = ({ title, onIncrease, onDecrease }: { title: string, onIncrease: Function, onDecrease: Function }) => {
    return <View>
        <Text>{title}</Text>
        <Button
            onPress={() => onIncrease()}
            title = {`Increase ${title}`}
        />
        <Button
            onPress={() => onDecrease()}
            title = {`Decrease ${title}`}
        />
    </View>

}

const styles = StyleSheet.create({

});

export default ColorCounter;