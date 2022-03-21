import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../styles/main';

const SignUp = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const validate = () => {
    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if(!emailRegExp.test(email)) {
      setErrMsg('Wrong Email pattern eg. email@gmail.com');
      return
    }
    if(password.length<8) {
      setErrMsg('Password Needs to be at least 8 characters');
      return
    }
    if(password != confPassword) {
      setErrMsg('Confirmed password not the same');
      return
    }
    navigation.navigate('Login');
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
      <TextInput
        style={styles.TextInput}
        placeholder="Confirm Password"
        onChangeText={newText => setConfPassword(newText)}
        defaultValue={confPassword}
      />
      {errMsg===''? null :<Text style={styles.validateCredentials}>{errMsg}</Text>}
      <TouchableOpacity style={styles.Button} onPress={()=>{validate()}}>
        <Text style={styles.ButtonText}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>
        navigation.navigate('Login')
      }>
        <Text style={styles.authOption}>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUp;
