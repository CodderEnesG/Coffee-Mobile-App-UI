import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import styles from "./MainScreen.Style";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CoffeeCard from "./Cards/CoffeeCard";
// import { useRouter } from "expo-router";


const MainScreen = ({ navigation , item }) => {
  const Stack = createNativeStackNavigator();
  const coffeeTypes = ["Americano", "Latte", "Machiato"];
  const [activeCoffeeType, setActiveCoffeeType] = useState("Americano");
  // const router = useRouter();

  const [selectedCard, setSelectedCard] = useState();
  const CardContents = require("../MainScreen/Cards/CoffeeCardData.json");


  const handleCardPress = (CardContents) => {
    router.push(`/coffee-details/${CardContents._id}`);
    setSelectedCard(CardContents._id);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerBackVisible: false,
      headerTitle: (props) => (
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Text style={styles.location}>Location</Text>
            <Text style={styles.mainLocation}>Istanbul, Turkiye</Text>
          </View>
          <View>
            <Image
              style={styles.headerImage}
              source={require("../../assets/sago.jpeg")}
            />
          </View>
        </View>
      ),
      headerStyle: {
        backgroundColor: "#202020",
      },
    });
  }, [navigation]);

  const [fontsLoaded] = useFonts({
    SoraBold: require("../../assets/fonts/Sora-Bold.ttf"),
    SoraMedium: require("../../assets/fonts/Sora-Medium.ttf"),
    SoraRegular: require("../../assets/fonts/Sora-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <SafeAreaView style={{ flex: 1, height: "auto" }}>
      <ScrollView contentContainerStyle={styles.searchContainer}>
        <View style={styles.topContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name="md-search" size={24} color="white" />
            <TextInput
              placeholderTextColor="#989898"
              placeholder="Search Coffee"
              style={styles.input}
            ></TextInput>
            <View style={styles.iconContainer}>
              <Entypo name="sound-mix" size={24} color="white" />
            </View>
          </View>
        </View>

        <Image
          style={styles.buy_one}
          source={require("../../assets/buy_one.png")}
        />
        <View style={{ width: "100%", paddingLeft: 30, marginTop: 30 }}>
          <FlatList
            keyExtractor={(item) => item}
            horizontal
            data={coffeeTypes}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.tab(activeCoffeeType, item)}>
                <Text style={styles.tabText(activeCoffeeType, item)}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.coffeeCardsContainer}>
          {CardContents.map((CardContent) => {
            return (
              <CoffeeCard key={CardContent._id} item={item}
              selectedCard={selectedCard}
              handleCardPress={handleCardPress} CardContent={CardContent} />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Entypo name="home" size={24} color="#C67C4E" />
        <Entypo name="heart" size={24} color="black" />
      
        <MaterialIcons onPress={() => navigation.navigate('Order')} name="shopping-bag" size={24} color="black" />
        <MaterialCommunityIcons name="bell" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
