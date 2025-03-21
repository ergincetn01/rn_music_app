import { View, Text } from "react-native"
import React from "react"
import FullScreenWrapper from "@/components/wrapper/fullscreenwrapper"
import KeyboardAvoidingScrollView from "@/components/keyboardavoidingview"

const Playlists = () => {
	return (
		<FullScreenWrapper>
			<KeyboardAvoidingScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ flexGrow: 1 }}
				scrollEnabled={false}
			>
				<View className="px-6 pt-10">
					<Text className="text-white text-3xl">Playlists</Text>
				</View>
			</KeyboardAvoidingScrollView>
		</FullScreenWrapper>
	)
}

export default Playlists
