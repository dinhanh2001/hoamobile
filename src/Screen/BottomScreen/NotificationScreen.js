import {Text,View,SafeAreaView ,Image ,ScrollView} from "react-native"
export default function NotificationScreen(){
    return (
        <SafeAreaView>
            <ScrollView>
       <View style={{padding:15}}>
           <Text style={{fontSize:35,fontWeight:"700"}}>Thông Báo</Text>
           <View style={{flexDirection:'row'}}>
               <View style={{backgroundColor:"#e7f3ff",padding:15 ,borderRadius:15}}>
                    <Text style={{color:"#247ef3",fontWeight:"700"}}>Tất cả</Text>
               </View>
               <View style={{padding:15}} >
                    <Text style={{color:"#000",fontWeight:"700"}}>Chưa đọc</Text>
               </View>
           </View>
           <View style={{flexDirection:'row',justifyContent:"space-between"}} >
               <Text style={{fontSize:18,fontWeight:"600"}}>Mới</Text>
               <Text style={{fontSize:18,color:"#5490e3"}}>Xem tất cả </Text>
           </View>
           <View style={{paddingTop:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
               <View style={{flexDirection:"row",alignItems:"center", padding:10}}>
                   <Image 
                    source={{uri:"https://cdn.pixabay.com/photo/2022/02/17/18/22/flower-7019264__340.jpg"}}
                    style={{width:60,height:60,borderRadius:30}}
                   />
                   <View style={{ paddingLeft:5,width:250}} >
                        <Text style={{fontWeight:"500",fontSize:16}}>Kỳ thi THPT quốc gia đã đăng video mới:
                         Đề thi năm 2020 sẽ là:...</Text>
                        <Text style={{color:"blue"}}>Khoảng 1 giờ trước </Text>
                   </View>
               </View>
               <View style={{backgroundColor:"#1876f2",padding:5, borderRadius:5,width:10,height:10}}>
               </View>
           </View>
               <Text style={{fontSize:18,fontWeight:"600"}}> Trước đó</Text>
               <View style={{paddingTop:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
               <View style={{flexDirection:"row",alignItems:"center", padding:10}}>
                   <Image 
                    source={{uri:"https://cdn.pixabay.com/photo/2022/02/26/21/35/candies-7036390__340.jpg"}}
                    style={{width:60,height:60,borderRadius:30}}
                   />
                   <View style={{ paddingLeft:5,width:250}} >
                        <Text style={{fontWeight:"500",fontSize:16}}>Phan Văn Phú đã bình luận một bài viết mà bạn đang theo dõi trong React Native Việt Nam</Text>
                        <Text style={{color:"blue"}}>Khoảng 2 giờ trước </Text>
                   </View>
               </View>
               <View style={{backgroundColor:"#1876f2",padding:5, borderRadius:5,width:10,height:10}}>
               </View>
           </View>
           <View style={{paddingTop:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
               <View style={{flexDirection:"row",alignItems:"center", padding:10}}>
                   <Image 
                    source={{uri:"https://cdn.pixabay.com/photo/2021/12/04/04/44/woman-6844349__340.jpg"}}
                    style={{width:60,height:60,borderRadius:30}}
                   />
                   <View style={{ paddingLeft:5,width:250}} >
                        <Text style={{fontWeight:"500",fontSize:16}}>Nguyễn Thị Trang đã thêm một ảnh mới</Text>
                        <Text style={{color:"blue"}}>13:45 </Text>
                   </View>
               </View>
               <View style={{padding:5, borderRadius:5,width:10,height:10}}>
               </View>
           </View>
           <View style={{paddingTop:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
               <View style={{flexDirection:"row",alignItems:"center", padding:10}}>
                   <Image 
                    source={{uri:"https://cdn.pixabay.com/photo/2017/05/19/10/12/hand-2326058__340.jpg"}}
                    style={{width:60,height:60,borderRadius:30}}
                   />
                   <View style={{ paddingLeft:5,width:250}} >
                        <Text style={{fontWeight:"500",fontSize:16}}>Dương Hoàng Linh đã bày tỏ cảm xúc về bài viết của bạn</Text>
                        <Text style={{color:"blue"}}>Khoảng 8 giờ trước </Text>
                   </View>
               </View>
               <View style={{padding:5, borderRadius:5,width:10,height:10}}>
               </View>
           </View>
           <View style={{paddingTop:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
               <View style={{flexDirection:"row",alignItems:"center", padding:10}}>
                   <Image 
                    source={{uri:"https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/284208191_4096891523902285_9030320311588317810_n.png?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=J2UHRKFJsz0AX_qgw7c&_nc_ht=scontent.fhan4-3.fna&oh=00_AT8NqGjUB9TXujNCFcLr3ZMjmjOEjRj9jgI3La8Sld1KPg&oe=62A009C8"}}
                    style={{width:60,height:60,borderRadius:30}}
                   />
                   <View style={{ paddingLeft:5,width:250}} >
                        <Text style={{fontWeight:"500",fontSize:16}}>Trần Mạnh Hùng đã bình luận về bài viết của Jonny Đặng</Text>
                        <Text style={{color:"blue"}}>Khoảng 12 giờ trước </Text>
                   </View>
               </View>
               <View style={{backgroundColor:"#1876f2",padding:5, borderRadius:5,width:10,height:10}}>
               </View>
           </View>
           <View style={{paddingTop:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
               <View style={{flexDirection:"row",alignItems:"center", padding:10}}>
                   <Image 
                    source={{uri:"https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/283886020_1160350904752880_3363300465330194295_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3kgnJU3uXAAAX84SaxC&_nc_ht=scontent.fhan3-4.fna&oh=00_AT84yKyLJzT4gSquUqu5xF0Q3y_eoD_v8HcjRedYK0d2LQ&oe=629FAD90"}}
                    style={{width:60,height:60,borderRadius:30}}
                   />
                   <View style={{ paddingLeft:5,width:250}} >
                        <Text style={{fontWeight:"500",fontSize:16}}>Ken ngô đã thích bình luận của bạn: cảm ơn bạn nha</Text>
                        <Text style={{color:"blue"}}>Khoảng 3 ngày trước </Text>
                   </View>
               </View>
               <View style={{backgroundColor:"#1876f2",padding:5, borderRadius:5,width:10,height:10}}>
               </View>
           </View>
       </View>
       </ScrollView>
       </SafeAreaView>
    )
}