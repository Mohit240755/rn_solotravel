import { SafeAreaView, StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Visi } from '../../../../constant/Data';
import Visit from '../CustomItems/visit';

const VisitScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,marginHorizontal:16}}>
 <View style={styles.header} >
         <AntDesign name="leftcircle" size={24} color="black" />
         <Text style={styles.text} >Most Visited</Text>
         </View>
         <FlatList
         data={Visi}
         keyExtractor={item => item.id.toString()}
           renderItem={({item}) => (
                <Visit
                  image={item.image}
                  id={item.id}
                  title={item.title}
                  location={item.location}
                  rate={item.rate}
                  price={item.price}
                  navigation={navigation}
                />
              )}
              ItemSeparatorComponent={() => <View style={{width: 8}} />}
              contentContainerStyle={{paddingHorizontal:5,paddingVertical:20}}
              showsHorizontalScrollIndicator={false}
         />

    </SafeAreaView>
  )
}

export default VisitScreen;

const styles = StyleSheet.create({
     header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: 50,
    paddingLeft: 10,
    position:"relative",
    alignItems:"center"
  },
   text:{
      position:"absolute",
      left:0,
      right:0,
      paddingTop:40,
      textAlign:"center",
      fontWeight:"bold",
      fontSize:25,
    }
})