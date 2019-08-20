import React, { Component } from 'react';
import {Text, View, FlatList, Image } from 'react-native';
import Modal from "./ModalStudent";
import Swipeout from "react-native-swipeout";
import service from "../service/Service";

export default class TodosJPH extends Component {

    state = {
        todos: []
    }

    componentDidMount(){
        this.getTodos()
    }

    async getTodos(){
        var todos;
        try {
            todos = await service.getTodos()
        } catch(e) { 
            console.error(e); 
            todos = null 
        }
        this.setState({todos})
    }

    deleteItem = (id) => {
        service.deleteTodo(id)
        this.getTodos()
    }

    render() {
        const addIcon = "data:image/jpeg;base64,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"
        return (
            <View>
                <Modal/>

                <FlatList   data={this.state.todos}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item, index}) => {
                            return(
                                <FlatListItem item={item} index={index} deleteItem={this.deleteItem}></FlatListItem>
                            )
                        }
                    }
                />
            </View>
        )
    }
}
// *********************************************************************************
class FlatListItem extends React.Component{
    render(){
        const {name, lastname, image} = this.props.item
        const spsettings = {
            autoClose: true,
            right: [
                {
                    onPress: () => {
                        this.props.deleteItem(this.props.item._id)
                    },
                    text: "Delete",
                    type: "delete"
                }
            ]
        }
        return(
            <Swipeout {...spsettings}>
                <View style={{flex:1, margin:3, flexDirection:"row"}}>
                    <Image style = { {height:80, width:80, padding:5} } source={ {uri:image} }></Image>
                    <View>
                        <Text style={{backgroundColor:"beige"}}>
                            {name}
                        </Text>
                        <Text style={{backgroundColor:"red", width:300}}>
                            {lastname}
                        </Text>
                    </View>
                </View>
            </Swipeout>
        )
    }
}