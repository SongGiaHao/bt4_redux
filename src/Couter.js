
import { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as action from './../redux/action/index'


class Couter extends Component{
  render(){
    console.log(this.props.ChangeText)
    return (
     
<View style={styles.container}>
{this.props.name.map(home => <Text>My Name:{home.name}</Text>)}
      <Button title='Change Text' onPress={this.props.ChangeText}></Button> 
      <Button title='TEXT FIRST' onPress={this.props.textFirst}></Button> 
    </View>
   
  

  );
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Couter)
function mapStateToProps(state){
    return{
        name:state.item
    }
}
function mapDispatchToProps(dispatch,props){
    return{
        ChangeText:(name)=>dispatch(action.changeName(name)),
        textFirst:()=> dispatch({type:'NAME_CHANGE'})
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
