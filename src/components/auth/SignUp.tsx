import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/main';

const SignUp = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>SignUp</Text>
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
      <TouchableOpacity style={styles.Button}>
        <Text>SignUp</Text>
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
