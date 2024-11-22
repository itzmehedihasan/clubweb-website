// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{html,js,ts}', 
    './components/**/*.{html,js,ts}',
    './*.{html,js,ts}'
  ],
  theme: {
    extend: {
// ==============================================
      maxWidth: {
        'container': '1200px',
      },
// ==============================================
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
      },
// ==============================================
      colors: {
        'primary': '#3775ED',
        'offblack': 'rgb(26, 25, 25)',
      },
// ==============================================
      backgroundImage: {
        'logos': "url('/src/images/logos.png')",
        'enjoybg' : "linear-gradient(0deg, rgb(28 28 28 / 50%), rgb(28 28 28 / 50%)), url('/src/images/enjoy-bg.png')"
      },
// ==============================================
      animation: {
        rotateFan: 'rotateFan .6s linear infinite',  // continuous spinning
        translateUpDown: 'translateUpDown 3s infinite', // continuous Up-down
        run1: 'run1 20s linear infinite', // continuous run
        run2: 'run2 20s linear infinite', // continuous run
        run3: 'run3 20s linear infinite', // continuous run
        run4: 'run4 20s linear infinite', // continuous run
        run5: 'run5 20s linear infinite', // continuous run
        run6: 'run6 20s linear infinite', // continuous run
        run7: 'run7 20s linear infinite', // continuous run
        run8: 'run8 20s linear infinite', // continuous run
      },
      keyframes: {
        rotateFan: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        translateUpDown: {
          '0%, 100%': { transform: 'translateY(-15px)' },  // start and end at slightly above position
          '50%': { transform: 'translateY(15px)' },        // move down in the middle
        },
        run1: {
          '0%': { transform: 'translateX(-300%)' },  // start position
          '20%': { transform: 'translateX(300%)' },  // run position
          '40%': { transform: 'translateY(-200%)' },  // run position
          '60%': { transform: 'translateX(0)' },  // run position
          '80%': { transform: 'translateY(-200%)' },  // run position
          '100%': { transform: 'translateY(0)' },  // end and end at slightly above position
        },
        run2: {
          '0%': { transform: 'translateX(-300%)' },  // start position
          '20%': { transform: 'translateX(100%)' },  // run position
          '40%': { transform: 'translateY(-440%)' },  // run position
          '60%': { transform: 'translateY(-10%)' },  // run position
          '80%': { transform: 'translateY(200%)' },  // run position
          '100%': { transform: 'translateY(0)' },  // end and end at slightly above position
        },
        run3: {
          '0%': { transform: 'translateX(-400%)' },  // start position
          '20%': { transform: 'translateY(200%)' },  // run position
          '40%': { transform: 'translateX(200%)' },  // run position
          '60%': { transform: 'translateX(500%)' },  // run position
          '80%': { transform: 'translateY(-200%)' },  // run position
          '100%': { transform: 'translateY(0)' },  // end and end at slightly above position
        },
        run4: {
          '0%': { transform: 'translateX(-400%)' },  // start position
          '20%': { transform: 'translateY(200%)' },  // run position
          '40%': { transform: 'translateX(200%)' },  // run position
          '60%': { transform: 'translateX(-100%)' },  // run position
          '80%': { transform: 'translateY(-100%)' },  // run position
          '100%': { transform: 'translateY(0)' },  // end and end at slightly above position
        },
        run5: {
          '0%': { transform: 'translateX(-400%)' },  // start position
          '20%': { transform: 'translateY(250%)' },  // run position
          '40%': { transform: 'translateX(300%)' },  // run position
          '60%': { transform: 'translateX(-100%)' },  // run position
          '80%': { transform: 'translateY(-100%)' },  // run position
          '100%': { transform: 'translateY(0)' },  // end and end at slightly above position
        },
        run6: {
          '0%': { transform: 'translateX(200%)' },  // start position
          '20%': { transform: 'translateX(-500%)' },  // run position
          '40%': { transform: 'translateY(-900%)' },  // run position
          '60%': { transform: 'translateX(0)' },  // run position
          '80%': { transform: 'translateY(-50%)' },  // run position
          '100%': { transform: 'translateY(0)' },  // end and end at slightly above position
        },
        run7: {
          '0%': { transform: 'translateX(-300%)' },  // start position
          '20%': { transform: 'translateX(300%)' },  // run position
          '40%': { transform: 'translateY(-200%)' },  // run position
          '60%': { transform: 'translateX(-300%)' },  // run position
          '80%': { transform: 'translateY(-40%)' },  // run position
          '100%': { transform: 'translateY(0)' },  // end and end at slightly above position
        },
        run8: {
          '0%': { transform: 'translateY(-30%)' },  // start position
          '20%': { transform: 'translateY(30%)' },  // run position
          '40%': { transform: 'translateY(-30%)' },  // run position
          '60%': { transform: 'translateY(30%)' },  // run position
          '80%': { transform: 'translateY(-30%)' },  // run position
          '100%': { transform: 'translateY(0)' },  // end and end at slightly above position
        },
       
      },
    },
  },
  plugins: [],
};
