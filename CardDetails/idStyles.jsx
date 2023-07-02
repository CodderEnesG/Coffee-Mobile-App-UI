import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 50,
  },
  headerTitle: {
    color: "#2F2D2C",
    fontSize: 18,
    fontFamily: "SoraMedium",
  },
  mainImage: {
    width: 315,
    height: 225,
    borderRadius: 16,
  },
  mainImageContainer: {
    width: "100%",
    height: 225,
    alignItems: "center",
    marginBottom: 20,
    marginTop:10
  },
  title: {
    fontSize: 20,
    color: "#2F2D2C",
    fontFamily: "SoraBold",
  },
  subTitle: {
    fontSize: 12,
    color: "#9B9B9B",
    fontFamily: "SoraRegular",
    marginBottom: 16,
  },
  iconsContainer: {
    width: "100%",
    height: 64,
    paddingBottom: 20,
    borderBottomColor: "#EAEAEA",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  leftContainer: {
    flexDirection: "row",
  },
  stars: {
    fontSize: 16,
    fontFamily: "SoraBold",
    marginLeft: 4,
  },
  rightContainer: {
    flexDirection: "row",
  },
  square: {
    width: 44,
    height: 44,
    backgroundColor: "#F9F9F9",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  descTitle: {
    fontSize: 16,
    fontFamily: "SoraBold",
  },
  desc: {
    color: "#9B9B9B",
    fontSize: 14,
    fontFamily: "SoraRegular",
    marginBottom:20

  },
  sizeTitle: {
    fontSize: 16,
    fontFamily: "SoraBold",
    marginBottom:12
  },
  sizesContainer: {
    flexDirection: "row",
    justifyContent:"space-between"
  },
  size: {
    width: 96,
    height: 42,
    borderColor: "#DEDEDE",
    borderWidth: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    
  },
  sizeText:{
    fontSize:14,
    fontFamily:"SoraRegular"
  },
  footer:{
    height:120,
    backgroundColor:"white",
    width:375,
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
    alignItems:"center",
    paddingTop:16

  },
  footerContainer:{
    width:315,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  priceTitle:{
    fontSize: 14,
    color: "#9B9B9B",
    fontFamily: "SoraRegular",
    marginBottom:4
  },
  price:{
    fontSize:18,
    color:"#C67C4E",
    fontFamily: "SoraBold",
  },
  buyButton:{
    height:60,
    width:220,
    backgroundColor:"#C67C4E",
    borderRadius:16,
    justifyContent:"center",
    alignItems:"center"
  },
  buyText:{
    fontFamily:"SoraBold",
    fontSize:16,
    color:"#fff"

  }
  
});

export default styles;
