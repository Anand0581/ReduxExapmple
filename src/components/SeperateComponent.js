/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const SeperateComponent = props => {
  return (
    <View style={style.container}>
      <View style={style.textConatiner}>
        <Button title="Multiply" onPress={() => props.multiplay()} />
        <Text>{props.data.count}</Text>
        <Button title="Devide" onPress={() => props.devide()} />
      </View>
    </View>
  );
};

export default SeperateComponent;
const style = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1,justifyContent:"center"},
  textConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 12,
  },
});
