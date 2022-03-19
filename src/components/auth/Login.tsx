import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Login = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="email"
        onChangeText={newText => setEmail(newText)}
        defaultValue={email}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="password"
        onChangeText={newText => setPassword(newText)}
        defaultValue={password}
      />
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>
        navigation.navigate('SignUp', { name: 'Jane' })
      }>
        <Text style={styles.signUp}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize: 30,
    paddingBottom: 10,
  },
  TextInput: {
    height: 30,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
  },
  loginBtn: {
   borderRadius:5,
   height: 50,
   alignItems:"center",
   justifyContent:"center",
   backgroundColor:"#5FF15F",
  },
  loginText: {
    fontWeight: 'bold',
  },
  signUp: {
    height: 30,
    marginTop: 30,
  },
});