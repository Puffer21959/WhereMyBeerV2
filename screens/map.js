import { TouchableOpacity, View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../component/style';
import React, { useContext, useEffect, useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import PlaceMarker from '../component/PlaceMarker';
import { UserLocationContext } from '../context/UserLocationContext';

export default function Map({ navigation }) {
  const [mapRegion, setMapRegion] = useState([]);

  const {location, setLocation} = useContext(UserLocationContext);
  //console.log(location)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
          <Text>Edit</Text>
        </TouchableOpacity>// make button on navbar, we put it here to avoid breaking Hooks rules
      )
    })
  })// create a button on navbar

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0,
        longitudeDelta: 0.006866,/*latDelta and longDelta control the zoom level*/
      })
    }
  }, [])/*set region for coordinate */
  //latitudeDelta: 0.004757, longitudeDelta: 0.006866,//

  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
      GetNearBySearchPlace();
      //console.log(placeList); //get a data sheet from api 
    }, []);

  const GetNearBySearchPlace = () => {
    GlobalApi.nearByPlace(location.coords.latitude, 
      location.coords.longitude).then(resp=>{
      setPlaceList(resp.data.results);
    });{/*request place api */}
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.mapContainer}>
            <MapView style={styles.mapSize} 
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={mapRegion}>
              
              <Marker
              title='You'
              coordinate={mapRegion}
              pinColor='blue' />

              {placeList.map((item, index) => index<=10&&(/*place business marker according to api data*/
                <PlaceMarker item={item} key={index}/>/* "index<=5&&" mean only place 5 location */
              ))}
            </MapView>
            {/*{placeList ? <PlaceList placeList={placeList} /> : null}*/}
      </View>
    </>
  );
}
