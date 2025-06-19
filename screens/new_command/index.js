import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './style';

const OPCOES = [
  'Opção do dia 1',
  'Opção do dia 2',
  'Refrigerante Lata',
  'Refrigerante 600ml',
  'Refrigerante 2L',
];

export default function NewCommandScreen({ navigation, route }) {
  const [nome, setNome] = useState('');
  const [selecionados, setSelecionados] = useState([]);

  const toggleItem = (item) => {
    setSelecionados((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const salvarPedido = () => {
    if (nome && selecionados.length > 0) {
      route.params.onSave({ cliente: nome, 
                            itens: selecionados,
                            status: 'Em preparo'});
      navigation.goBack();
    } else {
      alert('Preencha o nome e selecione pelo menos um item.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do cliente:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Selecione os itens:</Text>
      <FlatList
        data={OPCOES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.option, selecionados.includes(item) && styles.optionSelected]}
            onPress={() => toggleItem(item)}
          >
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={salvarPedido}>
        <Text style={styles.buttonText}>Adicionar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
}
