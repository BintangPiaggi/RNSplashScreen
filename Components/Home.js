import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';
 
 
class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Home</Text>
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
 
})
export default Home;