import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../components/Button';

function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* User Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // URL gambar placeholder, bisa diganti dengan gambar profil pengguna
          style={styles.avatar}
        />
      </View>
      {/* User Information */}
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>johndoe@example.com</Text>

      {/* Settings Buttons */}
      <View style={styles.buttonContainer}>
        <Button
        onPress={() => navigation.navigate('SignIn')}
        color="#5CB85F"
        title="Sign In"
        style={styles.button}
        />
        <Button
        onPress={() => navigation.navigate('SignUp')}
        color="#5CB85F"
        title="Sign Up"
        style={styles.button}
        />    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  avatarContainer: {
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 50,
    overflow: 'hidden',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#A43333',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
  }
});

export default ProfileScreen;
