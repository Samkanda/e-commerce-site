import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    main: {
        textAlign: "center",
        position: "relative",
      },
    grid: {
        position: "relative",
    },
    subtitle: {
        top: '45%',
        fontSize: "2.1vw",
        fontFamily: '"Raleway", "sans-serif"',
        paddingLeft: '74vw',
        lineHeight: '.8',
        position: 'absolute',
    },
    title: {
        top: '50%',
        fontSize: "20vw",
        fontFamily: '"Raleway", "sans-serif"',
        color: '#44474a',    
        textAlign: "center",
        position: "absolute",
        lineHeight: '.8',
        left: 0,
        right: 0,
    },
    sideTitle: {
        fontSize: "1.8rem",
        fontFamily: '"Oswald", "sans-serif"',
        paddingRight: '1rem',
        writingMode: 'vertical-lr',
        transform: 'rotate(-180deg)',
        textAlign: 'left',
        paddingBottom: '20vw',
        "@media (max-width: 980px)": {
            visibility: 'hidden',
          },
    },
    rightTitle: {
        fontSize: "1.8vw",
        fontFamily: '"Oswald", "sans-serif"',
        writingMode: 'vertical-lr',
        transform: 'rotate(-180deg)',
        paddingBottom: '1vw',
        color: "white",
        position: 'absolute',
        paddingRight: '1rem',
        "@media (max-width: 980px)": {
                visibility: 'hidden',
                marginBottom: '-3rem',
          },
    },
    dot: {
        height: "10px",
        width: "10px",
        borderRadius: "50%",
        display: "inline-block",
        cursor: "pointer",
        marginTop: '.9rem',
        "@media (max-width: 980px)": {
            visibility: 'visible',
      },
    },
    description: {
        paddingLeft: '12vw',
        paddingRight: '2vw',
        paddingTop: '5%',
        fontFamily: '"Oswald", "sans-serif"',
        fontSize: '1vw',
        textAlign: 'justify',
        "@media (max-width: 980px)": {
            display: 'none',
          },
    },
    lowerTitle: {
        fontSize: "1.8vw",
        fontFamily: '"Oswald", "sans-serif"',
        cursor: "pointer",
        animation: '$desAnimation 2s infinite',
        "@media (max-width: 980px)": {
            animation: '$minAnimation 2s infinite',
          },
          "@media (max-width: 580px)": {
            animation: '$mobAnimation 2s infinite',
          },
    },
    '@keyframes desAnimation': {
      '0%, 100%': { paddingTop: '6vw' },
      '50%': { paddingTop: '8vw' },
      },
    
    '@keyframes minAnimation': {
        '0%, 100%': { paddingTop: '10vw' },
        '50%': { paddingTop: '12vw' },
      },
      '@keyframes mobAnimation': {
        '0%, 100%': { paddingTop: '4vw' },
        '50%': { paddingTop: '6vw' },
      },
}));