import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';
// Touchablehighlight - Touchablenativefeddback - Touchableopacity - Touchablewithoutfeedback
export default class TimeNow extends Component {

    state = {
        infoTime : ""
    }
    getData = () => {
        setInterval(() => {
          const h = (new Date()).getHours();
          const m = (new Date()).getMinutes();
          const s = (new Date()).getSeconds();
          this.setState({infoTime: h + ":" + m + ":" + s})
        }, 1000)
    };

    render() {
        return (
            <View>
                <View style={{backgroundColor:"red", padding: 10, borderRadius: 70, 
                            shadowRadius:20}}>
                    <Button title="Press Time Start"
                            color="white"
                            onPress={() => this.getData()}>
                    </Button>
                </View>
                <Text>{this.state.infoTime}</Text>
            </View>
        )
    }
}
