import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
    marginTop: 12,
  },
  starsContainer: {
    position: "absolute",
    backgroundColor: "rgba(52, 50, 59,0.8)",
    borderTopLeftRadius: 16,
    flexDirection: "row",
    borderBottomRightRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    width: 42,
    height: 25,
  },
  stars: {
    color: "white",
    fontFamily: "SoraMedium",
    marginLeft: 3,
    fontSize:10,
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
  cardSubtitle: {
    fontFamily: "SoraRegular",
    color: "#9B9B9B",
    fontSize: 12,
  },
  priceContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  cardPrice: {
    fontSize: 18,
    fontFamily: "SoraMedium",
  },
  cardIconContainer: {
    width: 32,
    height: 32,
    backgroundColor: "#C67C4E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default styles;
