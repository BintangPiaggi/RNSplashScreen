import React, { Component } from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
 
 
 
class Splash extends Component {
 
    componentDidMount() {
        setTimeout(() => {
            Actions.home()
        }, 5000);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                style={{width: 120, height: 120}}
                source={require('/React Native/splash/splashscreen/Components/senimart4.png')}
                />
                <Text style={styles.welcome}>SENIMART</Text>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
},
welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontFamily: 'Calibri',
    fontWeight: 'bold'
  },
 
})
export default Splash;