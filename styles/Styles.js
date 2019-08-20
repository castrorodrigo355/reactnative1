import { StyleSheet, Platform } from 'react-native';

export default myStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'tomato',
      alignItems: 'center',
      marginTop: Platform.OS === "ios" ? 35 : 0,
      //  marginTop: 35,
      justifyContent: 'center',
    },
});