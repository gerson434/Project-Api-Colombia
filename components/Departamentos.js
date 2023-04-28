import { useEffect } from "react";
import { useState } from "react";
import {getDepartamentoColombia, getDepartamentosColombia} from '../api/services';
import { View, Text, StyleSheet, TextInput,Button, ScrollView } from "react-native";


const Departamentos = ()=>{
    const [id, setId] = useState('');
    const [resultado, setResultado] = useState(null);
  
    const buscarDepartamento = async () => {
      try {
        const data = await getDepartamentoColombia(id);
        setResultado(data);
      } catch (error) {
        console.error(error);
      }
    };
  //aqui acaba el buscador
    const [departamentosColombia, setDepartamentosColombia] = useState([]);
    useEffect(() =>{
        async function fetchData(){
            const departamentosColombia = await getDepartamentosColombia();
            setDepartamentosColombia(departamentosColombia);
        }
        fetchData();
    },[]);
    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.text}>Ingrese el número de ID:</Text>
        <TextInput style={styles.input} value={id} onChangeText={setId} />
        <Button style={styles.butom} title="Buscar" onPress={buscarDepartamento} />
        
      
        {resultado && ([
          <Text style={styles.title}>El Departamento es {JSON.stringify(resultado.name)}</Text>,
          <Text style={styles.text}> {JSON.stringify(resultado.description)}</Text>,
          <View style={styles.row}>
                    <Text style={styles.cell}>Capital</Text>
                    <Text style={styles.cell}>Poblacion Capital</Text>
                    <Text style={styles.cell}>Poblacion</Text>
                </View>,
             <View style={styles.row}>
          <Text style={styles.cell}> {JSON.stringify(resultado.cityCapital.name)}</Text>
          <Text style={styles.cell}> {JSON.stringify(resultado.cityCapital.population)}</Text>
          <Text style={styles.cell}> {JSON.stringify(resultado.population)}</Text>
          </View>
        ]
        )}
          
       <Text style={styles.title}> Buscar Departamentos</Text>
      <View style={styles.row}>
                    <Text style={styles.cell}>ID</Text>
                    <Text style={styles.cell}>Departamento</Text>
                </View>
      
           
            {departamentosColombia.map(region => (
                     
               <View style={styles.row}>
                        <Text key={region.id} style={styles.cell}>{region.id}</Text>
                        <Text key={region.id} style={styles.cell}>{region.name}</Text>
                    </View>
            ))}

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
        borderColor: 'black',
        paddingTop:20,
        padding:15,
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
        textAlign:'justify',
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
export default Departamentos;