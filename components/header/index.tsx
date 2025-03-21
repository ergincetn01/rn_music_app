import { View, Text } from "react-native"
import React, { FC } from "react"

interface HeaderProps {
	title: string
	onPressBack: () => void
}
const Header: FC<HeaderProps> = ({ onPressBack, title }) => {
	return (
		<View>
			<Text>{title}</Text>
		</View>
	)
}

export default Header
