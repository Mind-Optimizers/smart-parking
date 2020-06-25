import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, Dimensions, TextInput } from 'react-native'
import { Text, Appbar, IconButton } from 'react-native-paper'
import { primary } from '../constants'
import MapView from 'react-native-maps'
import CustomCarousel from '../components/carousel'


const Home = props => {
    const data = [{
        uri:'https://www.ipohalarm.com.my/onbiz/userhome/37/files/parking_lock2.jpg',
        name:'BARC Parking Zone',
    },
    {
        uri:'https://images.unsplash.com/photo-1524214786335-66456317bde6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        name:'Jewel of NaviMumbai Parking Zone',
    },
    {
        uri:'https://ae01.alicdn.com/kf/HTB1y3aeIVXXXXbDapXXq6xXFXXXM/Automatic-Remote-Control-Car-Parking-Space-Barrier-Manual-Road-Block-Alarm-System-with-Rechargeable-lead-acid.jpg',
        name:'Thakurli Paking Zone',
    },
]
    StatusBar.setTranslucent(true)
    StatusBar.setBackgroundColor('transparent')
    StatusBar.setBarStyle("dark-content")


    const {navigation} = props;

    const [text, setText] = useState(null)

    return (
        <View style={styles.container}>
             <MapView style={{flex: 1}}/>
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
                onChangeText={text => setText(text)} 
                placeholder="Search Parking Zones"/>
            </View>
           <CustomCarousel data={data} />
            
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
        backgroundColor: "#FFF",
        top: 70,
        width: Dimensions.get('window').width - 30,
        elevation: 4,
        padding: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    }    
})

export default Home
