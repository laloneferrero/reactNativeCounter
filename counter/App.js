import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      counter:0,
      factor:0
    }
  }

  onMinus = () =>{
    debugger
    this.setState({
      counter : this.state.counter - parseInt(this.state.factor)
    })
  }

  onPlus = () =>{
    this.setState({
      counter : this.state.counter + parseInt(this.state.factor)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.counter}</Text>
        <TextInput 
          style={{height:50}}
          placeholder="contador"
          keyboardType="numeric"
          onChangeText={(factor) => this.setState({factor:factor})}
          style={{
            borderBottomColor: '#000000'
          }}
        ></TextInput>
        <Button onPress={this.onMinus} title="-"></Button>

        <Button onPress={this.onPlus} title="+"></Button>
      </View>
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
