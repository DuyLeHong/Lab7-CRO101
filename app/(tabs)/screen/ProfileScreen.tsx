import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";


export default function ProfileScreen({ route }) {
    const navigation = useNavigation();
  
    /* 2. Get the param */
    //const { username, password } = route.params;
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Text>itemId: {JSON.stringify(route.params.username)}</Text>
        <Text>otherParam: {JSON.stringify(route.params.password)}</Text>
        
        {/* <Button onPress={() => navigation.navigate('Home')}
          title='Go to Home'/> */}
        <Button onPress={() => navigation.goBack()} 
          title='Go Back'/>
      </View>
    );
  }