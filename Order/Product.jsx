import {
    View,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
  } from "react-native";import React from 'react'
import styles from './OrderStyle'

const Product = ({title , subTitle}) => {
  return (
    <View style={styles.product}>
    <View style={styles.productContainer}>
      <Image
        style={styles.productImage}
        source={require("../assets/Cappuccino.jpg")}
      />
      <View style={styles.productInfoContainer}>
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productSubtitle}>{subTitle}</Text>
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
  )
}

export default Product