/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6FAFAD',
        secondary: '#D9825E',
        hover_primary: '#388589',
        hover_secondary: '#895338',
      },
      margin: {
        m_small: '4px',
        m_base: '12px',
        m_primary: '16px',
        m_secondary: '24px',
        m_lg: '32px',
        m_xl: '60px',
      },
      gap: {
        gap_base: "12px",
        gap_primary: "20px"
      },
      fontSize: {
        text_small: '13px',
        text_base: '18px',
        text_primary: '30px',
        text_secondary: '36px',
        text_lg: '16px',
        text_xl: '20px'
      },
      padding: {
        padding_small: "8px",
        padding_base: "12px",
        padding_md: "16px",
        padding_lg: "60px",
        padding_xl: "120px"
      },
      borderRadius: {
        rounded_base: '6px',
        rounded_primary: '8px',
        rounded_secondary: '16px',
      },
      height: {
        h_base: "80px",
        h_medium: "48px",
      },
      width: {
        W_base: "80px",
        w_logo: "288px",
        w_xl: "1280px"
      }

    },
  },
  plugins: [],
}