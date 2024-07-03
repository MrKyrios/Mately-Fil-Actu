import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { COLORS, SIZES } from "../constants";

const CreatePost = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("Titre:", title);
    console.log("Message:", message);

    navigation.goBack();
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
