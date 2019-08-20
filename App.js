import React from 'react';
import { View } from 'react-native';
import CompImage from "./components/CompImage";
import CompText from "./components/CompText";
import TimeNow from "./components/TimeNow";
import Form from "./components/Form";
import ScrollView from "./components/ScrollView";
import TodosJPH from "./components/TodosJPH";
import Swipe from "./components/Swipe";
import myStyles from "./styles/Styles"

export default class App extends React.Component{
  
  state = {
    welcome : "Welcome to react native",
    todos: []
  }

  render(){
    return (
      <View style={myStyles.container}>
        <TodosJPH/>
        {/*
        <CompImage />
        <CompText  welcome={this.state.welcome}/>
        <TimeNow />
        <Form /> 
        */}
      </View>
    )}
}