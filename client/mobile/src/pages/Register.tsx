import React, { type PropsWithChildren, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView
} from 'react-native';
import { DefaultPageType } from '../types/types';
import { colors } from '../constants/colors';
import { Line, Button } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconBrand from 'react-native-vector-icons/FontAwesome5';

const Register = ({ navigation }: DefaultPageType) => {
    return (
        <View>
            <Text>Register</Text>
        </View>
    )
}

export default Register;