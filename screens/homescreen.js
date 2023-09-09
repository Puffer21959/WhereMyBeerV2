import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../component/style';/*import css from style.js */
import { React } from 'react';

//TODO: add actual logo

export default function HomeScreen({ navigation }) {

    return (
      <>
        <View style={styles.Homecontainer}>
          <View name='header' style={{alignItems: 'center'}}>
            {/*This is for App homescreen logo */}
            <Image source={require('../assets/favibeer.png')} />
          </View>
          <View style={{backgroundColor: 'black',alignItems: 'center'}}>
            <View name='text' style={{marginTop: 20}}>
              <Text style={{fontWeight: 'bold', fontSize: 25,color: 'yellow'}}>Where's My Beer</Text>
            </View>
            <TouchableOpacity name='button' style={styles.button} onPress={() => navigation.navigate("Map")}>
              <Text style={{fontWeight: 'bold'}}>Start</Text>{/*when press go to stackScreen that has 'Details' as name*/}
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="light" />
      </>
    );
  }