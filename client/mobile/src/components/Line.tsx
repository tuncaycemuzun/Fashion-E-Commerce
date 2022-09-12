import React from 'react';
import { View } from 'react-native';

export type Props = {
    color: string;
};

const Line = ({ color }: Props) => {
    return (
        <View style={{
            height: 1,
            backgroundColor: color,
            marginVertical: 20
        }}></View>
    );
}

export default Line;