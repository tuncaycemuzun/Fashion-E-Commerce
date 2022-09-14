import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, Login, Register , Home} from '../pages';
import BottomNavigator from './BottomNavigator';
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
                name="Default"
                component={BottomNavigator} />
        </Stack.Navigator>
    );
}

export default StackScreens;