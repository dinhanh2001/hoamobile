import {View ,Text ,Button ,TextInput, Pressable, Image} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { AntDesign,FontAwesome5 ,Feather } from '@expo/vector-icons';
export default function RegisterScreen({navigation}){
    return (
        <View style={{
            backgroundColor:"#f3eff5",
            flex:1,
            padding:"10%",
            alignContent:'center',
            justifyContent:"center"
          }} >
            <LinearGradient colors={["#7AF176","#35B1B7"]} start={{x:0,y:1}} end={{x:1,y:0}} />
            <View style={{
              alignItems:"center",
              marginBottom:15
            }}>
              <Image
            source={require("../image/logoMobile.png")}
            style={{
              height:150,
              width:220
            }}
          />
              <Text style={{fontSize:30,fontWeight:"500",textAlign:'center'}}>Chào mừng đến với đăng kí!!!</Text>
            </View>
              <View>
                <TextInput 
                style={{
                  backgroundColor:"#ffffff",
                  paddingLeft:10,
                  fontSize:18,
                  color:"#a7a6ad",
                  paddingVertical:15,
                  borderRadius:15,
                  marginBottom:15
                }}
               
                placeholder="Tài khoản" />
                <TextInput 
                style={{
                  backgroundColor:"#ffffff",
                  paddingLeft:10,
                  fontSize:18,
                  color:"#a7a6ad",
                  paddingVertical:15,
                  borderRadius:15,
                  marginBottom:15
                }}
               
               placeholder="Mật khẩu"/>
                <Feather style={{
                  position:"absolute",
                  top:78,
                  right:10
                }} name="eye-off" size={20} color="black" />
                 <TextInput 
                style={{
                  backgroundColor:"#ffffff",
                  paddingLeft:10,
                  fontSize:18,
                  color:"#a7a6ad",
                  paddingVertical:15,
                  borderRadius:15,
                  marginBottom:15
                }}
               
               placeholder="Nhập lại mật khẩu"/>
                <Feather style={{
                  position:"absolute",
                  top:145,
                  right:10
                }} name="eye-off" size={20} color="black" />
              </View>
              
              <Pressable style={{
                backgroundColor:"#fc6b68",
                borderRadius:10,
                paddingVertical:10,
                shadowOffset:{
                  width:15
                  ,
                  height:10
                },
                shadowOpacity:0.7,
                shadowRadius:10,
                shadowColor:"gray"
            }}>
    
              <Button color={"#ffffff"} title="Đăng kí" onPress={()=> navigation.navigate('Home')} />
              </Pressable>
              <View style={{marginTop:20}}>
                <View>
                <Text style={{textAlign:'center'}}>hoặc đăng nhập với ?</Text>
                <View style={{
                  flexDirection:'row',
                  justifyContent:"space-around",
                  paddingVertical:10
                }}>
                  <View style={{
                    borderWidth:2,
                    borderColor:"#ffffff",
                    paddingHorizontal:15,
                    paddingVertical:10,
                    borderRadius:10
                  }}>
                  <AntDesign name="google" size={24} color="#d7463c" />
                  </View>
                  <View   style={{
                    borderWidth:2,
                    borderColor:"#ffffff",
                    paddingHorizontal:15,
                    paddingVertical:10,
                    borderRadius:10
                  }}>
                  <AntDesign name="apple1" size={24} color="#37393b" />
                  </View>
                  <View  style={{
                    borderWidth:2,
                    borderColor:"#ffffff",
                    paddingHorizontal:15,
                    paddingVertical:10,
                    borderRadius:10
                  }}>
                  <FontAwesome5 name="facebook" size={24} color="#1b78f2" />
                  </View>
                </View>
                </View>
                  
              </View>
          </View>
    )
}