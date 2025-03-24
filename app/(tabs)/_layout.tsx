import CurrentTrackCard from "@/components/song/CurrentTrackCard"
import FloatingTrackView from "@/components/song/FloatingPlayer"
import { Colors } from "@/constants/Colors"
import songsImages from "@/constants/songImages"
import { useFloatingViewStore } from "@/store/floatingTrackViewStore"
import { useSongStore } from "@/store/songStore"
import { Entypo, Feather } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { Tabs } from "expo-router"
import { StatusBar } from "expo-status-bar"
import React from "react"
import {
	Pressable,
	Text,
	View,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	SafeAreaView,
	Image,
} from "react-native"
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
} from "react-native-reanimated"
const { width, height } = Dimensions.get("screen")

const TabsLayout = () => {
	const { isVisible, hide, show } = useFloatingViewStore()

	const { currentSong } = useSongStore()

	const isExpanded = useSharedValue(0)

	const expand = () => {
		isExpanded.value = withTiming(1, { duration: 300 })
	}

	const shrink = () => {
		isExpanded.value = withTiming(0, { duration: 300 })
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

	// const animatedImageStyle = useAnimatedStyle(() => ({
	// 	opacity: 1,
	// 	height:
	// 		isExpanded.value === 1
	// 			? withTiming(200, { duration: 300 })
	// 			: withTiming(10, { duration: 300 }),
	// 	width:
	// 		isExpanded.value === 1
	// 			? withTiming(200, { duration: 300 })
	// 			: withTiming(10, { duration: 300 }),

	// 	transform: [
	// 		{
	// 			scale:
	// 				isExpanded.value === 1
	// 					? withTiming(1, { duration: 300 })
	// 					: withTiming(0, { duration: 300 }),
	// 		},
	// 	],
	// }))

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="light" translucent={true} />
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: Colors.tintColorActive,
					headerShown: false,
					tabBarInactiveTintColor: "#B0B0B0",
					tabBarStyle: {
						height: 60,
						overflow: "hidden",
						borderTopRightRadius: 16,
						borderTopLeftRadius: 16,
						position: "absolute",
						borderTopWidth: 0,
						paddingTop: 2,
						borderBottomLeftRadius: 16,
						borderBottomRightRadius: 16,
						marginBottom: 8,
						marginHorizontal: 6,
					},
					tabBarLabelStyle: {
						marginTop: 4,
						fontSize: 12,
					},
					animation: "fade",
					tabBarBackground: () => (
						<View
							style={{
								height: 100,
								width: "100%",
								backgroundColor: "black",
							}}
						>
							<LinearGradient
								colors={[Colors.granite, Colors.onyx]}
								style={StyleSheet.absoluteFillObject}
							/>
						</View>
					),
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: "All songs",
						tabBarIcon: ({ color }) => (
							<Feather name="music" color={color} size={28} />
						),
					}}
				/>
				<Tabs.Screen
					name="playlists"
					options={{
						title: "Playlists",
						tabBarIcon: ({ color }) => (
							<Feather name="list" color={color} size={28} />
						),
					}}
				/>
				<Tabs.Screen
					name="favorites"
					options={{
						title: "Favorites",
						tabBarIcon: ({ color, focused }) => (
							<Entypo
								name={focused ? "heart" : "heart-outlined"}
								color={color}
								size={28}
							/>
						),
					}}
				/>
			</Tabs>
			<FloatingTrackView />
			{/* {currentSong ? (
				<Pressable onPress={show} style={styles.floatingView}>
					<Text style={styles.text}>{currentSong?.title}</Text>
				</Pressable>
			) : (
				<></>
			)} */}
			<CurrentTrackCard />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1 },
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
	text: {
		color: "#fff",
		fontSize: 16,
	},
	closeButton: {
		position: "absolute",
		top: 5,
		right: 10,
	},
	closeText: {
		color: "#fff",
		fontSize: 18,
	},
	animatedOverlay: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: Colors.darkgrey,
		alignItems: "center",
		paddingTop: 32,
		zIndex: 9999,
	},
	shrinkButton: {
		padding: 10,
		borderRadius: 5,
	},
	tabBarStyle: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		height: 60,
		backgroundColor: "rgba(0, 0, 0, 0.8)",
		borderRadius: 16,
	},
})

export default TabsLayout
