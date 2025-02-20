
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      backgroundColor:'green',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: '100%'
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
    header: {
      height: 150, 
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    headerImage: {
      width: 80,
      height: 80,
      borderRadius: 40, 
      marginBottom: 10,
      top:10,
    },
    headerText: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      top:10,
    },
    headerBackground: {
      height: 180,
      justifyContent: 'center',
    },
  });