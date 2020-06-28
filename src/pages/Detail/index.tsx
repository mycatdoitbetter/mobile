import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Feather as Icon } from "@expo/vector-icons";

const Detail: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="arrow-left" size={20} color="#34cb79" />
      </TouchableOpacity>
    </View>
  );
};

export default Detail;
