import {View ,Text ,Button ,TextInput, Pressable,Image} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { AntDesign,FontAwesome5 ,Feather } from '@expo/vector-icons';
import { useState } from "react";
import { user } from "../data";
export default function LoginScreen({navigation}){
  const [username ,setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onLogin=()=>{
    if(username=="" || password==""){
      alert("Bạn chưa nhập tài khoản hoặc mật khẩu")
      return false
    }
    else if(username.length>=6 & password.length >=6){
      var check =false
        for( let i =0 ; i<user.length ; ++i){
          if(user[i].username==username & user[i].password==password){
           check=true
           break;
          }
          else{
            check=false
          }
        }
        if(check){
          navigation.navigate("Home")
        }  
        else{
          alert("Sai tài khoản hoặc mật khẩu")
        }
    }
  }
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
          <Text style={{fontSize:30,fontWeight:"500",textAlign:'center'}}>Chào mừng bạn đến mới ứng dụng của chúng tôi !!!</Text>
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
            value={username}
            onChangeText={(user)=>setUsername(user)}
            placeholder="Tài Khoản" />
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
            secureTextEntry={true}
            placeholder="Mật khẩu"
            value={password}
            onChangeText={(pass)=>setPassword(pass)}
             />
            <Feather style={{
              position:"absolute",
              top:78,
              right:10
            }} name="eye-off" size={20} color="black" />
          </View>
          <Text style={{fontSize:16,textAlign:"right",marginVertical:10}}>Recovery Password</Text>
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

          <Button color={"#ffffff"} title="Đăng nhập" onPress={onLogin} />
          </Pressable>
          <View style={{marginTop:20}}>
            <View>
            <Text style={{textAlign:'center'}}>Đăng nhập với  ?</Text>
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
              <View style={{
                flexDirection:"row",
                alignItems:'center',
                justifyContent:'center',
                paddingVertical:30
              }}>
                  <Text>Bạn chưa có tài khoản ?</Text>
                  <Text style={{color:"#7d9dc9"}} onPress={()=>navigation.navigate("Register")}>Đăng kí ngay</Text>
              </View>
          </View>
      </View>
    )
}