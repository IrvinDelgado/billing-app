import { StyleSheet } from 'react-native';
import { TextInput, Button } from './common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    paddingBottom: 10,
  },
  TextInput: {
    ...TextInput,
  },
  Button: {
    ...Button,
    alignItems:"center",
    justifyContent:"center",
  },
});
