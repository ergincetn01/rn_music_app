import { View, Text, Pressable, StyleSheet, Image } from "react-native"
import React from "react"
import { useSongStore } from "@/store/songStore"
import { useFloatingViewStore } from "@/store/floatingTrackViewStore"
import { Colors } from "@/constants/Colors"
import songsImages from "@/constants/songImages"

const CurrentTrackCard = () => {
	const { currentSong } = useSongStore()
	const { show } = useFloatingViewStore()
	return (
		<>
			{currentSong ? (
				<Pressable onPress={show} style={styles.floatingView}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							columnGap: 16,
						}}
					>
						<Image
							style={{ height: 48, width: 48 }}
							source={
								songsImages[
									currentSong
										? currentSong?.id - 1
										: songsImages[0]
								]
							}
						/>
						<View className="items-start gap-y-1">
							<Text className="text-white text-lg">
								{currentSong?.title}
							</Text>
							<Text className="text-gray-400">
								{currentSong?.artist}
							</Text>
						</View>
					</View>
				</Pressable>
			) : (
				<></>
			)}
		</>
	)
}

const styles = StyleSheet.create({
	floatingView: {
		position: "absolute",
		bottom: 68,
		left: 6,
		right: 6,
		backgroundColor: Colors.darkgrey,
		padding: 10,
		borderRadius: 10,
	},
})

export default CurrentTrackCard
