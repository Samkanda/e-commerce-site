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
        paddingTop: "15vw",
        fontSize: "2.1vw",
        fontFamily: '"Raleway", "sans-serif"',
        paddingLeft: '73vw',
        position: "absolute",
    
    },
    title: {
        fontSize: "20vw",
        paddingTop: "10.5vw",
        fontFamily: '"Raleway", "sans-serif"',
        color: '#44474a',    
        textAlign: "center",
        position: "absolute",
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
        float:'right',
        textAlign: 'right',
        writingMode: 'vertical-lr',
        transform: 'rotate(-180deg)',
        paddingBottom: '5vw',
        paddingLeft: '1rem',
        color: "white",
    },
    dot: {
        height: "10px",
        width: "10px",
        borderRadius: "50%",
        display: "inline-block",
        cursor: "pointer",
        marginTop: '.9rem',
    },
    description: {
        paddingLeft: '12vw',
        paddingRight: '2vw',
        paddingTop: '6.5vw',
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
            animation: '$mobAnimation 2s infinite',
          },
    },
    '@keyframes desAnimation': {
        '0%, 100%': { paddingTop: '3vw' },
        '50%': { paddingTop: '5vw' },
      },
    '@keyframes mobAnimation': {
        '0%, 100%': { paddingTop: '9vw' },
        '50%': { paddingTop: '11vw' },
      },
}));