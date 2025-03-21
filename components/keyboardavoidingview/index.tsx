import React, { FC, ReactNode } from "react"
import {
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	ScrollViewProps,
	StyleSheet,
} from "react-native"

const isIOS = Platform.OS === "ios"

type Props = ScrollViewProps & {
	children: ReactNode
}

const KeyboardAvoidingScrollView: FC<Props> = (props) => {
	return (
		<KeyboardAvoidingView
			testID="keyboardAvoidingScrollView"
			style={styles.keyboardAvoidingView}
			behavior={isIOS ? "padding" : undefined}
		>
			<ScrollView
				keyboardShouldPersistTaps="handled"
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				{...props}
				contentContainerStyle={[
					styles.scrollView,
					props.contentContainerStyle,
				]}
			>
				{props.children}
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default KeyboardAvoidingScrollView

const styles = StyleSheet.create({
	keyboardAvoidingView: {
		flex: 1,
	},
	scrollView: {
		flexGrow: 1,
	},
})
