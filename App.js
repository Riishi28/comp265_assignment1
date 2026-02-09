import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

// Sample tech news data
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

  return (
    <View style={styles.container}>
      {/* Components will be added in next steps */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
