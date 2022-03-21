import { StyleSheet } from 'react-native';
import { TextInput, Button } from './common';
import { theme } from './theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginIcon: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  headerText: {
    fontSize: 30,
    paddingBottom: 10,
  },
  TextInput: {
    ...TextInput,
    backgroundColor: theme.white,
  },
  Button: {
    ...Button,
    backgroundColor:theme.secondary,
    alignItems:"center",
    justifyContent:"center",
  },
});
