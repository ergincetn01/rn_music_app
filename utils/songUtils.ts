import { SongItem } from "@/model/song/songTypes"
import { Alert } from "react-native"

export const handlePress = (item: SongItem) => {
	Alert.alert("pressafsdffdssed", `${item.title}`)
}

export const handleLongPress = (item: SongItem) => {
	Alert.alert("Long preeeseeddd", `${item.title}`)
}
