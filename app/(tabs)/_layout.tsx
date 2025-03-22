import { Tabs } from "expo-router"
import React from "react"
import { Colors } from "@/constants/Colors"
import { Entypo, Feather } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useFloatingViewStore } from "@/store/floatingTrackViewStore"
import { useSongStore } from "@/store/songStore"

export default function TabLayout() {
	const { isVisible, hide } = useFloatingViewStore()

	const { currentSong } = useSongStore()

	return (
		<View style={{ flex: 1 }}>
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
			{isVisible && (
				<View style={styles.floatingView}>
					<Text style={styles.text}>{currentSong?.title}</Text>
					<TouchableOpacity onPress={hide} style={styles.closeButton}>
						<Text style={styles.closeText}>X</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	floatingView: {
		position: "absolute",
		bottom: 68,
		left: 6,
		right: 6,
		backgroundColor: "rgba(0,0,0,0.8)",
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
})
