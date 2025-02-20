import { Image, StyleSheet, Platform, SafeAreaView, TextInput, View, Text, TouchableOpacity, Button, ImageBackground } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import TrangChu from './screen/TrangChuScreen'; 
import ProfileScreen from './screen/ProfileScreen';
import { styles } from '../common_styles';




// export type RootStackList = {
//   Home: {};
//   Profile: { username: string, password: string };
// }
const stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()


export default function HomeScreen() {
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>

      <stack.Screen name='Drawer' component={MenuScreen} />
      <stack.Screen name='Home' component={TrangChu}>
      </stack.Screen>
      
      <stack.Screen name='Profile' component={ProfileScreen}>
      </stack.Screen>
    </stack.Navigator>
  );
}

const MenuScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {/* Home Screen với icon */}
      <Drawer.Screen
        name="Home"
        component={TrangChu}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* Article Screen với icon */}
      <Drawer.Screen
        name="Article"
        component={TrangChu}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="document-text" size={size} color={color} />
          ),
        }}
      />

      {/* Chat Screen với icon */}
      <Drawer.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" size={size} color={color} />
          ),
        }}
      />

      {/* Setting Screen với icon */}
      <Drawer.Screen
        name="Setting"
        component={ContactScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const ChatScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chat Screen</Text>
    </View>
  );
};

const ContactScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contact Screen</Text>
    </View>
  );
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      
      <ImageBackground
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png' }}
        style={styles.headerBackground}
      >
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://avatarfiles.alphacoders.com/838/thumb-1920-83831.jpg' }}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>Rocket Raccoon</Text>
        </View>
      </ImageBackground>

      
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};



