import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../styles/main';

const Login = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.loginIcon} 
      source={require('../../../assets/bunnyLogo.png')}/>
      <TextInput
        style={styles.TextInput}
        placeholder="Email"
        onChangeText={newText => setEmail(newText)}
        defaultValue={email}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        onChangeText={newText => setPassword(newText)}
        defaultValue={password}
      />
      <TouchableOpacity style={styles.Button}
      onPress={login}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>
        navigation.navigate('SignUp')
      }>
        <Text>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
