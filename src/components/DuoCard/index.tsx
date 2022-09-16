import { Text, TouchableOpacity, View } from "react-native";
import { GameController } from "phosphor-react-native";

import { THEME } from "../../theme";
import { DuoInfo } from "../DuoInfo";

import { styles } from "./styles";

export interface DuoCardProps {
  hourEnd: string;
  hourStart: string;
  id: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name}></DuoInfo>
      <DuoInfo
        label="Tempo de jogo"
        value={`${data.yearsPlaying} anos`}
      ></DuoInfo>
      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      ></DuoInfo>
      <DuoInfo
        label="Chamada de áudio?"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      ></DuoInfo>

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20}></GameController>
        <Text style={styles.buttonText}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
