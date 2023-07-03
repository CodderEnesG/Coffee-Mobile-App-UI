import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import styles from "./MapStyle";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Map = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerBackVisible: false,
      headerTitle: (props) => (
        <View style={styles.header}>
          <Image
            style={styles.mainImage}
            source={require("../assets/map.png")}
            resizeMode="contain"
          />
        </View>
      ),
      headerStyle: {},
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.footer}>
      <View style={styles.footerInner}>
        <Text style={styles.title}> 10 minutes left</Text>
        <Text style={styles.subTitle}>
          {" "}
          Delivery to{" "}
          <Text
            style={[
              styles.subTitle,
              { color: "black", fontFamily: "SoraBold" },
            ]}
          >
            Beyoglu AIHL
          </Text>
        </Text>
        <View style={styles.boxes}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={[styles.box, { backgroundColor: "#DFDFDF" }]} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="truck" size={26} color="#C67C4E" />
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>Delivered your order</Text>

            <Text style={styles.infoText}>
              We deliver your goods to you in the shortes possible time.
            </Text>
          </View>
        </View>
        <View style={styles.personContainer}>
          <Image
            resizeMode="contain"
            style={styles.personImage}
            source={require("../assets/kurye.jpg")}
          />
          <View style={styles.personInfo}>
            <Text style={styles.personName}>Johan Hawn</Text>
            <Text style={styles.personJob}>Personal Courier</Text>
          </View>
          <View style={styles.phoneContainer}>
            <FontAwesome name="phone" size={26} color="#7F7F7F" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Map;
