import React from 'react';
import {Text, View, Image, Touchable, TouchableOpacity, TextComponent} from 'react-native';
import { style } from './styles';
import Logo from '../assets/logo_comanda_2.png'

export default function Comanda() {
    return(
      <View style={style.container}>
          <View style={style.box_logo}>
            <Image source = {Logo} style={style.logo}/>
            <Text style={style.text_logo}>Bem vindo de volta!</Text>
          </View>

          <View style={style.box_button}>
            <TouchableOpacity style={style.button}>
              <Text style={style.text_button}>Acessar pedidos</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}