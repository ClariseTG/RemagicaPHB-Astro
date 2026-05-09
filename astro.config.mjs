// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [
    {
        provider: fontProviders.fontsource(),
        name: "Lexend Deca",
        cssVariable: "--font-lexend",
    },
    {
        provider: fontProviders.fontsource(),
        name: "Montserrat",
        cssVariable: "--font-montserrat",
    },
    {
        provider: fontProviders.fontsource(),
        name: "Atkinson Hyperlegible",
        cssVariable: "--font-atkinson",
    },
    ]
});
