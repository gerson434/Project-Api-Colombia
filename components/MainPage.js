import React,  { useEffect, useState } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { Icon } from "react-native-elements"
import { getColombiaInfo } from "../api/services"
import { color } from "react-native-elements/dist/helpers"


const MainPage = ({navigation}) => {
    const [colombiaInfo, setColombiaInfo] = useState({})

    useEffect(() => {
        async function fetchData() {
            const colombiaData = await getColombiaInfo()
            setColombiaInfo(colombiaData)
        }
        fetchData();
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Icon name='rowing' onPress={() => navigation.navigate('')} />
                )
            }
        })
        
    })

    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.title}>Información acerca de: {colombiaInfo.name}</Text>
            <Text style={styles.text}>Descripción: {colombiaInfo.description}</Text>       
            <Text style={styles.title}>Capital: {colombiaInfo.stateCapital}</Text>
            <Text style={styles.title}>Superficie: {colombiaInfo.surface}</Text>
            <Text style={styles.title}>Población: {colombiaInfo.population}</Text>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#323232',
      paddingTop:20,
      padding:35,
      
    },
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      marginVertical: 10,
      textAlign:'center',
      color:'white'
      

    },
    text: {
      fontSize: 16,
      marginVertical: 5,
      color:'white',
      textAlign:'justify',
     
    },
  });

export default MainPage;