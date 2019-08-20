import React from 'react';
import { Text, View, TextInput, Keyboard} from 'react-native';

export default class Form extends React.Component{

    state = {email: "", description:""}

    componentWillMount(){
        // this.keyboardDidShowListener = 
        Keyboard.addListener("keyboardDidShow", 
            () => console.log("teclado abierto")
        );

        // this.keyboardDidHideListener = 
        Keyboard.addListener("keyboardDidHide", 
            () => console.log("teclado cerrado")
        );
    }

    componentWillUnmount(){
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
  
    render(){
        return (
        <View>

            <TextInput style={{
                height:100, margin:20, padding:10, borderColor:"gray", borderWidth: 1
                }}
                multiline={true}
                borderLeftColor="green"
                borderLeftWidth={3}
                editable={true}
                onSubmitEditing={Keyboard.dismiss}
                // returnKeyType="google"
                returnKeyType="done"
                onChangeText={(text) => this.setState({description: text})}
            />

            <TextInput style= {{height:40, width: 200 , margin:20, 
                                borderColor: "black", borderWidth: 1, padding: 10 }}
                                keyboardType="email-address"
                                placeholder="Enter your email"
                                placeholderTextColor="red"
                                secureTextEntry={true}
                                onChangeText={(text) => {
                                        this.setState({email: text})
                                    }
                                }
            />
            <Text>{this.state.email}</Text>
            <Text>{this.state.description}</Text>
        </View>
        )
    }
}