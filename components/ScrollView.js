import React, { Component } from 'react'
import { Text, View , Dimensions } from 'react-native'
// ScrollView horizontal and vertical...

export default class ScrollView extends Component {
    render() {
        return (
            <ScrollView horizontal={true} 
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={true}
                        // scrollIndicatorInsets={{top:10, left:10, bottom:15 ,right:10}}
                        // onMomentumScrollBegin={() => {console.log("begin Scrolling...")}}
                        onScroll={(e) => { console.log(e)}}>
                <View style={{
                        backgroundColor:"gray",
                        flex: 1,
                        width: Dimensions.get("window").width,
                        height: Dimensions.get("window").height,
                        justifyContent: "center",
                        alignItems: "center"
                        }}>
                        <Text style={{color:"white"}}>Scree 1</Text>
                </View>
                <View style={{
                        backgroundColor:"beige",
                        flex: 1,
                        width: Dimensions.get("window").width,
                        height: Dimensions.get("window").height,
                        justifyContent: "center",
                        alignItems: "center"
                        }}>
                        <Text style={{color:"white"}}>Scree 2</Text>
                </View>
                <View style={{
                        backgroundColor:"tomato",
                        flex: 1,
                        width: Dimensions.get("window").width,
                        height: Dimensions.get("window").height,
                        justifyContent: "center",
                        alignItems: "center"
                        }}>
                        <Text style={{color:"white"}}>Scree 3</Text>
                </View>
            </ScrollView>
        )
    }
}
