import { create } from "zustand";

const useThemeStore = create((set) => ({
  isDarkMode: localStorage.getItem("isDarkMode") === "true",
  toggleTheme: () =>
    set((state) => {
      const newMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", String(newMode));
      return { isDarkMode: newMode };
    }),
}));

export default useThemeStore;
