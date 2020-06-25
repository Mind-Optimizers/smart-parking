import React, {useState, useEffect, useRef} from 'react'
import { View, StyleSheet, StatusBar, Dimensions, TextInput } from 'react-native'
import { Text, Appbar, IconButton } from 'react-native-paper'
import { primary, getRandomPinColor } from '../constants'
import MapView, {Marker} from 'react-native-maps'
import CustomCarousel from '../components/carousel'
import { getParkingSpaces } from '../backend/FetchLocations'
import RNLocation from 'react-native-location';
import {getDistance} from '../utils/distance';
import { ParkingInfoStyles } from '../styles/ParkingInfoStyles'


const Home = props => {
    const [idata, setIData] = useState([])
    const [data, setData] = useState([])
    const initalRegion = {
        latitude: 19.030486,
        longitude: 73.01235,
        longitudeDelta: 0.009,
        latitudeDelta: 0.009,
    }

    const mapRef = useRef(null)

    const [location, setLocation] = useState(initalRegion)
    let locationSubscriber = null;
    const requestPermission = async () => {
        const granted = await RNLocation.requestPermission({
            android: {
                detail: 'fine'
            }
        })

        if (granted) {
            locationSubscriber = RNLocation.subscribeToLocationUpdates(loc => {
                setLocation({
                    ...location,
                    longitude: loc[0].longitude,
                    latitude: loc[0].latitude,
                })
                console.log(loc)
            })
        }
    }

    const onChangeSearch = text => {
        setText(text)
        if (text) {
            setData(idata.filter(d => {
                return d.loc_name.toLowerCase().includes(text.toLowerCase())
            }))
        } else {
            setData(idata)
        }
    }

    useEffect(() => {
        requestPermission()
    }, [])

    useEffect(() => {
        (async () => {
            let d = await getParkingSpaces()

            d = d.map(d => ({
            ...d,
            distance: getDistance(d.geo_location, location)
            }))
            d.sort((a, b) => a.distance - b.distance)
            setData(d)
            setIData(d)
        })()
    }, [])

    const changeLocation = (coords) => {
        mapRef.current.animateToRegion({
            longitudeDelta: 0.003,
            latitudeDelta: 0.003,
            longitude: coords._longitude,
            latitude: coords._latitude,
        }, 2000)
    }

    const carouselRef = useRef(null)

    StatusBar.setTranslucent(true)
    StatusBar.setBackgroundColor('transparent')
    StatusBar.setBarStyle("dark-content")


    const {navigation} = props;

    const [text, setText] = useState(null)


    return (
        <View style={styles.container}>
            <MapView 
            ref={mapRef}
            showsCompass={false}
            initialRegion={initalRegion}
            region={location}
            style={{flex: 1}}>
                {idata.map((d,i) => ( <Marker
                key={i}
                onPress={() => carouselRef.current.snapToItem(i)}
                pinColor={getRandomPinColor()}
                coordinate={{
                    longitude: d.geo_location._longitude,
                    latitude: d.geo_location._latitude
                }}
                />))}
            </MapView>
            <View style={styles.searchBar}>
                
                <IconButton 
                icon="menu"
                color = {primary}
                onPress={() => {
                    navigation.openDrawer()
                }}

                />

                <TextInput 
                style={{
                    height: 40,
                    width: '100%',
                    color: '#000'
                }}
                onChangeText={text => onChangeSearch(text)} 
                placeholder="Search Parking Zones"/>
            </View>
           <CustomCarousel
           inputRef={carouselRef}
           onItemPress={(index) => {
               props.navigation.navigate('Book', data[index])
           }}
           changeLocation={changeLocation}
           data={data} />
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    heading: {
        marginLeft: 10,
        fontSize: 24,
    },
    container: {
        flex: 1,
        
    },
    searchBar:{
        position: "absolute",
        height: 40,
        borderRadius: 6,
        
        borderColor:primary,
        backgroundColor: "#FFF",
        top: 50,
        width: Dimensions.get('window').width - 30,
        elevation: 4,
        padding: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    }    
})

export default Home
