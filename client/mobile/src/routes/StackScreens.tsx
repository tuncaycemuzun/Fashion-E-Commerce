import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, Login, Register , Home} from '../pages';

const Stack = createNativeStackNavigator();

const StackScreens = () => {
    return (

        <Stack.Navigator
            screenOptions=
            {{
                statusBarAnimation: 'slide',
                customAnimationOnGesture: true,
                animationTypeForReplace: 'push',
                animation: 'slide_from_right',
            }}
            initialRouteName='Login'>

            <Stack.Screen
                options={
                    {
                        headerShown: false,
                    }
                }
                name="Login"
                component={Login} />

            <Stack.Screen
                options={
                    {
                        headerShown: false
                    }
                }
                name="Register"
                component={Register} />

            <Stack.Screen
                options={
                    {
                        headerShown: false
                    }
                }
                name="SplashScreen"
                component={SplashScreen} />

            <Stack.Screen
                options={
                    {
                        headerShown: false
                    }
                }
                name="Home"
                component={Home} />
        </Stack.Navigator>
    );
}

export default StackScreens;