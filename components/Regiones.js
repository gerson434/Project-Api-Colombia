import { useEffect } from "react";
import { useState } from "react";
import {getRegionesColombia, getRegionColombia} from '../api/services';
import { View, Text, StyleSheet, TextInput,Button, ScrollView } from "react-native";


const Regiones = ()=>{
    const [id, setId] = useState('');
    const [resultado, setResultado] = useState(null);
  
    const buscarRegion = async () => {
      try {
        const data = await getRegionColombia(id);
        setResultado(data);
      } catch (error) {
        console.error(error);
      }
    };
  //aqui acaba el buscador
    const [regionesColombia, setRegionesColombia] = useState([]);
    useEffect(() =>{
        async function fetchData(){
            const regionesColombia = await getRegionesColombia();
            setRegionesColombia(regionesColombia);
        }
        fetchData();
    },[]);
    return (
        <View style={styles.container}>
            <ScrollView>
       <Text style={styles.title}>Regiones de Colombia</Text>
      <View style={styles.row}>
                    <Text style={styles.cell}>ID</Text>
                    <Text style={styles.cell}>Region</Text>
                </View>
      
           
            {regionesColombia.map(region => (
                     
               <View style={styles.row}>
                        <Text key={region.id} style={styles.cell}>{region.id}</Text>
                        <Text key={region.id} style={styles.cell}>{region.name}</Text>
                    </View>
            ))}
 <Text style={styles.text}>Ingrese el número de ID:</Text>
        <TextInput style={styles.input} value={id} onChangeText={setId} />
        <Button style={styles.butom} title="Buscar" onPress={buscarRegion} />
        {resultado && (
          <><Text style={styles.title}>La Region es {JSON.stringify(resultado.name)}</Text><Text style={styles.text}> {JSON.stringify(resultado.description)}</Text></>
        )}
          
</ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#323232',
        marginVertical: 2,
        padding:10,
        borderColor: 'black',
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
        justifyContent:'center',
        textAlign:'center',
      },
      input: {
        backgroundColor:'#fff',
        width:300,
        margin:15,
        height:40,
        borderRadius:15,
        textAlign:'center'

      },
      butom: {
        maxWidth:50,
        
      },
      row: {
        flexDirection: 'row',
        color:'white',
        fontWeight: 900,
        fontSize:30,
       
         },
      cell: {
        flex: 1,
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        color:'white',

      },
    });
export default Regiones;