import React, { useState } from "react";
import { TextInput, Button, Text, SafeAreaView } from "react-native";
import { COLORS, SIZES } from "../constants";
import postsData from "../data/postsData";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [allPosts, setAllPosts] = useState(postsData);

  const handleSubmit = () => {
    console.log("Titre:", title);
    console.log("Message:", message);

    const newPost = {
      id: Date.now().toString(),
      title: title,
      message: message,
      image: require("../assets/images/placeholder.png"),
    };

    setAllPosts((prevPosts) => [...prevPosts, newPost]);

    setTitle("");
    setMessage("");
  };

  return (
    <SafeAreaView
      style={{ flex: 1, padding: SIZES.medium, backgroundColor: "#ADD8E6" }}
    >
      <Text
        style={{
          fontSize: SIZES.large,
          fontWeight: "bold",
          marginBottom: SIZES.medium,
        }}
      >
        Créer un nouveau post
      </Text>
      <TextInput
        placeholder="Titre"
        style={{
          backgroundColor: COLORS.white,
          padding: SIZES.small,
          marginBottom: SIZES.small,
          borderRadius: SIZES.small,
        }}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Message"
        style={{
          backgroundColor: COLORS.white,
          padding: SIZES.small,
          marginBottom: SIZES.small,
          borderRadius: SIZES.small,
          height: 100,
          textAlignVertical: "top",
        }}
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <Button title="Ajouter" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default CreatePost;
