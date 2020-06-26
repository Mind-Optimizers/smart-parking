
import React, { Component } from 'react'
import { primary } from '../constants'
import {connect} from 'react-redux'
import { StyleSheet, View, Image, StatusBar, TouchableOpacity, Linking, Platform} from 'react-native'
import {Text, Button, IconButton} from 'react-native-paper'
import QRCode from 'react-native-qrcode-svg';
import { navigateMaps } from '../utils'



class QRpage extends Component {
   

    render() {

        const {navigation, route} = this.props;

        StatusBar.setTranslucent(true)
        StatusBar.setBackgroundColor('transparent')
        StatusBar.setBarStyle("dark-content")

      return (
        <View style={styles.container}>
            <View><Text style={styles.header}>Scan this QR-code</Text></View>
              <IconButton 
              icon="chevron-left"
              size={40}
              onPress={() => navigation.navigate('Home')}
              color={primary}
              style={{
                position: 'absolute',
                top: 25,
                left: 5,
              }}
              />
              <QRCode 
              style={styles.qr}
              size={210}
              value={route.params.ticket}
              />
            
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                <Text style={styles.slotno}>{route.params.name}</Text>
                <View style={{width:'70%'}}><Text style={styles.textinfo}>Use this QR-code to toggle the gate of your parking slot</Text></View>
                           
              </View>
              <Button mode='contained' 
              icon="navigation"
              style={styles.btn} 
              onPress={() => navigateMaps(route.params.geo._latitude, route.params.geo._longitude)}>Navigate</Button>
          </View>
          
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems: 'center',
        flex:1,
    },
    header:{
        textAlign:'center',
        color:primary,
        fontSize:20,
        marginBottom:30,
    },
    qr:{
      padding:10,
      borderWidth: 4,
      borderColor: primary,
      alignSelf:"center"
    },
    slotno:{
      fontSize:40,
      fontFamily: 'bold',
      color:primary,
      marginTop: 20,
      alignSelf:'center'
    },
    textinfo:{
        marginVertical:20,
        textAlign:"center",
        fontSize:17,
    },
    btn:{
        marginTop:20,
        width:170,
        alignSelf:"center",
        borderRadius:25,
    },
    bodyContent: {
      alignItems: 'center',
    },

  });

  export default QRpage