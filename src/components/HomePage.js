import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import SeperateComponent from './SeperateComponent';

const HomePage = props => {
  console.log('Anand --> ', props);
  return (
    <View style={style.container}>
      <View style={style.textConatiner}>
        <Button title="Incerment" onPress={() => props.addCount()} />
        <Text>{props.data.count}</Text>
        <Button title="Decrement" onPress={() => props.minusCount()} />
      </View>
    </View>
  );
};

export default HomePage;

const style = StyleSheet.create({
  container: {backgroundColor: '#FFF', flex: .5, justifyContent: 'center'},
  textConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 12,
  },
});
