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
import Product from "./Product";
import { Entypo } from "@expo/vector-icons";

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
      showsVerticalScrollIndicator={false}
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
              <Text style={styles.addressButtonText}>Edit Address</Text>
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
        <Product title={"Cappucino"} subTitle={"with Chocolate"} />
        <View style={styles.discountContainer}>
          <View style={styles.percentIcon}>
            <MaterialCommunityIcons name="percent" size={18} color="white" />
          </View>
          <Text style={styles.discountText}>1 Discount is applied</Text>
          <Entypo
            name="chevron-right"
            size={20}
            style={{ right: 16, top: 16, position: "absolute" }}
            color="black"
          />
        </View>
        <View style={styles.paymentContainer}>
          <Text style={styles.paymentTitle}>Payment Summary</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceTitle}>Price</Text>
            <Text style={styles.price}>$ 4.53</Text>
          </View>
          <View style={styles.feeContainer}>
            <Text style={styles.feeTitle}>Delivery Fee</Text>
            <View style={styles.feeInnerContainer}>
              <Text style={styles.feeOld}>$ 2.0</Text>
              <Text style={styles.fee}>$ 1.0</Text>
            </View>
          </View>
          <View style={styles.totalPaymentContainer}>
            <Text style={styles.totalPaymentTitle}>Total Payment</Text>
            <Text style={styles.totalPayment}>$ 5.53</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.cashContainer}>
          <Ionicons
            style={{ marginRight: 16 }}
            name="cash-outline"
            size={22}
            color="#C67C4E"
          />
          <View style={styles.cashBox}>
            <View style={styles.cashTitleContainer}>
              <Text style={styles.cashTitle}>Cash</Text>
            </View>
            <Text style={styles.cash}>$ 5.53</Text>
          </View>
          <View style={styles.dotsContainer}>
            <Entypo name="dots-three-horizontal" size={16} color="white" />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Map')} style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Order;
