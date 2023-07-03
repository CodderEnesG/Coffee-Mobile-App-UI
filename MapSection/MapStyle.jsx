import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 24,
  },
  header: {
    width: 375,
    height: 530,
  },
  mainImage: {
    width: 375,
    height: "100%",
  },
  footer: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  footerInner: {
    width: 315,
    height: 320,
    backgroundColor: "white",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontFamily: "SoraBold",
    color: "black",
    marginTop: 20,
  },
  subTitle: {
    color: "#808080",
    fontSize: 12,
    fontFamily: "SoraRegular",
    marginBottom: 20,
  },
  boxes: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  box: {
    height: 4,
    width: 71,
    borderRadius: 20,
    backgroundColor: "#36C07E",
  },
  infoContainer: {
    width: "100%",
    height: 90,
    borderColor: "#EAEAEA",
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom:20
  },
  iconContainer: {
    width: 62,
    height: 62,
    borderColor: "#EAEAEA",
    borderWidth: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  infoText: {
    width: 200,
    fontSize: 12,
    color: "#808080",
  },
  infoTitle: {
    fontSize: 14,
    fontFamily: "SoraBold",
  },
  personContainer:{
    width:"100%",
    flexDirection:"row",
    alignItems:"center"
  },
  personImage:{
    width:54,
    height:54,
    borderRadius:14,
    marginRight:12
  },
  personName:{
    fontFamily:"SoraBold",
    fontSize:14,
    marginBottom:2
  },
  personJob:{
    fontFamily:"SoraRegular",
    color:"#808080",
    fontSize:12
  },
  phoneContainer:{
    borderRadius:14,
    borderColor:"#DEDEDE",
    borderWidth:1,
    width:54,
    height:54,
    alignItems:"center",
    justifyContent:"center",
    right:0,
    position:"absolute"

  }
});

export default styles;
