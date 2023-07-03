import { View, Text } from 'react-native'
import React, { useLayoutEffect } from "react";
import styles from "./MapStyle"
import { useNavigation } from "@react-navigation/native";

const Map = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      });
      useLayoutEffect;
  return (
    <View>
      <Text>Map</Text>
    </View>
  )
}

export default Map