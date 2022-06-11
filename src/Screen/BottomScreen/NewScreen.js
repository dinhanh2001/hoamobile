import {Text,View,StatusBar,Image ,TextInput,ImageBackground ,ScrollView ,FlatList,VirtualizedList} from "react-native"
import Sketeton from "../component/Skeleton"
import { MaterialCommunityIcons ,Ionicons ,AntDesign } from '@expo/vector-icons';
import { News } from "../../data";
import { FontAwesome } from '@expo/vector-icons';
function NewsInfo({item}){
    return (
        <View style={{padding:10,marginTop:10}}>
        <View style={{flexDirection:"row"}}>
                <Image 
                style={{width:40,
                height:40,
                borderRadius:20}} 
                source={{uri:item.image}}
                />
                <View style={{marginLeft:5}}>
                    <Text style={{fontWeight:"700",fontSize:16,width:400}}>{item.name}</Text>
                    <Text style={{marginTop:5,width:100,height:15}}>{item.time}</Text>
                </View>
        </View>
        <Text style={{marginVertical:5}}>{item.status}</Text>
       <View style={{paddingTop:10}}>
       <Image
        style={{width:400,
             height:450
            
            }}
         source={{uri:item.image}} />
           
       </View>
       <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:5}}>
           <View style={{alignItems:"center",flexDirection:"row"}}>
                <AntDesign name="like2" size={24} color="black" />
                <Text>Thích</Text>
           </View>
           <View style={{alignItems:"center",flexDirection:"row"}}>
                <Ionicons name="chatbox-outline" size={24} color="black" />
                <Text>Bình luận</Text>
           </View>
           <View style={{alignItems:"center",flexDirection:"row"}}>
                <MaterialCommunityIcons name="share-outline" size={28} color="black" />
                <Text>Chia sẻ</Text>
           </View>
       </View>
    </View>
    )
}
export default function NewScreen(){
    return (
        <View style={{paddingTop:20}}>
            <ScrollView>
            <StatusBar />
            <View style={{flexDirection:'row',alignItems:"center",justifyContent:"space-between"}}>
                <Image
                    source={require("../../image/logoMobile.png")}
                    style={{
                        width:100,
                        height:50
                    }}
                />
                <FontAwesome style={{marginRight:10,marginTop:15}} name="search" size={24} color="black" />
            </View>
            <View style={{paddingHorizontal:10,paddingVertical:10,borderBottomWidth:10,
            borderBottomColor:"#d8d8d8",flexDirection:'row',alignItems:'center'
            }}>
            <Image
                source={{uri:"https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/283886020_1160350904752880_3363300465330194295_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3kgnJU3uXAAAX84SaxC&_nc_ht=scontent.fhan3-4.fna&oh=00_AT84yKyLJzT4gSquUqu5xF0Q3y_eoD_v8HcjRedYK0d2LQ&oe=629FAD90"}}
                style={{
                    width:40,
                    height:40,
                    borderRadius:20
                }}
            />
            <TextInput  value="Cập nhật trạng thái ..."  style={{
                marginLeft:15,
                color:"black"
            }}/>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around",padding:10}}>
              <View style={{borderBottomWidth:2,borderBottomColor:"blue",paddingBottom:10,flex:0.3}}>
                <Text style={{color:"blue",fontSize:16,textAlign:"center"}}>Tin</Text>
              </View>
              <View style={{flex:0.3}}>
                <Text style={{fontSize:16,textAlign:"center"}}>Reels</Text>
              </View>
              <View style={{flex:0.3}}>
                <Text style={{fontSize:16,textAlign:"center"}}>Phòng họp</Text>
              </View>
            </View>
            <View style={{paddingHorizontal:10,flexDirection:'row',borderBottomWidth:5,borderBottomColor:"grey",paddingBottom:10}}>
                    <View style={{width:100,height:150,borderRadius:15,paddingLeft:5}}>
                        <ImageBackground style={{flex:1,justifyContent:'center',zIndex:-1}} resizeMode="cover" source={{uri:"https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/283886020_1160350904752880_3363300465330194295_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3kgnJU3uXAAAX84SaxC&_nc_ht=scontent.fhan3-4.fna&oh=00_AT84yKyLJzT4gSquUqu5xF0Q3y_eoD_v8HcjRedYK0d2LQ&oe=629FAD90"}} >
                            <Text style={{color:"#ffffff", position:"absolute",bottom:10,fontSize:16,fontWeight:"bold"}}>Trần Văn Mạnh</Text>
                        </ImageBackground>
                    </View>
                    <View style={{width:100,height:150,borderRadius:15,paddingLeft:5}}>
                        <ImageBackground style={{flex:1,justifyContent:'center',zIndex:-1}} resizeMode="cover" source={{uri:"https://cdn.pixabay.com/photo/2021/12/04/04/44/woman-6844349__340.jpg"}} >
                            <Text style={{color:"#ffffff", position:"absolute",bottom:10,fontSize:16,fontWeight:"bold"}}>Nguyễn Thảo Nguyên</Text>
                        </ImageBackground>
                    </View>
                    <View style={{width:100,height:150,borderRadius:15,paddingLeft:5}}>
                        <ImageBackground style={{flex:1,justifyContent:'center',zIndex:-1}} resizeMode="cover" source={{uri:"https://cdn.pixabay.com/photo/2022/05/24/16/11/berlin-7218821__340.jpg"}} >
                            <Text style={{color:"#ffffff", position:"absolute",bottom:10,fontSize:16,fontWeight:"bold"}}>Đỗ Hùng Dũng</Text>
                        </ImageBackground>
                    </View>
                    <View style={{width:100,height:150,borderRadius:15,paddingLeft:5}}>
                        <ImageBackground style={{flex:1,justifyContent:'center',zIndex:-1}} resizeMode="cover" source={{uri:"https://cdn.pixabay.com/photo/2022/01/23/08/49/cat-6960183__340.jpg"}} >
                            <Text style={{color:"#ffffff", position:"absolute",bottom:10,fontSize:16,fontWeight:"bold"}}>Nguyễn Thị Yến</Text>
                        </ImageBackground>
                    </View>
                    
                </View>
                <View>

                </View>
                <FlatList
                    data={News}
                    keyExtractor={item=>item.id}
                    renderItem={NewsInfo}
                />
        </ScrollView>
        </View>
    )
}
