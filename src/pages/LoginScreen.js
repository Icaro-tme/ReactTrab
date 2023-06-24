import React, { useContext } from 'react';
import { Link } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';
import AuthContext from '../contexts/AuthContext';

const LoginScreen = ({ navigation }) => {
      const {signIn} = useContext(AuthContext); 
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.flex}>
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        onChangeText={text => setUsername(text)}
        defaultValue={username}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        onChangeText={text => setPassword(text)}
        defaultValue={password}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>

        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
          <Button title="Submit" onPress={() => signIn()} />
          <View>
            <Link to={{ screen: 'SignUp' }} style={styles.links}>Register</Link>
            <Link to={{ screen: 'ForgotPassword' }} style={styles.links}>Forgot Password</Link>
          </View>
      </View>
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
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default LoginScreen;
