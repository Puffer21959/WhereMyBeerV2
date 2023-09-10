//import react navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import { useState, useEffect } from 'react';
import Userlogin from './screens/userlogin';
const Stack = createNativeStackNavigator();
///////////////////////////////////////////////
import HomeScreen from './screens/homescreen';
import Map from './screens/map';
import EditProfile from './screens/editprofile';
import PlaceDetail from './screens/placedetail';
import { UserLocationContext } from './context/UserLocationContext';
import { UserNameContext } from './context/UserNameContext';
import * as Location from 'expo-location';
import { TouchableOpacity } from 'react-native';



export default function App() {
  const [SentUsername, setUsername] = useState(null);//for UserNameContext
  const [location, setLocation] = useState(null);//for UserLocationContext
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }{/*ask for permission */}

      let location = await Location.getLastKnownPositionAsync();{/*get the position, if fail will use the last known one */}
      
      setLocation(location);
      //console.log(location);
    })();
  }, []);{/*asking for position permission */}

  return (
    <UserLocationContext.Provider value={{location, setLocation}}>
    <UserNameContext.Provider value={{SentUsername, setUsername}}>{/* give context to entire app */}
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" 
        component={Userlogin} 
        options={{
        headerStyle: { backgroundColor: 'yellow' },
        headerTitleStyle: { fontWeight: 'bold' }
        }}/>




        
        <Stack.Screen name="Home"
          component={HomeScreen}
          options={{ headerShown: false, }} />{/*modify header of homescreen */}

        <Stack.Screen name="Map"
          component={Map}
          options={{/*modify header of Map Screen */
            title: "Where's My Beer",
            headerStyle: { backgroundColor: 'yellow' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerRight: () => (
              <TouchableOpacity />// make button on the top right, see map.js
            )
            }} />
            
        <Stack.Screen name='PlaceDetail'
          component={PlaceDetail}
          options={{/*modify header of placedetail Screen */
          title: 'Detail',
          headerStyle: {backgroundColor: 'yellow'},
          headerTitleStyle: {fontWeight: 'bold'}}} />

        <Stack.Screen name='Edit' 
          component={EditProfile}
          options={{
          title: 'EditProfile',
          headerStyle: {backgroundColor: 'yellow'},
          headerTitleStyle: {fontWeight: 'bold'}}} />

      



        <Stack.Screen name="Register" 
        component={Login} 
          options={{
          title: 'Register',
          headerStyle: {backgroundColor: 'yellow'},
          headerTitleStyle: {fontWeight: 'bold'}}} />
      </Stack.Navigator>
    </NavigationContainer>
    </UserNameContext.Provider>
    </UserLocationContext.Provider>
  );
}