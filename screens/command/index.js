import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';

export default function CommandScreen({ navigation }) {
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    const carregarPedidos = async () => {
      try {
        const pedidosSalvos = await AsyncStorage.getItem('@pedidos');
        if (pedidosSalvos !== null) {
          setCommands(JSON.parse(pedidosSalvos));
        }
      } catch (error) {
        console.error('Erro ao carregar pedidos:', error);
      }
    };

    carregarPedidos();
  }, []);

  useEffect(() => {
    const salvarPedidos = async () => {
      try {
        await AsyncStorage.setItem('@pedidos', JSON.stringify(commands));
      } catch (error) {
        console.error('Erro ao salvar pedidos:', error);
      }
    };

    salvarPedidos();
  }, [commands]);

  const adicionarComando = (novoPedido) => {
    setCommands([
      ...commands,
      { ...novoPedido, id: Date.now().toString(), status: 'Em preparo' },
    ]);
  };

  const confirmarFinalizacao = (pedido) => {
    if (pedido.status === 'Finalizado') return;

    Alert.alert(
      'Finalizar pedido',
      `Gostaria de finalizar o pedido de ${pedido.cliente}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Finalizar',
          style: 'default',
          onPress: () => finalizarPedido(pedido.id),
        },
      ]
    );
  };

  const finalizarPedido = (id) => {
    setCommands((prev) =>
      prev.map((cmd) =>
        cmd.id === id ? { ...cmd, status: 'Finalizado' } : cmd
      )
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
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('@pedidos');
              setCommands([]);
            } catch (error) {
              console.error('Erro ao limpar pedidos:', error);
            }
          },
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
