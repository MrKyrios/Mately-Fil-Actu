import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, icons } from "../constants";
import postsData from "../data/postsData";
import Icon from "react-native-vector-icons/FontAwesome"; // Assurez-vous d'importer la bibliothèque d'icônes

const PostItem = ({ post, onEdit, onDelete }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: SIZES.medium,
      backgroundColor: COLORS.white,
      marginBottom: SIZES.small,
      borderRadius: SIZES.small,
      borderWidth: 1,
      borderColor: COLORS.gray,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    }}
  >
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: SIZES.medium, fontWeight: "bold" }}>
        {post.title}
      </Text>
      <Text style={{ fontSize: SIZES.small }}>{post.message}</Text>
    </View>
    <Image
      source={post.image}
      style={{ width: 50, height: 50, marginLeft: SIZES.small }}
      resizeMode="cover"
    />
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity onPress={() => onEdit(post.id)}>
        <Text style={{ color: COLORS.primary, marginLeft: SIZES.small }}>
          Edit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onDelete(post.id)}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: SIZES.small,
          backgroundColor: COLORS.danger,
          padding: SIZES.small,
          borderRadius: SIZES.small,
        }}
      >
        <Icon name="trash" size={20} color={COLORS.white} />
        <Text style={{ color: COLORS.primary, marginLeft: SIZES.small }}>
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Home = () => {
  const router = useRouter();
  const [posts, setPosts] = useState(postsData);

  const handleAddPost = () => {
    router.push("/createPost");
  };

  const handleEditPost = (postId) => {
    console.log(`Edit post ${postId}`);
  };

  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ADD8E6" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ADD8E6" },
          headerShadowVisible: false,
          headerTitle: "Fil d'actualité",
          headerTitleAlign: "left",
          headerTitleStyle: { fontSize: SIZES.large, fontWeight: "bold" },
        }}
      />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostItem
            post={item}
            onEdit={handleEditPost}
            onDelete={handleDeletePost}
          />
        )}
        contentContainerStyle={{ padding: SIZES.medium }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: SIZES.medium,
          right: SIZES.medium,
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: COLORS.primary,
          justifyContent: "center",
          alignItems: "center",
          elevation: 4,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
        onPress={handleAddPost}
      >
        <Image
          source={icons.plus}
          style={{ width: 24, height: 24, tintColor: COLORS.white }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
