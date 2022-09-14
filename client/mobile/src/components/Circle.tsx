import React from 'react';
import { View} from 'react-native';
import { CircleType } from '../types/types';

const Circle = (circleType: CircleType) => {
    return (
        <View
            style={{
                width: circleType.size,
                height: circleType.size,
                backgroundColor: circleType.color,
                borderRadius: 1000,
                overflow: 'hidden',
                opacity: 0.65,
                left: circleType.left,
                top: circleType.top,
            }} />

    );
}

export default Circle;