import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { styles } from '../component/style';
import { FontAwesome5, Feather, AntDesign } from '@expo/vector-icons';
import GlobalApi from '../services/GlobalApi';

//TODO: add more information

export default function PlaceDetail() {
  const param = useRoute().params;
  const [place, setPlace] = useState([]);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    setPlace(param.place)
    //console.log(param.place)
  }, [])

  useEffect(() => {
    GetDetail();
  }, [])

  const GetDetail = () => {
    GlobalApi.detailPlace(param.place.place_id).then(resp=>{
      setDetail(resp.data.result);
    })
  }

  const Review = detail.reviews

  return (
      <ScrollView style={{flex: 1}}>

        {/*++++++++++++++++++++++++++++++Business Information++++++++++++++++++++++++++++ */}

        <View style={styles.detailBar}>
          <Text style={{fontWeight: 'bold', fontSize: 25}}>{place.name}</Text>
          
          <Text style={{fontWeight: 'bold'}}>
            <AntDesign name="star" size={24} color="black" />
            {'   '}
            {place.rating}
          </Text>
          
        </View>

        <View style={{backgroundColor: 'black', padding: 15}}>
          <Image source={{uri:
            'https://maps.googleapis.com/maps/api/place/photo?' + 
            'maxwidth=1600' +
            '&photo_reference=' +
            param.place.photos[0].photo_reference +
            '&key=AIzaSyAfKmEHsgxwQ3IbErdzuFZHK8978U4VJPA'}}
          style={{width: '100%', height: 300, borderRadius: 25}} />{/*business image */}
        </View>

        <View style={styles.detailBar}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>
            {<FontAwesome5 name="map-marker-alt" size={24} color="black" />}
            {'    '}
            {place.vicinity}
          </Text>
        </View>

        <View style={styles.detailBar}>
          <Text style={param.place.opening_hours.open_now ? styles.textOpen : styles.textClose}>
            <Feather name="clock" size={24} color="black" />
            {'    '}
            {param.place.opening_hours.open_now ? 'open' : 'close'}
          </Text>
        </View>

        {/* ++++++++++++++++++++++++++++REVIEW SECTION+++++++++++++++++++++++++++++++++++ */}

        <View style={styles.detailBar}>
          <Text style={{fontWeight: 'bold', fontSize: 25}}>Reviews</Text>
        </View>
        
        <View style={styles.detailBar}>{/* for loop review information */}
          {Review?.map((item, index) => {
            return (
              <View key={index}>

                <View style={{backgroundColor: 'black', height: 2}}>
                  <Text></Text>
                </View>{/*line block */}

                <View style={{padding: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <Image source={{uri: item.profile_photo_url}} 
                      style={{width: 50, height: 50}} />
                    </View>
                    <View style={{marginLeft: 15, paddingTop: 15}}>
                      <Text style={{fontWeight: 'bold', fontSize: 20}} key={index}>
                        {item.author_name}
                      </Text>
                    </View>
                  </View>

                  <View>
                    <Text>Rating: {item.rating}</Text>
                  </View>

                  <View>
                    <Text style={{fontWeight: 'bold', fontSize: 15, textAlign: 'justify'}}>
                      {item.text}
                    </Text>
                  </View>

                </View>

              </View>
            );
          })}
        </View>{/*for loop inside a render */}
        
        {/*console.log(Review)*/}
        {/*console.log(detail)*/}
      </ScrollView>
  )
}