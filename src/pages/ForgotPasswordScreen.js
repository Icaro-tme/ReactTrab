import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [senha, setPassword] = React.useState('');

  return (
    <View style={styles.flex}>


    <View style={styles.container}>
      <Text style={styles.header}>Forgot Password</Text>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        onChangeText={text => setUsername(text)}
        defaultValue={username}
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        onChangeText={text => setPassword(text)}
        defaultValue={senha}
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
flex:{
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    },
    container: {
    margin:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 10,
    },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  label: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 10,
    color: '#888',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10,
    
  },
});

export default ForgotPasswordScreen;
