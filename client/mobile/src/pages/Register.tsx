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
    const [showPassword, setShowPassword] = useState(true)

    const SignUpClick = () => {
        console.log("SignUp Clicked");
    }

    const SingUpFacebookClick = () => {
        console.log("SignUp Facebook Clicked");
    }

    const SignInClick = () =>{
        navigation.navigate('Login');
    }

    return (
        <ScrollView style={styles.main}>
            <View style={styles.header}>
                <Text style={styles.headerPrimary}>Register</Text>
                <Text style={styles.headerSecondary}>Create an account</Text>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.formInput}
                    placeholder="Mobile Number or Email"
                    placeholderTextColor={colors.gray}>
                </TextInput>
                <TextInput style={styles.formInput}
                    placeholder="Full Name"
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
            <Text>
                By continuing, you confirm that you have read and agreed to
                our <Text style={styles.highlight}>Terms and Conditions</Text> and <Text style={styles.highlight}>Privacy Policy</Text>.
            </Text>
            <Line color={colors.gray} />
            <View style={styles.buttonGroup}>
                <Button
                    bgColor={colors.red}
                    onPress={() => SignUpClick()}
                    text='Sign Up'
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
                        onPress={() => SingUpFacebookClick()}
                        text='Sign Up With Facebook'
                        textColor={colors.black}
                    ></Button>
                </View>
            </View>
            <View>

            </View>
            <View style={styles.info}>
                <Text>
                    Already have an account?
                </Text>
                <Text onPress={() =>SignInClick()} style={styles.signInHighlight}>Sign In</Text>
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
        height: 200,
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

export default Register;
