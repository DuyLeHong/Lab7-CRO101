import { styles } from "@/app/common_styles";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { SafeAreaView, TextInput, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TrangChu ({route}) {

    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');
  
    const navigation = useNavigation()

    // React.useEffect(() => {
    //   if (route.params?.data) {
    //     // Post updated, do something with `route.params.post`
    //     // For example, send the post to the server
    //     alert('New post: ' + route.params?.data);
    //   }
    // }, [route.params?.data]);
  
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
              <Text style={{color: 'white'}}>Dang nhap</Text>
            </TouchableOpacity>  

            <Text style={{ margin: 10 }}>Username moi: {route.params?.newusername}</Text>
            <Text style={{ margin: 10 }}>Password moi: {route.params?.newpassword}</Text>
            
          </View>
      </SafeAreaView>
    );
  }
  