
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Couter from './src/Couter';
import store from './redux/store';



 
export default class App extends Component{
  render(){
    
    return (
     

      <Provider store={store}>
      <Couter></Couter> 
      </Provider>
      
  

  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
