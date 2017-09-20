import React from 'react';
import { Alert, StyleSheet, Text, View, Button, Image } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Bug Race. ',
    headerStyle: {
      backgroundColor:'blue'
    },
    headerTitleStyle:{
      marginTop:20,
    },
  };

  state ={
    name:'test'
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.homeContainer}>
      <Text style={{fontSize: 40, textAlign:'center'}}> Your goal is to race  </Text>
      <Text style={{fontSize: 40, textAlign:'center'}}> the bugs across the screen</Text>
       <Image source={require('./ladybug.png')} style={{height:150, width:150}} />
      <View style={styles.playButton}>
      <Button
        title="Play!"
       
        onPress={() =>
          navigate('Play',{user:this.state.name})
        }
      />
      </View>
      </View>
    );
  }
}


class PlayScreen extends React.Component {
    state = {
      bug1Tail: 0,
      bug2Tail: 20
    }

  _moveForward(bugnum) {
   if(bugnum == 1){
    var tail = this.state.bug1Tail + 20
    this.setState({
      ...this.state,
      bug1Tail:tail
    })
   }
  else{
    var tail = this.state.bug2Tail + 20
    this.setState({
      ...this.state,
      bug2Tail:tail
    })
   }

  }


  render() {
    if(this.state.bug1Tail > 220){
      Alert.alert('bug 1 wins!')
    }
    if(this.state.bug2Tail > 200){
      Alert.alert('bug 2 wins!')
    }

    return (
      <View style={styles.container}>
        <View style={styles.bug1Container}>
         
          <Image source={require('./bluebug.jpg')} style={{height:100, width:100, marginLeft: this.state.bug1Tail}} /> 
        </View>
        <View style={styles.bug2Container}>
          <Image source={require('./ladybug.png')} style={{height:70, width:70, marginLeft: this.state.bug2Tail}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => this._moveForward(1)} title="Move bug1 forward" style={{height:20}}/>
          <Button onPress={() => this._moveForward(2)} title="Move bug2 forward" />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
    justifyContent: 'center',
  },
  buttonContainer:{
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bug1Container:{
    height:100,
    flexDirection: 'row',
    backgroundColor:'#fff'
    
  },
  bug2Container:{
    flexDirection: 'row',
    height:300,
    backgroundColor:'#fff'
  },
  playButton:{
    position:'absolute',
    bottom: 20,
    flexDirection: 'row',
    height: 40,
  },
  homeContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

export default App = StackNavigator({
  Home: { screen: HomeScreen },
  Play: { screen: PlayScreen },
});
