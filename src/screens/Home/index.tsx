import { useState, useEffect } from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Background } from "../../components/Background";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame(props: GameCardProps) {
    navigation.navigate("game", props);
  }

  useEffect(() => {
    fetch("http://192.168.0.17:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo}></Image>

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        ></Heading>

        <FlatList
          contentContainerStyle={styles.contentList}
          data={games}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <GameCard data={item} onPress={() => handleOpenGame(item)} />
            );
          }}
        />
      </SafeAreaView>
    </Background>
  );
}
