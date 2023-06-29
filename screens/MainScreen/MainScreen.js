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
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import styles from "./MainScreen.Style";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";

const MainScreen = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  const coffeeTypes = ["Americano", "Latte", "Machiato"];
  const [activeCoffeeType, setActiveCoffeeType] = useState("Americano");
  const [even, setEven] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerBackVisible: false,
      headerTitle: (props) => (
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Text style={styles.location}>Location</Text>
            <Text style={styles.mainLocation}>Istanbul/Turkiye</Text>
          </View>
          <View>
            <Image
              style={styles.headerImage}
              source={require("../../assets/kemal.jpg")}
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
    <SafeAreaView style={{ flex: 1, height: 1500 }}>
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
          <View style={styles.coffeeCard}>
            <View style={styles.cardImageContainer}>
              <Image
                style={styles.cardImage}
                source={require("../../assets/Cappuccino.jpg")}
              />
            </View>
            <View style={styles.cardInfoContainer}>
              <View>
                <Text style={styles.cardTitle}>Cappucino</Text>
                <Text style={styles.cardSubtitle}>with Chocolate</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.cardPrice}>$ 4.53</Text>
                <View style={styles.cardIconContainer}>
                  <Entypo name="plus" size={16} color="white" />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.coffeeCard}>
            <View style={styles.cardImageContainer}>
              <Image
                style={styles.cardImage}
                source={require("../../assets/Cappuccino.jpg")}
              />
            </View>
            <View style={styles.cardInfoContainer}>
              <View>
                <Text style={styles.cardTitle}>Cappucino</Text>
                <Text style={styles.cardSubtitle}>with Chocolate</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.cardPrice}>$ 4.53</Text>
                <View style={styles.cardIconContainer}>
                  <Entypo name="plus" size={16} color="white" />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.coffeeCard}>
            <View style={styles.cardImageContainer}>
              <Image
                style={styles.cardImage}
                source={require("../../assets/Cappuccino.jpg")}
              />
            </View>
            <View style={styles.cardInfoContainer}>
              <View>
                <Text style={styles.cardTitle}>Cappucino</Text>
                <Text style={styles.cardSubtitle}>with Chocolate</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.cardPrice}>$ 4.53</Text>
                <View style={styles.cardIconContainer}>
                  <Entypo name="plus" size={16} color="white" />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.coffeeCard}>
            <View style={styles.cardImageContainer}>
              <Image
                style={styles.cardImage}
                source={require("../../assets/Cappuccino.jpg")}
              />
            </View>
            <View style={styles.cardInfoContainer}>
              <View>
                <Text style={styles.cardTitle}>Cappucino</Text>
                <Text style={styles.cardSubtitle}>with Chocolate</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.cardPrice}>$ 4.53</Text>
                <View style={styles.cardIconContainer}>
                  <Entypo name="plus" size={16} color="white" />
                </View>
              </View>
            </View>
          </View>
          {/* <View style={styles.coffeeCardOdd}>

          </View>
          <View  style={styles.coffeeCard}>

          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
