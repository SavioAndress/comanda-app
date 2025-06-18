import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { style } from './styles';
import Logo from './../../assets/logo_comanda_2.png';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ButtonRoutes from '../../routes/button.routes';

export default function Comanda() {
  const navigation = useNavigation()

  return (
    <View style={style.container}>
      <View style={style.box_logo}>
        <Image source={Logo} style={style.logo} />
        <Text style={style.text_logo}>Bem-vindo de volta!</Text>
      </View>

      <View style={style.box_button}>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate('Home')} // Certifique-se de que "home" é o nome da tela no Stack.Navigator
        >
          <Text style={style.text_button}>Acessar pedidos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
