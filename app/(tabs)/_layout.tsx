import { Tabs } from "expo-router"
import React from "react"
import { Colors } from "@/constants/Colors"
import { Entypo, Feather } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, View } from "react-native"

export default function TabLayout() {
	return (
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
	)
}
