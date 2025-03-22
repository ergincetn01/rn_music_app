import { create } from "zustand"

interface FloatingViewState {
	isVisible: boolean
	show: () => void
	hide: () => void
}

export const useFloatingViewStore = create<FloatingViewState>((set) => ({
	isVisible: false,
	show: () => set({ isVisible: true }),
	hide: () => set({ isVisible: false }),
}))
