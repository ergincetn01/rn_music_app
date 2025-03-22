import { create } from "zustand"
import { SongItem, SongStoreType } from "@/model/song/songTypes"

export const useSongStore = create<SongStoreType>((set, get) => ({
	currentSong: null,
	setCurrentSong: (song: SongItem) => set({ currentSong: song }),
	favorites: [],
	addFavorite: (song: SongItem) =>
		set((state) => ({ favorites: [...state.favorites, song] })),
	removeFavorite: (song: SongItem) =>
		set((state) => ({
			favorites: state.favorites.filter((s) => s.id !== song.id),
		})),
	isFavorite: (song: SongItem) => get().favorites.includes(song),
}))
