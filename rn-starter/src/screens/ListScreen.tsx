import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 20 },
        { name: 'Friend #2', age: 45 },
        { name: 'Friend #3', age: 32 },
        { name: 'Friend #4', age: 27 },
        { name: 'Friend #5', age: 53 },
        { name: 'Friend #6', age: 30 },
        { name: 'Friend #7', age: 21 },
        { name: 'Friend #8', age: 18 },
        { name: 'Friend #9', age: 15 }
    ]

    return (
        <FlatList 
            keyExtractor={friend => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                // element === { item: { name: 'Friend #1' }, index: 0 }; item === { name: 'Friend #1' }
                return <Text style={styles.textStyle}>
                    {item.name} - Age {item.age}
                </Text>
            }}/>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20
    }
});

export default ListScreen;