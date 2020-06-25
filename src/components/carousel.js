import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { View, StyleSheet, StatusBar, Dimensions, TextInput, SafeAreaView, ImageBackground } from 'react-native'
import { primary } from '../constants'
import {Text} from 'react-native-paper'

const CarouselItem = props => {
    return(
        <ImageBackground style={{
            width:300,
            height:200,
        }} source={{uri:props.uri}}>
            <Text>{props.name}</Text>
        </ImageBackground>
    )
}
const CustomCarousel = props => {
    return(
        <View style={{
            position: 'absolute',
            bottom:20,
            zIndex:10,
            
        }}>
            <Carousel
            data={props.data} 
            itemHeight={275}
            itemWidth={300}
            sliderWidth={Dimensions.get('window').width}
            renderItem={({item}) => <CarouselItem
            {...item}
            />}
            />
        </View>
    )
}

export default CustomCarousel