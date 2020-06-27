import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

import MapView from "react-native-maps";
import { SvgUri } from "react-native-svg";
import { Feather as Icon } from "@expo/vector-icons";
const Points: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <Text style={styles.title}>Bem vindo!</Text>
        <Text style={styles.description}>
          Encontre no mapa um ponto de coleta
        </Text>

        <View style={styles.mapContainer}>
          <MapView style={styles.map} />
        </View>
      </View>
      <View style={styles.itemsContainer}>
        <TouchableOpacity style={styles.item} onPress={() => {}}>
          <SvgUri
            height={42}
            width={42}
            uri="http://192.168.17.16:3333/uploads/lampadas.svg"
          />
          <Text style={styles.itemTitle}>Lâmpadas</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Points;
