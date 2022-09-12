import React from 'react';
import { TouchableOpacity, Text, FlexStyle, TextStyle } from 'react-native';



type Props = {
    bgColor: string;
    textColor: string;
    text: string;
    onPress: () => void;
    width?: string | number;
    height?: string | number;
    borderRadius?: number;
    padding?: number;
    justifyContent?: FlexStyle['justifyContent'];
    alignItems?: FlexStyle['alignItems'];
    fontWeight?: TextStyle['fontWeight'];
    activeOpacity? : number | undefined;
};

const Button = ({
    bgColor,
    textColor,
    text,
    onPress,
    width = '100%',
    height = 50,
    borderRadius = 10,
    padding = 10,
    justifyContent = "center",
    alignItems = 'center',
    fontWeight = '600',
    activeOpacity = 0.7
}: Props) => {
    return (
        <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress} style=
            {{
                backgroundColor: bgColor,
                borderRadius: borderRadius,
                padding: padding,
                height: height,
                width: width,
                justifyContent: justifyContent,
                alignItems: alignItems
            }}>
            <Text style=
                {{
                    color: textColor,
                    fontWeight: fontWeight
                }}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export default Button;