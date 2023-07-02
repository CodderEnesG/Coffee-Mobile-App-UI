import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import styles from "./OrderStyle";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Order = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerBackVisible: false,
      headerTitle: (props) => (
        <View style={styles.header}>
          <Ionicons
            style={{ left: 0, position: "absolute" }}
            name="chevron-back"
            size={24}
            color="black"
          />
          <Text style={styles.headerTitle}>Order</Text>
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
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[styles.option, { backgroundColor: "#C67C4E" }]}
          >
            <Text
              style={[
                styles.optionText,
                { color: "#fff", fontFamily: "SoraBold" },
              ]}
            >
              Deliver
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Pick Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Delivery Address</Text>
          <Text style={styles.address}>Beyoglu AIHL</Text>
          <Text style={styles.addressDesc}>
            Imrahor Cad. No:88 Istanbul/Turkiye
          </Text>
          <View style={styles.addressButtonsContainer}>
            <TouchableOpacity style={styles.addressButton}>
              <FontAwesome5 name="edit" size={12} color="black" />
              <Text style={styles.addressButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addressButton}>
              <MaterialCommunityIcons
                style={{ marginTop: 2 }}
                name="note-text-outline"
                size={14}
                color="black"
              />
              <Text style={styles.addressButtonText}>Add Note</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.product}>
          <View style={styles.productContainer}>
            <Image
              style={styles.productImage}
              source={require("../assets/Americano2.jpeg")}
            />
            <View style={styles.productInfoContainer}>
              <Text style={styles.productTitle}>Americano</Text>
              <Text style={styles.productSubtitle}>Classic</Text>
            </View>
          </View>
          <View style={styles.productButtonsContainer}>
            <TouchableOpacity style={styles.productButton}>
              <Text style={styles.productButtonNumber}>-</Text>
            </TouchableOpacity>
            <Text style={styles.productButtonNumber}>1</Text>
            <TouchableOpacity style={styles.productButton}>
              <Text style={styles.productButtonNumber}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.product}>
          <View style={styles.productContainer}>
            <Image
              style={styles.productImage}
              source={require("../assets/Cappuccino.jpg")}
            />
            <View style={styles.productInfoContainer}>
              <Text style={styles.productTitle}>Cappuccino</Text>
              <Text style={styles.productSubtitle}>with Chocolate</Text>
            </View>
          </View>
          <View style={styles.productButtonsContainer}>
            <TouchableOpacity style={styles.productButton}>
              <Text style={styles.productButtonNumber}>-</Text>
            </TouchableOpacity>
            <Text style={styles.productButtonNumber}>1</Text>
            <TouchableOpacity style={styles.productButton}>
              <Text style={styles.productButtonNumber}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Order;
