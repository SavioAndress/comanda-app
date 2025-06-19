import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f5ee',
    paddingTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  input: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  option: {
    marginHorizontal: 20,
    padding: 12,
    marginTop: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  optionSelected: {
    backgroundColor: '#b2dfdb',
  },
  optionText: {
    fontSize: 16,
  },
  button: {
    marginTop: 30,
    marginEnd: 10,
    marginHorizontal: 20,
    backgroundColor: '#00695c',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
