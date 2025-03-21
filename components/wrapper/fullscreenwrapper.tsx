import { View, Text } from "react-native"
import React from "react"
import { LinearGradient } from "expo-linear-gradient"
import { Colors } from "@/constants/Colors"

const FullScreenWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<LinearGradient
			colors={[Colors.black, Colors.onyx]}
			className="flex-1 pt-10"
		>
			{children}
		</LinearGradient>
	)
}

export default FullScreenWrapper
