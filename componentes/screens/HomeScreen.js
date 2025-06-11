// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import DotaLogo from '../img/image.png';

export default function HomeScreen({ navigation }) {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.opendota.com/api/heroStats')
      .then(res => res.json())
      .then(data => setHeroes(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      {/* Logo do Dota */}
      <View style={styles.logoContainer}>
           <Image source={DotaLogo} style={styles.logo} resizeMode="contain" />
      </View>

      <View style={styles.descriptionContainer}>
           <Text style={styles.descriptionTextTitle}>
                Portal dos Heróis do Universo de Dota 2
           </Text>
           <Text style={styles.descriptionText}>
                Aqui, os poderes lendários do Dota 2 ganham vida em dados puros e precisos.
                Explore o vasto universo dos campeões, descubra seus poderes ocultos e prepare-se 
                para dominar batalhas épicas.
           </Text>
           <Text style={styles.descriptionTextFinal}>
                Um lugar onde a Magia e a Fantasia encontram a precisão da Tecnologia.
           </Text>

      </View>


      {/* Lista de heróis */}
      <FlatList
        data={heroes}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Details', { hero: item })}
          >
            <Text style={styles.text}>{item.localized_name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212', // fundo preto quase puro para destacar as cores
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },

  logo: {
    width: 240,         // Tamanho base
    height: 240,        // Altura igual à largura
    borderRadius: 120,   // Metade da largura/altura para deixá-la redonda
    opacity: 0.9,
    borderWidth: 2,     // borda ao redor
    borderColor: '#ff4d4d', // 🔴 borda vermelha mais vibrante
    // 🔴 Sombra para iOS
    shadowColor: '#ff1a1a',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 30,
    // 🔴 Sombra para Android
    elevation: 20,
    backgroundColor: 'white', // Necessário para sombra aparecer no Android
  },

  descriptionContainer: {
    marginVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
  },


  descriptionTextTitle: {
    color: '#be3223',
    fontSize: 24,
    textAlign: 'center',
    slineHeight: 22,
    fontWeight: '500',
    marginBottom: 5,
  },

  descriptionText: {
    color: '#979696',
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 3,
  },

  descriptionTextFinal: {
    color: '#dbdbdb',
    fontSize: 11,
    fontStyle: 'italic',
    textAlign: 'center',
    slineHeight: 15,
    fontWeight: '500',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  item: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    marginBottom: 12,
    marginHorizontal: 20,
    backgroundColor: '#d92525', // 🔴 vermelho muito escuro, quase preto
    borderWidth: 1,
    borderColor: '#ff4d4d', // 🔴 borda vermelha mais vibrante
    shadowColor: '#ff1a1a', // 🔴 leve brilho vermelho
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
    alignItems: 'center',
  },

  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 1,
  }


});