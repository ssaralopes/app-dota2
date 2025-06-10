// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

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
      <FlatList
        data={heroes}
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
    backgroundColor: '#1e1e1e' 
  },
  center:    { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  item:      { 
    padding: 12, 
    borderBottomWidth: 1, 
    borderColor: '#333' 
  },
  text:      { 
    fontSize: 16, 
    color: '#fff' 
  },

});
