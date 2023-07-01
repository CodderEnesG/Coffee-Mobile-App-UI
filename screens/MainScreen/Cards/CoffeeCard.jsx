import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./CoffeeCardStyle";
import { Entypo } from "@expo/vector-icons";
import Images from "../../../modules/Images";
import { FontAwesome } from '@expo/vector-icons'; 

const CoffeeCard = ({ CardContent , item , handleCardPress }) => {
  return (
    <TouchableOpacity onPress={() => handleCardPress(item)}
    style={styles.coffeeCard}>
      <View style={styles.cardImageContainer}>
        <Image style={styles.cardImage} source={Images[CardContent.image]} />
        <View blurRadius={4} style={styles.starsContainer}>
        <FontAwesome name="star" size={12} color="#FBBE21" />
          <Text style={styles.stars}>{CardContent.point}</Text>
        </View>
      </View>
      <View style={styles.cardInfoContainer}>
        <View>
          <Text style={styles.cardTitle}>{CardContent.title}</Text>
          <Text style={styles.cardSubtitle}>{CardContent.subtitle}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.cardPrice}>$ {CardContent.price}</Text>
          <View style={styles.cardIconContainer}>
            <Entypo name="plus" size={16} color="white" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoffeeCard;
