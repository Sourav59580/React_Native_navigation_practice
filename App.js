import React, { Component } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';

 class HomeScreen extends Component {
   render(){
     return(
      <View style={styles.container}>
      <Text>hello sourav</Text>
      <Button title="go to about screen"
      onPress={()=>this.props.navigation.navigate('About')}
      />
    </View>
     );

   }
}
class AboutScreen extends Component {
  render(){
    return(
     <View style={styles.container}>
     <Text>hello sourav about screen</Text>
     <Button title="go to home screen"
      onPress={()=>this.props.navigation.goBack()}
      />
   </View>
    );
  }
}
const appNavigator = createStackNavigator({
  Home : HomeScreen,
  About : AboutScreen

})
export default createAppContainer(appNavigator);
const styles = StyleSheet.create({
  containe: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
