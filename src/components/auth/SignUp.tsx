import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../styles/main';

const SignUp = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
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
      <TextInput
        style={styles.TextInput}
        placeholder="Confirm Password"
        onChangeText={newText => setConfPassword(newText)}
        defaultValue={confPassword}
      />
      <TouchableOpacity style={styles.Button}>
        <Text>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>
        navigation.navigate('Login')
      }>
        <Text>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUp;
