import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 35,
    marginTop: 10,
    justifyContent: "space-between",
    backgroundColor: "#202020",
    marginBottom: 20,
  },
  headerImage: {
    width: 45,
    height: 45,
    borderRadius: 14,
  },
  location: {
    fontSize: 12,
    color: "#B7B7B7",
    fontFamily: "SoraRegular",
  },
  mainLocation: {
    fontSize: 14,
    fontFamily: "SoraMedium",
    fontWeight: "600",
    color: "white",
  },
  searchContainer: {
    width: "100%",
    alignItems:"center",
    backgroundColor:"#F9F9F9"
  },
  inputContainer: {
    width: 315,
    height: 48,
    backgroundColor: "#313131",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 16,
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  topContainer:{
    width:"100%",
    alignItems:"center",
    backgroundColor:"#202020",
    height:130
  },
  input: {
    width: 200,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#313131",
    fontFamily: "SoraMedium",
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#C67C4E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  buy_one: {
    width: 315,
    height: 150,
    borderRadius: 16,
    marginTop: 24,
  },
  tab: (activeCoffeeType, item) => ({
    //  paddingVertical: 6,
    //  paddingHorizontal: 12,
    marginRight: 8,
    borderRadius: 12,
    borderWidth: 1,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    borderWidth: 0,
    backgroundColor: activeCoffeeType === item ? "#C67C4E" : "white",
  }),
  tabText: (activeCoffeeType, item) => ({
    color: activeCoffeeType === item ? "white" : "#2F4B4E",
    fontFamily: "SoraMedium",
  }),
  coffeeCardsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 24,
    justifyContent: "space-between",
  },
  coffeeCard: {
    width: 150,
    height: 240,
    backgroundColor: "white",
    borderRadius: 16,
    marginBottom: 20,
    paddingBottom: 16,
  },
  cardInfoContainer: {
    paddingLeft:12,
    paddingRight:12,
    paddingBottom:12,
    marginTop:12,
  },
  cardImage: {
    width: "100%",
    height: 130,
    borderRadius: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: "SoraMedium",
  },
  cardSubtitle:{
    fontFamily:"SoraRegular",
    color:"#9B9B9B",
    fontSize:12,
  },
  priceContainer:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:12
  },
  cardPrice:{
    fontSize:18,
    fontFamily: "SoraMedium",

  },
  cardIconContainer:{
    width:32,
    height:32,
    backgroundColor:"#C67C4E",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10
  }
});

export default styles;
