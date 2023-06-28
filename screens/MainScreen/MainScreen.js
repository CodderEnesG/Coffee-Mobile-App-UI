import { View, Text, SafeAreaView ,StatusBar } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import styles from "./MainScreen.Style";

const MainScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    });
    useLayoutEffect;
  return (
    <SafeAreaView style={{flex:1 , marginTop:StatusBar.currentHeight}}>
      <Text>MainScreen</Text>
    </SafeAreaView>
  )
}

export default MainScreen