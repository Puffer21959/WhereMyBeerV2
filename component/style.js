import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Homecontainer: {//homescreen
      flex: 1,
      backgroundColor: 'rgb(0, 0, 0)',
      justifyContent: 'center',
    },
    testtext: {
        color: '#fff'
    },
    button: {//make button yellow for homescreen
      paddingVertical: 12,
      paddingHorizontal: 50,
      borderRadius: 25,
      elevation: 3,
      backgroundColor: 'yellow',
      marginTop: '8%',
    },
    mapContainer: {
      flex: 1,
    },
    mapSize: {
      width: '100%',
      height: '100%', /*pretty much filled the screen */
    },
    detailBar: {
      backgroundColor: 'yellow',
      padding: 15,
    },
    textOpen: {
      fontWeight: 'bold', 
      fontSize: 15,
      color: 'green'
    },
    textClose: {
      fontWeight: 'bold', 
      fontSize: 15,
      color: 'red'
    }
});