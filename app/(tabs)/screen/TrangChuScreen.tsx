import { styles } from "@/app/common_styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView, TextInput, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TrangChu () {

    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');
  
    const navigation = useNavigation()
  
    return (
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
          <View style={styles.container}>
  
            <Text style = {styles.titleContainer}> Trang chu </Text>
            <TextInput 
              style={styles.input}
              placeholder='Nhap username cua ban'
              value={username}
              onChangeText={onChangeUsername}
              />
  
            <TextInput 
              style={styles.input}
              placeholder='Nhap password cua ban'
              value={password}
              onChangeText={onChangePassword}/>  
  
            <TouchableOpacity 
              style={styles.button}
              
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Profile', {
                  username: {username},
                  password: {password},
                });
              }}  
              
              >
              <Text style={{color: 'white'}}>Login</Text>
            </TouchableOpacity>  
  
            
          </View>
      </SafeAreaView>
    );
  }
  