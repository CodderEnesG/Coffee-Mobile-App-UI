import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./HomeScreenStyle";
import { useFonts } from "expo-font";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  useLayoutEffect;


  const [fontsLoaded] = useFonts({
    SoraBold: require("../assets/fonts/Sora-Bold.ttf"),
    SoraMedium: require("../assets/fonts/Sora-Medium.ttf"),
    SoraRegular: require("../assets/fonts/Sora-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.mainImage}
        resizeMode="contain"
        source={require("../assets/coffee2.png")}
      />
      <Text style={styles.title}>
        Coffee so good, your taste buds will love it.
      </Text>
      <Text style={styles.subTitle}>
        The best grain, the finest roast, the powerful flavor.
      </Text>
      <TouchableOpacity onPress={() =>
        navigation.navigate('Main')} style={styles.button}>
        <Text style={{fontFamily:"SoraMedium" , fontSize:16}}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
