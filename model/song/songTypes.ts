export type SongItem = {
	id: number
	title: string
	artist: string
	duration: number
}
export interface SongStoreType {
	currentSong: SongItem | null
	setCurrentSong: (song: SongItem) => void
	favorites: SongItem[]
	addFavorite: (song: SongItem) => void
	removeFavorite: (song: SongItem) => void
	isFavorite: (song: SongItem) => boolean
}
