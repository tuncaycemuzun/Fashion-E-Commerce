import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Dimensions, Image } from 'react-native'
import { colors } from '../constants/colors';
import { DefaultPageType } from '../types/types';
import { BlurView } from '@react-native-community/blur';
import Circle from '../components/Circle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const circleList = [
    {
        left: windowWidth / 3,
        top: windowHeight / 17,
        size: 110,
        color: '#f4d41f'
    },
    {
        left: windowWidth / 8,
        top: windowHeight / 10,
        size: 60,
        color: 'red'
    },
    {
        left: windowWidth / 5,
        top: windowHeight / 2.2,
        size: 140,
        color: '#b829e8'
    },
    {
        left: windowWidth / 1.4,
        top: windowHeight / 6,
        size: 60,
        color: '#29c1e8'
    },
]

const Home = ({ navigation }: DefaultPageType) => {
    const [loading, setLoading] = useState(0);
    useEffect(() => {        
        var timeout = setTimeout(() => {
            var newLoading = loading+25;
            setLoading(newLoading);
        }, 1000);
        
        if(loading == 100){
            clearTimeout(timeout);
            navigation.navigate("Default");
        }
    }, [loading]);

    return (
        <View style={styles.main}>
            {
                circleList.map((circle, index) => {
                    return (
                        <Circle
                            key={index}
                            left={circle.left}
                            top={circle.top}
                            size={circle.size}
                            color={circle.color}
                        />
                    )
                })
            }
            <View style={styles.content}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.webp')}
                />
            </View>
            <BlurView
                style={styles.absolute}
                blurType="light"
                blurAmount={3}
                blurRadius={5}>
            </BlurView>
            <View style={[styles.progressBar, { width: loading+'%' }]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.primaryBg,
        position: 'relative',
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1
    },
    blurredView: {
        backgroundColor: 'white',
    },
    content: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },
    logo: {
        width: 200,
        height: 200,
        margin: 'auto'
    },
    progressBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 3,
        backgroundColor: '#ea75e2',
        zIndex: 2,
    }
})

export default Home;