import { SongItem } from "@/model/song/songTypes"
import React, { createContext } from "react"

export interface SongContextType {
	currentSong: null | SongItem
	setCurrentSong: (song: SongItem) => void
	favorites: SongItem[]
	addFavorite: (song: SongItem) => void
	removeFavorite: (song: SongItem) => void
	isFavorite: (song: SongItem) => boolean
}

export const SongContext = createContext<SongContextType>({
	favorites: [],
	addFavorite: () => {},
	removeFavorite: () => {},
	isFavorite: () => false,
	currentSong: null,
	setCurrentSong: () => {},
})

export const SongContextProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [currentSong, setCurrentSong] = React.useState<SongItem | null>(null)
	const [favorites, setFavorites] = React.useState<SongItem[]>([])
	const isFavorite = (song: SongItem) => favorites.includes(song)

	const addFavorite = (song: SongItem) => {
		setFavorites([...favorites, song])
	}
	const removeFavorite = (song: SongItem) => {
		setFavorites(favorites.filter((s) => s.id !== song.id))
	}
	return (
		<SongContext.Provider
			value={{
				currentSong,
				setCurrentSong,
				favorites,
				addFavorite,
				removeFavorite,
				isFavorite,
			}}
		>
			{children}
		</SongContext.Provider>
	)
}
