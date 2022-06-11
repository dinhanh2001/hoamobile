import {Text,View ,SafeAreaView ,Image,Pressable} from "react-native"
import { Ionicons ,FontAwesome5 ,AntDesign ,FontAwesome ,MaterialIcons} from '@expo/vector-icons';
export default function ProfileScreen({navigation}){
    return (
        <SafeAreaView>
            <View style={{flexDirection:"row",alignItems:"center",marginHorizontal:10,marginTop:20,paddingBottom:20,borderBottomColor:"grey",borderBottomWidth:2}}>
                <Image
                    source={{uri:"https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/283886020_1160350904752880_3363300465330194295_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3kgnJU3uXAAAX84SaxC&_nc_ht=scontent.fhan3-4.fna&oh=00_AT84yKyLJzT4gSquUqu5xF0Q3y_eoD_v8HcjRedYK0d2LQ&oe=629FAD90"}}
                    style={{width:60,
                    height:60,borderRadius:30}}
                />
                <View style={{marginLeft:10}}>
                    <Text style={{fontWeight:"600",fontSize:20}}>Xuân Hòa</Text>
                    <Text>Xem trang cá nhân của bạn</Text>
                </View>
            </View>
            <View style={{marginTop:10,paddingHorizontal:10}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:20,alignItems:"center",}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <View style={{backgroundColor:"#e4e6eb",padding:10,borderRadius:30}}>
                        <Ionicons name="ios-settings" size={30} color="black" />
                        </View>
                        <Text style={{marginLeft:3,fontSize:18}}>{`Cài đặt & quyền riêng tư`}</Text>
                    </View>
                    <FontAwesome5  name="arrow-right" size={24} color="black" />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:20,alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <View style={{backgroundColor:"#e4e6eb",padding:10,borderRadius:30}}>
                        <AntDesign name="questioncircle" size={30} color="black" />
                        </View>
                        <Text style={{marginLeft:3,fontSize:18}}>{`Trợ giúp & hỗ trợ`}</Text>
                    </View>
                    <FontAwesome5  name="arrow-right" size={24} color="black" />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:20,alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <View style={{backgroundColor:"#e4e6eb",padding:10,borderRadius:30}}>
                        <Ionicons name="moon" size={30} color="black" />
                        </View>
                        <Text style={{marginLeft:3,fontSize:18}}>{`Màn hình & trợ năng`}</Text>
                    </View>
                    <FontAwesome5  name="arrow-right" size={24} color="black" />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:20,alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <View style={{backgroundColor:"#e4e6eb",padding:10,borderRadius:30}}>
                        <FontAwesome name="commenting" size={30} color="black" />

                        </View>
                        <Text style={{marginLeft:3,fontSize:18}}>{`Đóng góp ý kiến`}</Text>
                    </View>
                    <FontAwesome5  name="arrow-right" size={24} color="black" />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:20,alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <View style={{backgroundColor:"#e4e6eb",padding:10,borderRadius:30}}>
                        <AntDesign name="heart" size={30} color="black" />
                        </View>
                        <Text style={{marginLeft:3,fontSize:18}}>{`Yêu thích`}</Text>
                    </View>
                    <FontAwesome5  name="arrow-right" size={24} color="black" />
                </View>
                <Pressable onPress={()=>{navigation.navigate("Login")}} style={{flexDirection:"row",justifyContent:"space-between",marginVertical:20,alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <View style={{backgroundColor:"#e4e6eb",padding:10,borderRadius:30}}>
                        <MaterialIcons name="logout" size={30} color="black" />
                        </View>
                        <Text style={{marginLeft:3,fontSize:18}}>{`Đăng xuất`}</Text>
                    </View>
                    
                </Pressable>
            </View>
        </SafeAreaView>
    )
}