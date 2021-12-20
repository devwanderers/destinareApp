const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    // important: true,
    // important: true,
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        screens: {
            xs: '375px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xxl: '1440px',
            xxxl: '1600px',
        },
        spacing: {
            ...defaultTheme.spacing,
            '4px': '4px',
            '40px': '40px',
            '50px': '50px',
            37: '9.25rem',
            4.5: '4.5rem',
            3.5: '3.5rem',
            1.875: '1.875rem',
            2.25: '2.25rem',
            '25px': '25px',
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            '50%': '50%',
            16: '4rem',
        },
        backgroundPosition: {
            bottom: 'bottom',
            'bottom-4': 'center bottom 1rem',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
            'top-4': 'center top 1rem',
            '-top-7': 'center top -5rem',
            '-top-15': 'center top -15rem',
        },
        minWidth: {
            minMobileWidth: '375px',
        },
        maxWidth: {
            '1000px': '1000px',
            '1650px': '1650px',
            full: '100%',
        },
        fontFamily: {
            'russo-one': ['Russo One', 'sans-serif'],
            'saira-condensed': ['Saira Condensed', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif'],
            'bebas-nue': ['Bebas Neue', 'cursive'],
            montserrat: ['Montserrat', 'sans-serif'],
        },
        colors: {
            red: colors.red,
            yellow: { ...colors.yellow },
            gray: {
                ...colors.trueGray,
                1: '#4B4E5D',
                2: '#292929',
                3: '#1C1C1C',
                4: '#343640',
                5: '#808080',
                6: '#40424F',
                7: '#d1d1d1',
                8: '#c9c9c9',
                9: '#24262D',
                10: '#333333',
                11: '#e5e5e5',
                12: '#fafafa',
                13: '#4B4B4A',
            },
            white: '#ffffff',
            light: {
                1: '#fafafa',
                2: '#f7f7f7',
                3: '#EDEDED',
            },
            // primary: '#527aee',
            primary: '#0091C2',
            danger: '#B82D4D',
            info: '#00B5EB',
            transparent: 'transparent',
            dark: '#171230',
            darker: '#090416',
            green: { ...colors.green, 1: '#7AC385' },
            blue: {
                ...colors.blue,
                1: '#2A2C34',
                2: '#21232B',
                3: '#0091C2',
                4: '#7ABCCF',
            },
            black: {
                1: '#000000',
                2: '#333',
                3: '#595959',
            },
            orange: {
                1: '#E09F57',
                2: '#E18942',
                3: '#F0CA69',
            },
            benefits: {
                'yellow-1': '#eec32d',
                'yellow-2': '#f6a223',
                'blue-1': '#0091c2',
                'blue-2': '#7abccf',
                'green-1': '#00919a',
                'green-2': '#7abc86',
                'orange-1': '#ff720a',
                'orange-2': '#f68e23',
            },
        },
        fontSize: {
            xs: '.75rem',
            sm: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '8xl': '6rem',
            '9xl': '7rem',
            '10xl': '8rem',
            '11xl': '9rem',
            '12xl': '10rem',
            '14xl': '12rem',
            '2-75rem': '2.75rem',
            '2rem': '2rem',
            '89px': '89px',
            '53px': '53px',
            '23px': '23px',
            '40px': '40px',
            '27px': '27px',
            '34px': '34px',
            11.5: '11.5rem',
            6.5: '6.5rem',
            2.5: '2.5rem',
            2.7: '2.7rem',
            3.5: '3.5rem',
        },
        backgroundColor: (theme) => ({
            ...theme('colors'),
        }),
        extend: {
            backgroundImage: {
                travellerbg:
                    "url('/src/assets/images/backgrounds/traveller-with-backpack-2021-08-26-15-29-39-utc.jpg')",
                sunset:
                    "url('/src/assets/images/backgrounds/sunset-2021-08-27-21-13-52-utc.jpg')",
                sunset2:
                    "url('/src/assets/images/backgrounds/sunset-2021-08-31-11-19-12-utc.jpg')",
                sunset3:
                    "url('/src/assets/images/backgrounds/sunset-2021-08-28-06-23-40-utc.jpg')",
                clouds: "url('/src/assets/images/backgrounds/fondo-nubes.jpg')",
                worldmap: "url('/src/assets/svg/home/worldmap.svg')",
                city: "url('/src/assets/svg/home/city.svg')",
            },
            margin: {
                '-18px': '-18px',
                '-24px': '-24px',
                84: '21rem',
                88: '22rem',
                92: '23rem',
                '-64px': '-64px',
                '-1px': '-1px',
            },
            padding: {
                '64px': '64px',
                '10px': '10px',
            },
            width: {
                '100px': '100px',
                '125px': '125px',
                '150px': '150px',
                '250px': '250px',
                '300px': '300px',
                '750px': '750px',
                '900px': '900px',
                '1000px': '1000px',
                '1025px': '1025px',
                '1100px': '1100px',
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            scale: ['active', 'group-hover'],
            textColor: ['active', 'hover'],
            borderWidth: ['active', 'hover', 'dark'],
            ringWidth: ['hover', 'active'],
            ringColor: ['hover', 'active'],
            overflow: ['hover', 'focus', 'dark'],
        },
    },
    plugins: [],
}
