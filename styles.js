import { StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
  rootDiv:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  }
  ,
  linearGradient: {
    height: 700,
    width: 500,
    borderRadius: 20, // <-- Outer Border Radius
  },
  innerContainer: {
    borderRadius: 15, // <-- Inner Border Radius
    flex: 1,
    margin: 5, // <-- Border Width
    backgroundColor: "#fff",
    justifyContent: "center",
    padding:30,
    borderWidth:5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    fontWeight: "bold",
    textAlign: "center",
    marginTop:10,
    color: "white",
  },
  menu : {
    width:'100%',
    height:'auto',
    backgroundColor: "#fff",
    marginTop:4,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  menuGradient: {
    height: 550,
    width:"100%",
    borderRadius: 10,
    backgroundColor:'white',
    borderWidth:6,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    borderRadius:20,
    marginBottom:10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
