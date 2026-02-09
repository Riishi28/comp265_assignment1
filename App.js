import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image,
  ScrollView,
  StyleSheet, 
  StatusBar, 
  TextInput, 
  Button, 
  Switch,
  TouchableOpacity 
} from 'react-native';
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

  // Toggle like on a post
  const toggleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    );
  };

  const clearSearch = () => {
    setSearchText('');
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const backgroundColor = darkMode ? '#1a1a1a' : '#f5f5f5';
  const cardBackground = darkMode ? '#2d2d2d' : '#ffffff';
  const textColor = darkMode ? '#ffffff' : '#000000';
  const subTextColor = darkMode ? '#b0b0b0' : '#666666';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={[styles.logo, { color: textColor }]}>TechFeed</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color={textColor} />
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#d1d1d1', true: '#4cd964' }}
            thumbColor="#ffffff"
          />
        </View>
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchContainer}>
        <TextInput
          style={[styles.searchInput, { backgroundColor: cardBackground, color: textColor }]}
          placeholder="Search tech news.."
          placeholderTextColor={subTextColor}
          value={searchText}
          onChangeText={setSearchText}
        />
       <View style={styles.buttonWrapper}>
    <Button title="Clear" onPress={clearSearch} color="#54d9dd" />
      </View>
      </View>

      {/* SCROLLVIEW WITH POSTS */}
      <ScrollView 
        style={styles.feed} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.feedContent}
      >
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <View key={post.id} style={[styles.card, { backgroundColor: cardBackground }]}>
              {/* Card Header */}
              <View style={styles.cardHeader}>
                <View style={styles.sourceInfo}>
                  <View style={[styles.sourceAvatar, { backgroundColor: post.sourceColor }]}>
                    <Text style={styles.sourceAvatarText}>{post.sourceInitial}</Text>
                  </View>
                  <Text style={[styles.sourceName, { color: textColor }]}>{post.source}</Text>
                </View>
                <Ionicons name="ellipsis-horizontal" size={20} color={subTextColor} />
              </View>

              {/* Image */}
              <Image 
                source={post.image} 
                style={styles.postImage} 
                resizeMode="cover" 
              />

              {/* Actions */}
              <View style={styles.actions}>
                <TouchableOpacity onPress={() => toggleLike(post.id)} style={styles.actionButton}>
                  <Ionicons
                    name={post.liked ? 'heart' : 'heart-outline'}
                    size={26}
                    color={post.liked ? '#ff3b30' : textColor}
                  />
                  <Text style={[styles.likeCount, { color: textColor }]}>{post.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons name="chatbubble-outline" size={24} color={textColor} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons name="share-outline" size={24} color={textColor} />
                </TouchableOpacity>
              </View>

              {/* Caption */}
              <View style={styles.caption}>
                <Text style={[styles.captionText, { color: textColor }]}>{post.title}</Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={[styles.emptyText, { color: subTextColor }]}>
              {`No posts found matching "${searchText}"`}
            </Text>
          </View>
        )}
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <View style={[styles.bottomNav, { backgroundColor: cardBackground }]}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={28} color="#007AFF" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="compass-outline" size={28} color={subTextColor} />
          <Text style={[styles.navLabel, { color: subTextColor }]}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={28} color={subTextColor} />
          <Text style={[styles.navLabel, { color: subTextColor }]}>Profile</Text>
        </TouchableOpacity>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  buttonWrapper: {
  borderRadius: 20,
  overflow: 'hidden',
  width: 70,
},
  feed: {
    flex: 1,
  },
  feedContent: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  card: {
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  sourceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  sourceAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sourceAvatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sourceName: {
    fontSize: 16,
    fontWeight: '600',
  },
  postImage: {
    width: '100%',
    height: 250,
  },
  actions: {
    flexDirection: 'row',
    padding: 12,
    gap: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  likeCount: {
    fontSize: 14,
    fontWeight: '600',
  },
  caption: {
    padding: 12,
    paddingTop: 0,
  },
  captionText: {
    fontSize: 15,
    lineHeight: 20,
  },
  emptyState: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
    gap: 4,
  },
  navLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#007AFF',
  },
});