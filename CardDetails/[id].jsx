import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./idStyles";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import Images from "../modules/Images";



const CardDetails = ({ navigation  }) => {

  const {
    params:{
      CardContent
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerBackVisible: false,
      headerTitle: (props) => (
        <View style={styles.header}>
          <Ionicons name="chevron-back" size={24} color="black" />
          <Text style={styles.headerTitle}>Details</Text>
          <Ionicons name="ios-heart-outline" size={24} color="black" />
        </View>
      ),
      headerStyle: {
        backgroundColor: "#fff",
      },
    });
  }, [navigation]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: "auto",
        alignItems: "center",
        backgroundColor: "#FBFBFB",
      }}
    >
      <ScrollView
        contentContainerStyle={{ backgroundColor: "#FBFBFB", width: 315 }}
      >
        <View style={styles.mainImageContainer}>
          <Image
            style={styles.mainImage}
            source={Images[CardContent.image]}
          />
        </View>
        <Text style={styles.title}>{CardContent.title}</Text>
        <Text style={styles.subTitle}>{CardContent.subtitle}</Text>
        <View style={styles.iconsContainer}>
          <View style={styles.leftContainer}>
            <FontAwesome style={{marginTop:1.5}} name="star" size={20} color="#FBBE21" />
            <Text style={styles.stars}>{CardContent.point}</Text>
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.square}>
              <MaterialCommunityIcons
                name="coffee-maker"
                size={20}
                color="#C67C4E"
              />
            </View>
            <View style={styles.square}>
              <FontAwesome name="coffee" size={20} color="#C67C4E" />
            </View>
          </View>
        </View>
        <Text style={styles.descTitle}>Description</Text>
        <Text style={styles.desc}>
         {CardContent.desc}
        </Text>
        <Text style={styles.sizeTitle}>Size</Text>
        <View style={styles.sizesContainer}>
          <View style={styles.size}>
          <Text style={styles.sizeText}>S</Text>
          </View>
          <View style={styles.size}>
          <Text style={styles.sizeText}>M</Text>
          </View>
          <View style={styles.size}>
            <Text style={styles.sizeText}>L</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceTitle}>Price</Text>
          <Text style={styles.price}>$ {CardContent.price}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Order')} style={styles.buyButton}>
          <Text style={styles.buyText}>Buy Now</Text>
        </TouchableOpacity>
        </View>


      </View>

    </SafeAreaView>
  );
};

export default CardDetails;
