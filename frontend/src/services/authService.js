import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    signup: async (email, password) => {
        try {
            await axios.post("/api/signup", { email, password });
            set({ error: null });
        } catch (error) {
            set({ error: error.response.data.message });
        }
    },
    login: async (email, password) => {
        try {
            const response = await axios.post("/api/login", {
                email,
                password,
            });
            localStorage.setItem("token", response.data.token);
            set({ user: { email }, isAuthenticated: true, error: null });
        } catch (error) {
            set({ error: error.response.data.message });
        }
    },
    logout: () => {
        localStorage.removeItem("token");
        set({ user: null, isAuthenticated: false });
    },
}));

export default useAuthStore;
