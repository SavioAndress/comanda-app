import { StyleSheet, Dimensions } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#D9A63A',
    },
    box_logo:{
        height: Dimensions.get('window').height/2,
        width:'100%',
        // backgroundColor: 'red',
        alignItems:'center',
        justifyContent:'center',
    },
    text_logo:{
        fontSize:30,
        color:'#FFFF',
        fontWeight:'bold',
        marginTop:10
    },
    box_button:{
        height: Dimensions.get('window').height/2,
        width:'100%',
        // backgroundColor: 'blue',
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        width:350,
        height:300,
        marginTop:100
    },
    button:{
        width:300,
        height:80,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#0F5C4C',
        borderRadius:40
    },
    text_button:{
        fontSize:28,
        color:'#FFFFFF',
        fontWeight:'bold'
    }
})