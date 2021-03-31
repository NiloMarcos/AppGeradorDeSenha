import React,{useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import Slider from '@react-native-community/slider';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';


export default function App(){
  const [password, setPassword] = useState('');
  const  [size, setSize] = useState(10);

  function gerarSenha(){
    let pass = '';
    for(let i = 0, n = charset.length; i < size; i++){
      pass += charset.charAt(Math.floor(Math.random() * n))
    }
    setPassword(pass);
  }

  return(
    <View style={styles.container}>
      <Image source={require('./src/assets/logo.png')} style={styles.logo}/>

      <Text style={styles.title}>{size} Caracteres</Text>
    
      <View style={styles.area}>
        <Slider style={{height: 50}} minimumValue={5} 
                                     maximumValue={15} 
                                     minimumTrackTintColor="#FF0000" 
                                     maximumTrackTintColor="#000"
                                     value={size}
                                     onValueChange={ (valor) => setSize(valor)}
                                     />
      </View>

        <TouchableOpacity style={styles.button} onPress={() => gerarSenha()}>
          <Text style={styles.buttonText}>Gerar Senha</Text>
        </TouchableOpacity>

        {password !== '' && (
          <View style={styles.area}>
            <Text style={styles.passworld}>{password}</Text>
          </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  logo: {
    marginBottom: 60
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF'
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#A9A9A9',
    width: '80%',
    borderRadius: 7
  },
  button: {
    backgroundColor: '#A9A9A9',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  passworld: {
    padding: 10,
    textAlign: 'center',
    fontSize: 25
  }
})