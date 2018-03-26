import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class AppWeather extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          city: '',
          forecast: {
            main: '_',
            temp: 0,
            description: '_'

          }
        };
      }
    getWeather= () => {
      let url = 'http://api.openweathermap.org/data/2.5/weather?q=+'
      + this.state.city +
      '&appid=3b6ef3ef118cb95175f6d237f8412487&units=metric';
      return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.setState({
            forecast: {
              temp: responseJson.main.temp,
              main: responseJson.weather[0].main,
              description: responseJson.weather[0].description
            }
          });
        });
    }
    render() {
      return (
      <View style={styles.containerMain}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }} > Prakiraan Cuaca
          </Text>
        </View>

        <View style={styles.box}>
          <View style={styles.input}>
          <Text style={{ fontSize: 20, margin: 10, color: 'black', textAlign: 'center' }}>
          Masukkan Nama Kota</Text>
            <View style={styles.containerInput}>
            <TextInput
            style={styles.text}
            placeholder="Nama Kota"
            onChangeText={(city) => this.setState({ city })}
            />
            </View>
            <Button
              onPress={() => this.getWeather()}
              title="Cari"
              accessibilityLabel="Menghitung"
            />
          </View>
          <View style={styles.data}>
          <Text style={{ fontSize: 25, color: 'black', textAlign: 'center' }} >Hasil</Text>
          <Text style={{ padding: 10, fontSize: 20 }} >

             Suhu{'\t'}{'\t'}: {this.state.forecast.temp} {'\n'}
             Cuaca{'\t'}{'\t'}: {this.state.forecast.main} {'\n'}
             Deskripsi{'\t'}: {this.state.forecast.description}
          </Text>
          </View>
          </View>

          <View style={styles.footer}>
            <Text style={{ fontSize: 25, color: 'white', textAlign: 'center' }} >#PrototipeUndiksha</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#00695C', //warna dasar hijau
    flex: 1,
    flexDirection: 'column'
  },
  header: { //header pada layar
    flex: 1,
    backgroundColor: '#00695C', //hijau tua
    marginTop: 20,
    alingItems: 'center',
    justifyContent: 'center',

  },
  box: {
    flex: 8, // dasar
    backgroundColor: '#B2DFDB', //hijau muda
    flexDirection: 'column',

  },

  input: {
      flex: 2,
      backgroundColor: '#EF5350', //merah agak muda
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
    //  bordeRadius: 100
    },
    data: {
      flex: 4,
      backgroundColor: 'white', //putih kehijauan
      //flexDirection: 'row',
      bordeRadius: 20,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
    },
  footer: {
    flex: 1,
    backgroundColor: '#004D40', //hijau tua
    //margin: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
  containerInput: {
    flex: 1,
    backgroundColor: '#FFCDD2', //merah muda
    marginBottom: 10,
    marginLeft: 35,
    marginRight: 40,
    padding: 25, //mengatur batas jarak dalam antara content dengan boc dalam
  },
  text: {
    textAlign: 'center', color: '#212121', fontWeight: 'bold', fontSize: 20

  }
});
