import { SongItem } from "@/model/song/songTypes"
import songs from "./songImages"

export const songsData: SongItem[] = [
	{
		id: 1,
		title: "Ben Şarkımı Söylerken",
		artist: "Şebnem Ferah",
		duration: 288,
		img: songs[0],
	},
	{
		id: 2,
		title: "Korkuyorum",
		artist: "Toygar Işıklı",
		duration: 269,
		img: songs[1],
	},
	{
		id: 3,
		title: "Baktğın Her Yerdeyim",
		artist: "Furkan Halıcı",
		duration: 203,
		img: songs[2],
	},
	{
		id: 4,
		title: "Acıtır Gibi Severek",
		artist: "Can Ozan",
		duration: 225,
		img: songs[3],
	},
]
