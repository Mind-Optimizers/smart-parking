
import React, { Component } from 'react'
import { primary } from '../constants'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'



 class Profile extends Component {
   

    render() {
      StatusBar.setBarStyle("light-content")
      const {user} = this.props
      return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{uri: user.dp}}/>
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Text style={styles.name}>{user.name}</Text>
                <View></View>            
              </View>
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    header:{
      backgroundColor: primary,
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },

    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      borderWidth:3,
      borderColor: primary,      
    
    },
  });
  const mapStateToProps = ({user}) =>( {
    user
  })
  export default connect(mapStateToProps)(Profile)