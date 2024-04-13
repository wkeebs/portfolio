/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#121612",
        "accent-dark": "#222222",
      },
      backgroundImage: {
        "hero-pattern":
          "url: ('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1033%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='rgba(19%2c 26%2c 20%2c 1)'%3e%3c/rect%3e%3cpath d='M735.38 1217.59C925.75 1093.9 819.13 423.5 1160.57 415.21 1502 406.92 1784.44 723.48 2010.94 728.41' stroke='rgba(23%2c 103%2c 32%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M810.27 1170.41C999.42 1150.15 1055.57 781.63 1436.68 738.44 1817.8 695.25 1871.12 307.82 2063.1 284.84' stroke='rgba(23%2c 103%2c 32%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M672.13 1229.72C903.37 1169.36 915.45 593.56 1328.34 534.55 1741.22 475.54 1800.61 209.24 1984.54 199.75' stroke='rgba(23%2c 103%2c 32%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M899.91 1286.16C1030.8 1252.95 938.56 929.27 1273.68 896.19 1608.8 863.11 1814.38 548.75 2021.22 539.79' stroke='rgba(23%2c 103%2c 32%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M576.75 1202.65C773.33 1141.24 817.65 587.84 1111.81 576.28 1405.97 564.72 1379.34 711.28 1646.87 711.28 1914.4 711.28 2043.98 577.32 2181.93 576.28' stroke='rgba(23%2c 103%2c 32%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1033'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e')",
      },
    },
  },
  plugins: [],
};
