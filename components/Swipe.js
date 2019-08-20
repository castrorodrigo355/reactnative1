import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Swipeout from "react-native-swipeout"

export default class Swipe extends Component {

    state = {
        msj : "Swipe me"
    }

    render() {
        const spsettings = {
            autoClose: true,
            // secId: this.props.id,
            // onClose: (secId, rowId, direction) => {},
            onOpen: (secId, rowId, direction) => {console.log(secId, rowId, direction)},
            right: [
                {
                    onPress: () => {
                        this.setState({msj: "You swipped to left"})
                    },
                    text: "Delete",
                    type: "delete"
                }
            ],
            left: [
                {
                    onPress: () => {
                        this.setState({msj: "You swipped to right"})
                    },
                    text: "Edit",
                    type: "edit"
                }
            ]
        }
        return (
            <Swipeout {...spsettings}>
                <View>
                    <Text style={{width:240, height:40, borderRadius:70, fontSize:20, textAlign: "center"}}>
                        {this.state.msj}
                    </Text>
                </View>
            </Swipeout>
        )
    }
}