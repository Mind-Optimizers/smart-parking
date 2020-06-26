
import React, { Component } from 'react'
import { primary, turqoise } from '../constants'
import {connect} from 'react-redux'
import { StyleSheet, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper';
import { getUserHistory } from '../backend/FetchLocations';


 class Profile extends Component {
   
    state = {
      loading: true,
      history: []
    }

    async componentDidMount(state) {
      const history = await getUserHistory(this.props.user.id);
      
      if (history.length > 0) {
        this.setState({
          history
        })
      }

      console.log(history)
      
      this.setState({
        loading: false
      })
    }



    render() {
      StatusBar.setBarStyle("light-content")
      const {user, currentParking} = this.props
      return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{uri: user.dp}}/>
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Text style={styles.name}>{user.name}</Text>
              </View>
                     
                {currentParking && <View style={styles.currentCard}>
                  <View style={{flex: 1}}>
                  <Text style={styles.currentCardText}>{currentParking.location_name}</Text>
                  </View>
                  <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{
                    color: '#fff',
                    fontSize: 12,
                  }}>Slot</Text>
                    <Text style={{
                    color: '#fff',
                    fontSize: 20,
                    fontFamily: 'bold'
                    }}>{currentParking.name}</Text>
                  </View>
                </View> }
                {this.state.history.length > 0 && <React.Fragment>
                <Text style={styles.headingText}>History</Text>
                {this.state.history.map((h, i) => (<View 
                key={i}
                style={styles.card}>
                  <View style={{flex: 1}}>
                  <Text style={styles.cardText}>{h.location_name}</Text>
                  </View>
                  
                  <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 10
                  }}>
                    <Text style={{
                    fontSize: 12,
                  }}>Extra Due</Text>
                    <Text style={{
                    fontSize: 20,
                    fontFamily: 'bold'
                  }}>₹{h.extraPrice}</Text>
                  </View>
                </View>))}
                </React.Fragment>}
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
    headingText: {
      fontFamily: 'bold',
      marginVertical: 30,
    },
    currentCardText: {
      color: '#fff'
    },
    currentCard: {
      backgroundColor: turqoise,
      elevation: 5,
      marginTop: 30,
      borderRadius: 10,
      width: '100%',
      height: 80,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
    },
    card: {
      backgroundColor: '#fff',
      elevation: 5,
      borderRadius: 10,
      width: '100%',
      height: 80,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      marginVertical: 10
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
      fontFamily:'bold',
      textAlign: 'center'
    },
    body:{
      marginTop:40,
      flex: 1,
      paddingHorizontal: 30,
    },
    cardContainer: {
      marginTop: 30,
      flex: 1,
    },
    bodyContent: {
      
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:30,
      color: "#696969",
      fontFamily: 'bold'
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
  const mapStateToProps = ({user, currentParking}) =>( {
    user, currentParking
  })
  export default connect(mapStateToProps)(Profile)