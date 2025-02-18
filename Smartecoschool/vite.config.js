import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
<<<<<<< HEAD
    host: "0.0.0.0",
    port: 5173,  
  },  
=======
    host: "0.0.0.0", //Permiter acceso desde otros dispositivos
    port: 5173,
  }
>>>>>>> 917983ddf41fd0c23911de1c572656f36b97131a
})
