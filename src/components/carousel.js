import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { View, StyleSheet, TouchableNativeFeedback, Dimensions, TextInput, SafeAreaView, Image, Text } from 'react-native'
import { primary } from '../constants'
import { useNavigation } from '@react-navigation/native';

// import {Text} from 'react-native-paper'

const CarouselItem = props => {
    return(
        <TouchableNativeFeedback onPress={props.onPress}>
            <View style={{
                width:230,
                height:250,
                marginBottom: 20,
            }}>
                <Image 
                style={{
                    width: '100%',
                    height: 200,
                    
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                }}
                source={{uri:props.thumbnail}} />
                <View style={{
                    width: '100%',
                    height: 50,
                    elevation: 4,
                    backgroundColor: '#fff',
                    paddingTop: 10,
                    paddingLeft: 8,
                    borderRadius: 4,
                }}>
                    <Text>{props.loc_name}</Text>
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
            itemWidth={230}
            
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