import React, {useState, useEffect, useRef} from 'react'
import { View, StyleSheet, StatusBar, Dimensions, TextInput } from 'react-native'
import { Text, Appbar, IconButton } from 'react-native-paper'
import { primary, getRandomPinColor, turqoise } from '../constants'
import MapView, {Marker} from 'react-native-maps'
import CustomCarousel from '../components/carousel'
import { getParkingSpaces } from '../backend/FetchLocations'
import RNLocation from 'react-native-location';
import {getDistance} from '../utils/distance';
import { ParkingInfoStyles } from '../styles/ParkingInfoStyles'
import { navigateMaps } from '../utils'
import {connect} from 'react-redux'

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

                let d = [...idata];
                d = d.map(d => ({
                ...d,
                distance: getDistance(d.geo_location, location)
                }))
                d.sort((a, b) => a.distance - b.distance)
                setData(d)
                setIData(d)

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
        }, 1000)
    }

    const carouselRef = useRef(null)

    StatusBar.setTranslucent(true)
    StatusBar.setBackgroundColor('transparent')
    StatusBar.setBarStyle("dark-content")


    const {navigation} = props;

    const [text, setText] = useState(null)
    console.log('Currenbt', props.currentParking)
    let distanceToDest
    if (props.currentParking.location_geo_location) {
        distanceToDest = (getDistance(props.currentParking.location_geo_location, location) / 1000).toFixed(2)
    }
    return (
        <View style={styles.container}>
            <MapView 
            ref={mapRef}
            showsCompass={false}
            initialRegion={initalRegion}
            region={location}
            style={{flex: 1}}>
                <Marker 
                coordinate={{
                    longitude: location.longitude,
                    latitude: location.latitude,
                }}
                />
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
            <View style={{
                position: 'absolute',
                top: 50,
            }}>
                <View style={styles.searchBar}>
                    
                    <IconButton 
                    icon="menu"
                    onPress={() => {
                        navigation.openDrawer()
                    }}
                    color="#5d5d5d"
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
                {props.currentParking.location && <View style={{
                    backgroundColor: distanceToDest > 1.5 ? '#e74c3c' : primary,
                    height: 70,
                    borderRadius: 4,
                    width: Dimensions.get('window').width - 30,
                    marginHorizontal: 15,
                    marginVertical: 20,
                    elevation: 6,
                    flexDirection: 'row',
                }}>
                    <View style={{
                        borderRightWidth: 1,
                        width: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRightColor: '#4d4d4d',
                        
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 20
                        }}>{distanceToDest}</Text>
                        <Text style={{
                            color: '#fff',
                            fontSize: 10,
                        }}>KM</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        paddingVertical: 5, 
                        justifyContent: 'center',
                        paddingHorizontal: 10}}>
                        <Text style={{color: '#fff', fontSize: 12}}>
                            Current Booking
                        </Text>
                        <Text style={{color: '#fff', fontFamily: 'bold'}}>
                            {props.currentParking.location_name}
                        </Text>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <IconButton 
                        icon="alert-circle-outline"
                        color="#fff"
                        />
                    </View>
                    <View style={{
                        borderLeftWidth: 0.2,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderLeftColor: '#4d4d4d',
                    }}>
                        <IconButton 
                        onPress={() => navigateMaps(props.currentParking.location_geo_location.latitude, props.currentParking.location_geo_location.longitude)}
                        icon="navigation"
                        color="#fff"
                        />
                    </View>
                </View>}
            </View>
            <View>
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
        
        height: 40,
        borderRadius: 6,
        
        borderColor:primary,
        backgroundColor: "#FFF",
        width: Dimensions.get('window').width - 30,
        elevation: 4,
        padding: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    }    
})

export default connect(({user,currentParking}) => ({user, currentParking}))(Home)
