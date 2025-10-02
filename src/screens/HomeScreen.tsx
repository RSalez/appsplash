import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import api from '../services/api';
import { GeoData } from '../types/GeoData';

export default function HomeScreen() {
  const [geo, setGeo] = useState<GeoData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const response = await api.get<GeoData>('/161.185.160.93/geo');
        setGeo(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados geográficos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGeoData();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (!geo) {
    return (
      <View style={styles.centered}>
        <Text>Erro ao carregar dados.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>IP: <Text style={styles.value}>{geo.ip}</Text></Text>
      <Text style={styles.label}>Cidade: <Text style={styles.value}>{geo.city}</Text></Text>
      <Text style={styles.label}>Região: <Text style={styles.value}>{geo.region}</Text></Text>
      <Text style={styles.label}>País: <Text style={styles.value}>{geo.country}</Text></Text>
      <Text style={styles.label}>Localização: <Text style={styles.value}>{geo.loc}</Text></Text>
      <Text style={styles.label}>Organização: <Text style={styles.value}>{geo.org}</Text></Text>
      <Text style={styles.label}>CEP: <Text style={styles.value}>{geo.postal}</Text></Text>
      <Text style={styles.label}>Fuso horário: <Text style={styles.value}>{geo.timezone}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    marginTop: 15,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  value: {
    fontWeight: 'normal',
  },
});