import { StyleSheet,View , Text , Image } from "react-native";

export default function Navbar(){
    return (
        <View style = {styles.Navbar}>
<View style ={styles.first}>
    <View style={styles.route}>
        <Text style={styles.routetext}>Genie</Text>
        <Text style={styles.routetext}>Genie</Text>
        <Text style={styles.routetext}>Genie</Text>

    </View>
    <Text style ={{fontSize:22,fontWeight:'bold' , color:'white'}}>Genie</Text>
    <Text style ={{fontSize:15 , color:'#DCDCDC' , fontWeight:'300' }}>Anything You Need , delivered</Text>
</View>

<View style ={styles.second}>
    <Image style={{  alignSelf:'flex-end' ,width:40 , height:50 , position:'absolute' }} source= {require('../../assets/navimage.jpg')}
    />
</View>
        </View>
    )
}

const styles= StyleSheet.create({
Navbar:{
    flexDirection:'row',
    justifyContent:'center',
    marginVertical:30
},
first:{
    flex:0.7,
},
route:{
    flexDirection:'row',
    
},
routetext:{
    fontSize:18,
    fontWeight:'bold' ,
     color:'green',
     marginRight:5
},
second:{
    flex :0.3,
    justifyContent:'center'
},
})