import React from 'react'
import { Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'

export default function PlaceMarker({item}) {
  const navigation = useNavigation();// useNavigation() allow to navigate from anywhere
  return (
    <Marker
    title={item.name}
    coordinate={{latitude: item.geometry.location.lat,
        longitude: item.geometry.location.lng,
        latitudeDelta: 0.004757,
        longitudeDelta: 0.006866,}}
    onPress={() => navigation.navigate("PlaceDetail", {place:item})}>
    </Marker>
  )
}