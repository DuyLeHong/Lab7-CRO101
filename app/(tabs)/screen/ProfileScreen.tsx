import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";


export default function ProfileScreen({ route }) {
    const navigation = useNavigation();
  
    /* 2. Get the param */
    //const { username, password } = route.params;
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Text>Username la: {JSON.stringify(route.params.username)}</Text>
        <Text>Password la: {JSON.stringify(route.params.password)}</Text>
        
        {/* <Button onPress={() => navigation.navigate('Home')}
          title='Go to Home'/> */}
        <Button onPress={() => navigation.popTo('Home',{newusername: 'Duyle12345', newpassword: '12345678'})} 
          title='Go Back'/>
      </View>
    );
  }