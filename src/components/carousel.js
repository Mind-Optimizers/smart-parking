import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { View, StyleSheet, TouchableNativeFeedback, Dimensions, TextInput, SafeAreaView, Image } from 'react-native'
import { Text } from 'react-native-paper';
import { primary } from '../constants'
import { useNavigation } from '@react-navigation/native';

// import {Text} from 'react-native-paper'

const CarouselItem = props => {
    return(
        <TouchableNativeFeedback onPress={props.onPress}>
            <View style={{
                width:300,
                height:250,
                marginBottom: 20,
                borderRadius:10,
            }}>
                <Image 
                style={{
                    width: '100%',
                    height: 200,
                    borderTopLeftRadius: 10,
                    borderRadius: 10,
                   
                }}
                source={{uri:props.thumbnail}} />
                <View style={{
                    width: '100%',
                    height: 60,
                    elevation: 4,
                    backgroundColor: '#fff',
                    paddingTop: 7,
                    paddingLeft: 9,
                    borderRadius:10,
                    
                    
                    marginTop:5,

                    borderColor:primary,
                }}>
                    <Text style={{fontSize:19 ,fontFamily:"bold"}}>{props.loc_name}</Text>
                    <Text style={{color:primary, fontFamily:"bold"}}>
                        {props.distance < 1000 ? (props.distance).toFixed(0) : (props.distance/1000).toFixed(2)}
                        {props.distance < 1000 ? ' m' : ' km'}
                    </Text>
                </View>
            </View>
        </TouchableNativeFeedback>
        
    )
}
const CustomCarousel = props => {

    const navigation = useNavigation()
    
    const onItemPress = index => {
        navigation.navigate('Book', )
    }


    return(
        <View style={{
            position: 'absolute',
            bottom:20,
            zIndex:10,
            
        }}>
            <Carousel
            ref={props.inputRef}
            inactiveSlideOpacity={1}
            onSnapToItem={(i) => props.changeLocation(props.data[i].geo_location)}
            data={props.data} 
            itemHeight={200}
            itemWidth={300}
            
            sliderWidth={Dimensions.get('window').width}
            renderItem={({item, index}) => <CarouselItem
            {...item}
            onPress={() => props.onItemPress(index)}
            />}
            />
        </View>
    )
}

export default CustomCarousel