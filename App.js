import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TECH_NEWS = [
  {
    id: 1,
    title: 'Historic moment as SpaceX Starship completes first successful landing on Mars, paving the way for human colonization.',
    source: 'Space.com',
    sourceInitial: 'S',
    sourceColor: '#e74c3c',
    image: require('./assets/moon.jpg'),
    likes: 0,
    liked: false,
  },
  {
    id: 2,
    title: 'Elon Musk reveals the latest Optimus robot with artificial general intelligence capabilities and human-like dexterity.',
    source: 'Wired',
    sourceInitial: 'W',
    sourceColor: '#3498db',
    image: require('./assets/robot.jpg'),
    likes: 0,
    liked: false,
  },
];

export default function App() {
  const [posts, setPosts] = useState(TECH_NEWS);
  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState('');

  const backgroundColor = darkMode ? '#1a1a1a' : '#f5f5f5';
  const textColor = darkMode ? '#ffffff' : '#000000';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={[styles.logo, { color: textColor }]}>TechFeed</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color={textColor} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 12,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});
