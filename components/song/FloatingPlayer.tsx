import React, { useEffect } from "react"
import { View, Pressable, Image, StyleSheet, Dimensions } from "react-native"
import { Feather } from "@expo/vector-icons"
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
} from "react-native-reanimated"
import { useFloatingViewStore } from "@/store/floatingTrackViewStore"
import { useSongStore } from "@/store/songStore"
import { Colors } from "@/constants/Colors"
import songsImages from "@/constants/songImages"

const { height } = Dimensions.get("screen")

const FloatingPlayer = () => {
	const { isVisible, hide } = useFloatingViewStore()
	const { currentSong } = useSongStore()

	const isExpanded = useSharedValue(0)

	useEffect(() => {
		if (isVisible) {
			isExpanded.value = 1
		} else {
			isExpanded.value = withTiming(0, { duration: 1200 })
		}
	})
	const onShrink = () => {
		hide()
	}

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [
			{
				translateY:
					isExpanded.value === 1
						? withTiming(0, { duration: 400 })
						: withTiming(height, { duration: 400 }),
			},
		],
		pointerEvents: isExpanded.value > 0 ? "auto" : "none",
	}))

	return (
		<Animated.View style={[styles.animatedOverlay, animatedStyle]}>
			<View
				style={{
					justifyContent: "flex-start",
					width: "100%",
				}}
			>
				<Pressable onPress={onShrink} style={styles.shrinkButton}>
					<Feather name="chevron-down" size={24} color={"#fff"} />
				</Pressable>
			</View>

			<View className="flex-1">
				<View style={{ flex: 1, paddingTop: 50 }}>
					<Image
						source={
							songsImages[
								currentSong
									? currentSong?.id - 1
									: songsImages[0]
							]
						}
						resizeMode="cover"
						style={[
							{
								width: 300,
								height: 300,

								borderRadius: 8,
							},
						]}
					/>
				</View>
			</View>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	animatedOverlay: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: Colors.darkgrey,
		alignItems: "center",
		paddingTop: 40,
		zIndex: 9999,
	},
	shrinkButton: {
		padding: 10,
	},
	imageContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	songImage: {
		width: 100,
		height: 100,
		borderColor: "#fff",
		borderWidth: 1,
		borderRadius: 8,
	},
	songImageMini: {
		width: 50,
		height: 50,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#fff",
	},
	floatingView: {
		position: "absolute",
		bottom: 68,
		left: 6,
		right: 6,
		backgroundColor: Colors.darkgrey,
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
	},
})

export default FloatingPlayer
