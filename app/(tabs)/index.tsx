import { StatusBar } from "expo-status-bar"
import "../../global.css"
import { View, Text, TextInput, FlatList, Alert } from "react-native"
import FullScreenWrapper from "@/components/wrapper/fullscreenwrapper"
import KeyboardAvoidingScrollView from "@/components/keyboardavoidingview"
import { useContext, useMemo, useState } from "react"
import Entypo from "@expo/vector-icons/Entypo"
import RenderSong from "@/components/song/SongCard"
import { songsData } from "@/constants/songData"
import { SongItem } from "@/model/song/songTypes"
import { handleLongPress, handlePress } from "@/utils/songUtils"
import { SongContext } from "@/context/songContext"

export default function AllSongs() {
	const [searchTerm, setSearchTerm] = useState<string>("")
	const { addFavorite, isFavorite, removeFavorite } = useContext(SongContext)

	const handleFavoritePress = (song: SongItem) => {
		if (isFavorite(song)) {
			removeFavorite(song)
		} else {
			addFavorite(song)
		}
	}

	const filteredSongs = useMemo(
		() =>
			songsData.filter((item) =>
				item.title.toLowerCase().includes(searchTerm.toLowerCase())
			),
		[songsData, searchTerm]
	)

	const resetSearch = () => {
		setSearchTerm("")
	}

	return (
		<FullScreenWrapper>
			<KeyboardAvoidingScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ flexGrow: 1 }}
				scrollEnabled={false}
			>
				<View className="px-6 pt-10">
					<Text className="text-white text-3xl">All Songs</Text>
					<View
						style={{
							borderRadius: 12,
							borderWidth: 1,
							borderColor: "#484848",
							marginTop: 12,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							paddingVertical: 2,
							paddingHorizontal: 8,
						}}
					>
						<TextInput
							value={searchTerm}
							onChangeText={(text) => setSearchTerm(text)}
							autoCapitalize="none"
							autoCorrect={false}
							style={{ color: "#fff" }}
							placeholder="Search"
							numberOfLines={1}
							className="w-80"
							placeholderTextColor={"white"}
						/>
						{searchTerm.length > 0 ? (
							<Entypo
								onPress={resetSearch}
								name="cross"
								size={24}
								color="white"
							/>
						) : (
							<></>
						)}
					</View>
					<FlatList
						contentContainerStyle={{ rowGap: 8, marginTop: 20 }}
						renderItem={({ item }) => (
							<RenderSong
								onFavoritePress={() =>
									handleFavoritePress(item)
								}
								item={item}
								onLongPress={() => handleLongPress(item)}
							/>
						)}
						keyExtractor={(item) => item.id.toString()}
						data={filteredSongs}
					/>
				</View>
			</KeyboardAvoidingScrollView>
			<StatusBar style="light" />
		</FullScreenWrapper>
	)
}
