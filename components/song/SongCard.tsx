import { Colors } from "@/constants/Colors"
import songImages from "@/constants/songImages"
// import { SongContext } from "@/context/songContext"
import { SongItem } from "@/model/song/songTypes"
import { useSongStore } from "@/store/songStore"
import { Entypo } from "@expo/vector-icons"
import { FC, useContext, useState } from "react"
import {
	Image,
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
	View,
} from "react-native"

interface RenderSongProps extends PressableProps {
	item: SongItem
	onFavoritePress: () => void
}

const RenderSong: FC<RenderSongProps> = ({
	item,
	onFavoritePress,
	...pressableProps
}) => {
	const { isFavorite } = useSongStore()
	const durationMins = Math.floor(item.duration / 60).toString()
	const durationSecs = (item.duration % 60).toString().padStart(2, "0")

	const [isPressed, setIsPressed] = useState(false)

	return (
		<Pressable
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
			{...pressableProps}
			style={[
				styles.songitem,
				{
					backgroundColor: isPressed
						? Colors.coolgrey
						: "transparent",
					opacity: isPressed ? 0.4 : 1,
				},
			]}
		>
			<View
				style={{
					flexDirection: "row",
					columnGap: 10,
				}}
			>
				<Image
					source={songImages[item.id - 1]}
					resizeMode="cover"
					style={{
						width: 50,
						height: 50,
						borderColor: "#fff",
						borderWidth: 1,
						borderRadius: 8,
					}}
				/>
				<View className="justify-between flex-col">
					<Text className="text-white text-lg">{item.title}</Text>
					<Text className="text-md text-[rgb(200,200,200)]">
						{item.artist}
					</Text>
				</View>
			</View>

			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					columnGap: 16,
				}}
			>
				<Pressable className="py-2 px-2" onPress={onFavoritePress}>
					<Entypo
						name={isFavorite(item) ? "heart" : "heart-outlined"}
						size={24}
						color={isFavorite(item) ? "#fff" : Colors.granite}
					/>
				</Pressable>

				<Text className="text-md text-gray-400">
					{durationMins}:{durationSecs}
				</Text>
			</View>
		</Pressable>
	)
}

export default RenderSong

const styles = StyleSheet.create({
	songitem: {
		paddingLeft: 6,
		paddingRight: 10,
		paddingVertical: 6,
		borderColor: "#404040",
		borderRadius: 10,
		borderWidth: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
})
