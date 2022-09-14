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


const Login = ({ navigation }: DefaultPageType) => {
    const [showPassword, setShowPassword] = useState(true)

    const SignInClick = () => {
        console.log("SignIn Clicked");
        navigation.navigate("SplashScreen");
    }
    
    const SingInFacebookClick = () => {
        console.log("SignUp Facebook Clicked");
    }

    const SignUpClick = () =>{
        navigation.navigate('Register');
    }

    return (
        <ScrollView style={styles.main}>
            <View style={styles.header}>
                <Text style={styles.headerPrimary}>Login</Text>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.formInput}
                    placeholder="Mobile Number or Email"
                    placeholderTextColor={colors.gray}>
                </TextInput>
                <View style={styles.passInput}>
                    <TextInput style={styles.formInput}
                        secureTextEntry={showPassword}
                        placeholder="Password"
                        placeholderTextColor={colors.gray}>
                    </TextInput>
                    <Icon
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.eyeIcon}
                        name={showPassword ? "eye" : "eye-slash"}
                        size={20}
                        color={colors.gray} />
                </View>

            </View>
            <Line color={colors.gray} />
            <View style={styles.buttonGroup}>
                <Button
                    bgColor={colors.red}
                    onPress={() => SignInClick()}
                    text='Sign In'
                    textColor={colors.white}
                ></Button>
                <View style={{ width: '100%', position: 'relative' }}>
                    <IconBrand 
                        name="facebook"
                        size={25}
                        color={colors.facebook}
                        style={styles.facebookIcon}
                    />
                    <Button
                        bgColor={colors.white}
                        onPress={() => SingInFacebookClick()}
                        text='Sign In With Facebook'
                        textColor={colors.black}
                    ></Button>
                </View>
            </View>
            <View>

            </View>
            <View style={styles.info}>
                <Text>
                    Don't have an account?
                </Text>
                <Text onPress={() =>SignUpClick()} style={styles.signInHighlight}>Sign Up Now</Text>
            </View>


        </ScrollView>

    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.primaryBg,
        flexDirection: 'column',
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    header: {
        flex: 1,
        height: 90,
        justifyContent: 'space-between',
        marginBottom: 40
    },
    headerPrimary: {
        fontSize: 40,
        color: colors.black,
        fontWeight: '600'
    },
    headerSecondary: {
        fontSize: 20,
        color: colors.black,
        fontWeight: '200'
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
        height: 130,
        marginBottom: 30
    },
    formInput: {
        color: colors.black,
        fontWeight: '600',
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        height: 50,
        width: '100%'
    },
    highlight: {
        color: colors.red
    },
    line: {
        marginVertical: 15,
        height: 1,
        backgroundColor: colors.gray
    },
    buttonGroup: {
        flex: 1,
        height: 120,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        marginBottom: 100
    },
    signInHighlight: {
        color: colors.black,
        fontWeight: '600'
    },
    passInput: {
        position: 'relative',
        width: '100%'
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: 15,
        zIndex: 99
    },
    facebookIcon: {
        position: 'absolute',
        left:60,
        top: 10,
        zIndex: 99
    }
});

export default Login;
