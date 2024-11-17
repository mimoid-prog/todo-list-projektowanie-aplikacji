import { Image, StyleSheet, Platform } from 'react-native';
import { useState, useEffect } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
 const [message, setMessage] = useState('');

 useEffect(() => {
  fetch('http://localhost:3006/')
   .then((response) => response.json())
   .then((data) => {
    console.log(data);
    setMessage(data.message);
   })
   .catch((error) => console.error('Error fetching data:', error));
 }, []);

 return (
  <ParallaxScrollView
   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
   headerImage={
    <Image
     source={require('@/assets/images/partial-react-logo.png')}
     style={styles.reactLogo}
    />
   }
  >
   <ThemedView style={styles.titleContainer}>
    <ThemedText type="title">
     {!message ? 'Pobieranie z serwera...' : message}
    </ThemedText>
    <HelloWave />
   </ThemedView>

   <ThemedView>
    <ThemedText type="defaultSemiBold">
     ^ Ten tekst został pobrany z backendu
    </ThemedText>
   </ThemedView>
  </ParallaxScrollView>
 );
}

const styles = StyleSheet.create({
 titleContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
 },
 stepContainer: {
  gap: 8,
  marginBottom: 8,
 },
 reactLogo: {
  height: 178,
  width: 290,
  bottom: 0,
  left: 0,
  position: 'absolute',
 },
});
