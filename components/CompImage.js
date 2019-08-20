import React from 'react';
import { Image } from 'react-native';

export default class CompImage extends React.Component{
  
  render(){
    return (
        <Image style = { {height:200, width:100} } source={ {uri:"data:image/jpeg;base64,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"} }></Image>
    )}
}