import { create } from "zustand";


interface GlobalStore {
  loading: boolean;
  setLoading: (loading: boolean) => void
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading })
}))