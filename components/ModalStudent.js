import React, { Component } from 'react'
import { Modal, Text, View, TouchableHighlight, TextInput, StyleSheet, Keyboard, Button } from 'react-native'
import service from "../service/Service";

export default class ModalStudent extends Component {

    state = {
        name: "", 
        lastname: "",
        modalVisible: false,
    }

    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }

    postStudent = () => {
        this.toggleModal(!this.state.modalVisible);
        var student = {name: this.state.name, lastname: this.state.lastname, image: "ccc"}
        fetch('http://localhost:3000/api/students/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(student)
        })
        .then((response) => response.json())
        .then((responseJson) => {console.log("success api call")})
        .catch((error) => {console.error(error)}); 
    }
    render() {
        return (
            <View style = {styles.container}>
                <Modal animationType = {"fade"} transparent = {true}
                    visible = {this.state.modalVisible}
                    onRequestClose = {() => { console.log("Modal has been closed.") } }>
                    <View style = {styles.modal}>
                        
                        <TextInput style = {styles.inputText}
                                            keyboardType="email-address"
                                            placeholder="Enter your name..."
                                            placeholderTextColor="red"
                                            // secureTextEntry={true}
                                            onChangeText={(text) => {
                                                    this.setState({name: text})
                                                }
                                            }
                        />

                        <TextInput style = {styles.inputText}
                                            keyboardType="email-address"
                                            placeholder="Enter your lastname..."
                                            placeholderTextColor="red"
                                            // secureTextEntry={true}
                                            onChangeText={(text) => {
                                                    this.setState({lastname: text})
                                                }
                                            }
                        />
                        
                        <View style={styles.addButton}>
                            <TouchableHighlight onPress = {() => {
                                this.postStudent()}}>
                                <Text style = {styles.text}>Add Student</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                
                <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
                    <Text style = {styles.text}>Open Modal</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
       alignItems: 'center',
       backgroundColor: '#ede3f2'
    },
    modal: {
       flex: 1,
       alignItems: 'center',
       backgroundColor: 'beige',
       padding: 30
    },
    text: {
       color: 'white',
       marginTop: 10
    },
    inputText: {
        height:40, 
        width: 200, 
        margin:5, 
        borderRadius: 50,
        borderColor: "black", 
        borderWidth: 1, padding: 10 
    },
    addButton: {
        backgroundColor:"red", 
        padding: 10, 
        borderRadius: 70, 
        shadowRadius:20,
        justifyContent: "center"
    }
})