import {View ,Text  ,StatusBar} from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import NewScreen from "./BottomScreen/NewScreen";
import NotificationScreen from "./BottomScreen/NotificationScreen";
import ProfileScreen from "./BottomScreen/ProfileScreen";
import { Ionicons ,MaterialIcons ,FontAwesome} from '@expo/vector-icons';
const BottomsTab = createBottomTabNavigator();
export default function HomeScreen({navigation}){
    return (
      
           <BottomsTab.Navigator>
               <BottomsTab.Screen options={{
                    headerShown:false,
                    tabBarIcon:({focused,color,size})=>{
                        return (
                                <View style={{borderTopColor:focused?"#097eeb":"transparent",borderTopWidth:2}}>
                                <Ionicons name="home-sharp" size={focused ? 30 :22} color={focused ? "#097eeb" :"gray"} />
                                </View>
                        )
                    } ,
                        title:"Trang chủ"  ,
                                      
               }} name="News" component={NewScreen} />
               <BottomsTab.Screen options={{
                    headerShown:false,
                    tabBarIcon:({focused,color,size})=>{
                        return (
                            <View  style={{borderTopColor:focused?"#097eeb":"transparent",borderTopWidth:2}}>
                            <MaterialIcons name="notifications-active" size={focused ? 30 :22} color={focused ? "#097eeb" :"gray"} />
                            </View>
                        )
                    } ,
                        title:"Thông báo",
                        tabBarBadge:6,
                        tabBarBadgeStyle:{backgroundColor:"green"}
               }} name="Notification" component={NotificationScreen} />
               <BottomsTab.Screen options={{
                    headerShown:false,
                    tabBarIcon:({focused,color,size})=>{
                        return (
                            <View style={{borderTopColor:focused?"#097eeb":"transparent",borderTopWidth:2}}>
                            <FontAwesome name="user" size={focused ? 30 :22} color={focused ? "#097eeb" :"gray"} />
                            </View>
                        )
                    } ,
                        title:"Cá nhân" ,
                        
                                     
               }} name="Profile" component={ProfileScreen} />
           </BottomsTab.Navigator>
    )
}