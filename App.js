import React from 'react';

import { Print } from 'expo';


import { 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  TextInput, 
  View } from 'react-native';

import { generateInvoice_2 } from './generateInvoice_2';

import { validate } from './validate';

class App extends React.Component {
  state={
    value: ''
};
  print = () => {
    const options= {
      html: generateInvoice_2()
    }
    
    Print.printAsync(options);
    
  };

  render(){

    return(

      <TouchableOpacity style={styles.container} onPress={this.print}>
        <Text>Print right know</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  }
})

export default App;