import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f5ee',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  vazio: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 40,
    fontSize: 16,
  },
  list: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  mesa: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itens: {
    marginTop: 4,
    fontSize: 14,
    color: '#333',
  },
  status: {
    marginTop: 6,
    fontWeight: '600',
  },
  preparo: {
    color: '#f39c12',
  },
  finalizado: {
    color: '#27ae60',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#00695c',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  clearFooter: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#c62828',
  padding: 18,
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
},

clearFooterText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},

fab: {
  position: 'absolute',
  right: 20,
  bottom: 80, // espaço acima do botão de limpar
  backgroundColor: '#00695c',
  width: 60,
  height: 60,
  borderRadius: 30,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 5,
},

});
