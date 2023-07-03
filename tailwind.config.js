module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out',
        
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        zIndex: {
          '100': '100',
        },
        
        
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 0 14px 4px rgba(0, 0, 0, 1)',
        'xxl': '0 0 20px 4px rgba(0, 0, 0, 1)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },
      fontSize: {
        'forghIcon': '1.75rem',
        xxs: "clamp(1rem, 4vw, 1.25rem)",
        dynamic: "clamp(1.5rem, 2vw, 2.5rem)",
        '10xl': '9.35rem',
       },
       screens: {
      
        bigsize: '1457px',
        semiMed: '700px',
        semiLg: '945px',
        aftermd:'824px',
        semixl: '1180px',
        homepagescreen:'2000px',
        bigmonitor: '1920px',
        skillsSec: '811px',
        aboutpic: '900px',
        cc: '1034px',
        xx:'1057px',
        avsize: '1333px',
        zz:'1212px',
        cpsize: '490px',
        smallcpsize: '382px',
        smallestcpsize: '277px',
        medsmall:'330px',
        med1small:'329px',
        jsicon:'315px',
        conicon:'419px',
        contact: '483px'
      },
      spacing: {
        '1stcustom': '10vh',
        '2ndcustom': '20vh', // Add your custom margin-right value here
      },
      width: {
        bigwidth: '2500%',
        clamped: 'clamp(10rem, 2vw, 16rem)'
      },
      letterSpacing: {
        tightest: '-.070em',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'skills': 'repeat(auto-fit, 100px)',

        // Complex site-specific column configuration
       
      },
      
    },
    
  },
  plugins: [],
};
