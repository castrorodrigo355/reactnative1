import React from 'react';
import { Text } from 'react-native';

export default class CompText extends React.Component{
  
  render(){
    return (
      <Text>{this.props.welcome}</Text>
    )}
}