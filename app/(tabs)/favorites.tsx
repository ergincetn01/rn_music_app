import { View, Text, FlatList } from "react-native"
import React, { useContext } from "react"
import FullScreenWrapper from "@/components/wrapper/fullscreenwrapper"
import RenderSong from "@/components/song/SongCard"
import KeyboardAvoidingScrollView from "@/components/keyboardavoidingview"
import { handleLongPress, handlePress } from "@/utils/songUtils"
import { SongContext } from "@/context/songContext"
import { SongItem } from "@/model/song/songTypes"

const Favorites = () => {
	const { addFavorite, favorites, isFavorite, removeFavorite } =
		useContext(SongContext)

	const handleFavoritePress = (song: SongItem) => {
		if (isFavorite(song)) {
			removeFavorite(song)
		} else {
			addFavorite(song)
		}
	}
	return (
		<FullScreenWrapper>
			<KeyboardAvoidingScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ flexGrow: 1 }}
				scrollEnabled={false}
			>
				<View className="px-6 pt-10">
					<Text className="text-white text-3xl">Favorites</Text>

					<FlatList
						contentContainerStyle={{ rowGap: 8, marginTop: 20 }}
						renderItem={({ item }) => (
							<RenderSong
								onFavoritePress={() =>
									handleFavoritePress(item)
								}
								item={item}
								onPress={() => handlePress(item)}
								onLongPress={() => handleLongPress(item)}
							/>
						)}
						keyExtractor={(item) => item.id.toString()}
						data={favorites}
					/>
				</View>
			</KeyboardAvoidingScrollView>
		</FullScreenWrapper>
	)
}

export default Favorites
