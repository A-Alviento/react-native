import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import { ImageSourcePropType } from 'react-native';

const ImageDetail = ({ title, img, score }: { title: string, img: ImageSourcePropType, score: string }) => {
    return <View>
        <Image source={img} />
        <Text>{title}</Text>
        <Text>Image score - {score}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default ImageDetail;