import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const SignUp = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  return (
    <View>
      <Text style={styles.header}>SignUp</Text>
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
      <TextInput
        style={styles.TextInput}
        placeholder="confirm password"
        onChangeText={newText => setConfPassword(newText)}
        defaultValue={confPassword}
      />
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>
        navigation.navigate('Login', { name: 'Jane' })
      }>
        <Text>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
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
  }
});