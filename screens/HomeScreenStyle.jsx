import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  mainImage: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: 600,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"black"
  },
  title: {
    fontSize: 34,
    textAlign: "center",
    width: 270,
    height: 129,
    fontWeight: "600",
    fontFamily: "SoraBold",
    color:"white"
  },
  subTitle: {
    fontSize: 14,
    color: "#A9A9A9",
    width: 250,
    textAlign: "center",
    fontFamily: "SoraRegular",

  },
  button: {
    width: 315,
    height: 60,
    alignItems: "center",
    backgroundColor: "#C67C4E",
    justifyContent: "center",
    borderRadius: 16,
    marginTop: 24,
    marginBottom: 30,
  },

});

export default styles;
