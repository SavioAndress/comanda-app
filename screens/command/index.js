import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './style';
import { Alert } from 'react-native';


export default function CommandScreen({ navigation }) {
  const [commands, setCommands] = useState([]);

  const adicionarComando = (novoPedido) => {
    setCommands([...commands, { ...novoPedido, id: Date.now().toString() }]);
  };
  const confirmarFinalizacao = (pedido) => {
  if (pedido.status === 'Finalizado') return;

  Alert.alert(
    'Finalizar pedido',
    `Gostaria de finalizar o pedido de ${pedido.cliente}?`,
    [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Finalizar',
        onPress: () => finalizarPedido(pedido.id),
        style: 'default',
      },
    ]
  );
};

   const limparPedidos = () => {
    if (commands.length === 0) return;

    Alert.alert(
      'Deseja limpar todos os pedidos?',
      'Essa ação não pode ser desfeita.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Limpar',
          style: 'destructive',
          onPress: () => setCommands([]),
        },
      ]
    );
  };
  

  const renderItem = ({ item }) => (
  <TouchableOpacity
    onPress={() => confirmarFinalizacao(item)}
    activeOpacity={0.8}
  >
    <View style={styles.card}>
      <Text style={styles.mesa}>{item.cliente}</Text>
      <Text style={styles.itens}>{item.itens.join(', ')}</Text>
      <Text
        style={[
          styles.status,
          item.status === 'Finalizado' ? styles.finalizado : styles.preparo,
        ]}
      >
        {item.status}
      </Text>
    </View>
  </TouchableOpacity>
);


const finalizarPedido = (id) => {
  setCommands((prev) =>
    prev.map((cmd) =>
      cmd.id === id ? { ...cmd, status: 'Finalizado' } : cmd
    )
  );
};



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedidos</Text>

      {commands.length === 0 ? (
        <Text style={styles.vazio}>Nenhum pedido por enquanto.</Text>
      ) : (
        <FlatList
          data={commands}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      )}

      <TouchableOpacity
        style={styles.fab}
        onPress={() =>
          navigation.navigate('NewCommand', {
            onSave: adicionarComando,
          })
        }
      >
        <MaterialIcons name="add" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.clearFooter} onPress={limparPedidos}>
        <Text style={styles.clearFooterText}>Limpar todos os pedidos</Text>
      </TouchableOpacity>
    </View>
  );
}
