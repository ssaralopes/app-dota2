// screens/HeroDetailsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function HeroDetails({ route }) {
  const { hero } = route.params;
  const baseUrl = 'https://cdn.cloudflare.steamstatic.com';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image 
          source={{ uri: `${baseUrl}${hero.img}` }}
          style={styles.avatar} 
          resizeMode="contain"
        />
        <Text style={styles.name}>{hero.localized_name}</Text>
        <Text style={styles.primaryAttr}>Atributo Primário: {hero.primary_attr}</Text>
        <Text style={styles.attackType}>Tipo de Ataque: {hero.attack_type}</Text>
        <Text style={styles.additionalInfo}>Papel(s): {hero.roles.join(', ')}</Text>
        <Text style={styles.additionalInfo}>Saúde Base: {hero.base_health}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0d0d0d', // Fundo escuro, igual ao seu projeto
    flexGrow: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#6a0202', // Fundo vermelho escuro do card
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#ff0000', // Sombra sutil
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 400,
    elevation: 10, // sombra no Android
  },
  avatar: {
    width: 300,
    height: 300,
    marginBottom: 15,
    // adicionar uma sombra como se fosse mágico
    boxshadowColor: '#350000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 15, // para Android


  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff2f2f',
    marginBottom: 10,
  },
  primaryAttr: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 6,
  },
  attackType: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 6,
  },
  additionalInfo: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 6,
  },
});

