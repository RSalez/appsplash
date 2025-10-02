import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Supondo que você esteja usando React Navigation para navegar entre telas
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Inicio');  // Nome da sua HomeScreen no navigator
    }, 3000); // 3000ms = 3 segundos

    // Cleanup para evitar memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
      {/* Aqui você pode colocar seu logo ou animação */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F6D7A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    color: 'white',
  },
});
