import { makeStyles } from '@material-ui/styles';
import chroma from 'chroma-js';
const useMiniPaletteStyles = makeStyles({
	root: {
		backgroundColor: 'white',
		border: '1px solid black',
		borderRadius: '5px',
		padding: '.5rem',
		position: 'relative',
		overflow: 'hidden',
		'& hover': {
			cursor: 'pointer'
		}
	},
	colors: {
		backgroundColor: '#dae1e4',
		height: '150px',
		width: '100%',
		borderRadius: '5px',
		overflow: 'hidden'
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '0',
		color: 'black',
		paddingTop: '.5rem',
		fontSize: '1rem',
		position: 'relative'
	},
	emoji: {
		marginLeft: '.5rem',
		fontSize: '1.5rem'
	},
	minicolor: {
		height: '25%',
		width: '20%',
		display: 'inline-block',
		margin: '0 auto',
		position: 'relative',
		marginBottom: '-3.5px'
	}
});

const usePalleteListStyles = makeStyles({
	root: {
		backgroundColor: 'blue',
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap'
	},
	nav: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		color: 'white'
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '2.5rem'
	}
});

const useColorBoxStyles = makeStyles({
	colorBox: {
		width: '20%',
		height: (props) => (props.showingFullPalette ? '25%' : '50%'),
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-3.5px',
		'&:hover button': {
			opacity: '1'
		}
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		padding: '10px',
		left: '0',
		bottom: '0',
		color: 'black',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '.75rem'
	},
	copyOverlay: {
		opacity: '0',
		zIndex: '0',
		width: '100%',
		height: '100%',
		transition: 'transform .8s ease-in-out',
		transform: 'scale(0.1)'
	},
	showOverlay: {
		opacity: '1',
		transform: 'scale(50)',
		zIndex: '10',
		position: 'absolute'
	},
	copyMessage: {
		position: 'fixed',
		top: '0',
		bottom: ' 0',
		left: ' 0',
		right: ' 0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '4rem',
		transform: 'scale(.1)',
		opacity: '0',
		color: 'white',
		'& h1': {
			fontWeight: '400',
			textShadow: '1px 2px black',
			background: 'rgba(255, 255, 255, .3)',
			width: '100%',
			textAlign: ' center',
			marginBottom: '0',
			padding: '1rem',
			textTransform: 'uppercase'
		},
		'& p': {
			fontSize: '2rem',
			fontWeight: '100'
		}
	},
	showCopyMessage: {
		opacity: '1',
		transform: ' scale(1)',
		zIndex: '24',
		transition: 'all .4s ease-in-out',
		transitionDelay: '.2s'
	},
	copyText: {
		color: (props) => (chroma(props.background).luminance() > 0.7 ? 'black' : 'white')
	},
	colorName: {
		color: (props) => (chroma(props.background).luminance() < 0.07 ? 'white' : 'black')
	},
	seeMore: {
		backgroundColor: 'rgba(255, 255, 255, .3)',
		border: 'none',
		position: 'absolute',
		right: '0',
		bottom: '0',
		color: (props) => (chroma(props.background).luminance() > 0.7 ? 'rgba(0,0,0,.7)' : 'white'),
		width: '60px',
		height: '30px',
		textAlign: 'center',
		lineHeight: '30px',
		textTransform: 'uppercase'
	},
	copyButton: {
		width: '100px',
		height: '30px',
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginLeft: '-50px',
		marginTop: '-15px',
		display: 'inline-block',
		textAlign: 'center',
		outline: 'none',
		backgroundColor: 'rgba(255, 255, 255, .3)',
		fontSize: '1rem',
		lineHeight: '30px',
		border: 'none',
		textDecoration: 'none',
		textTransform: 'uppercase',
		color: (props) => (chroma(props.background).luminance() > 0.7 ? 'rgba(0,0,0,.7)' : 'white'),
		/* opacity:0; */
		transition: 'opacity .5s ease-in',
		opacity: '0'
	}
});

const usePalleteStyles = makeStyles({
	Pallete: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column'
	},
	colors: {
		height: '90%'
	},
	goBack: {
		width: '20%',
		height: '50%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-3.5px',
		opacity: '1',
		backgroundColor: 'black',
		'& a': {
			width: '100px',
			height: '30px',
			position: 'absolute',
			top: '50%',
			left: '50%',
			marginLeft: '-50px',
			marginTop: '-15px',
			display: 'inline-block',
			textAlign: 'center',
			outline: 'none',
			backgroundColor: 'rgba(255, 255, 255, .3)',
			fontSize: '1rem',
			lineHeight: '30px',
			border: 'none',
			textDecoration: 'none',
			textTransform: 'uppercase',
			color: 'white',
			/* opacity:0; */
			transition: 'opacity .5s ease-in'
		}
	}
});
const usePalleteFooterStyles = makeStyles({
	paletteFooter: {
		backgroundColor: 'white',
		height: '5vh',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		fontWeight: 'bold'
	},
	emoji: {
		fontSize: '1.5rem',
		margin: '0 1em'
	}
});
const useNavbarStyles = makeStyles({
	Navbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '6vh'
	},
	logo: {
		marginRight: '15px',
		padding: '0 13px',
		fontSize: '22px',
		backgroundColor: '#eceff1',
		fontFamily: 'Roboto',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		'& a': {
			textDecoration: 'none',
			color: 'black'
		}
	},

	slider: {
		display: 'inline-block',
		width: '340px',
        margin: '0 10px',
        "& .rc-slider-track":{
            backgroundColor: "transparent",
        },
        "& .rc-slider-rail":{
            height:"8px"
        },
        "& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus":{
            backgroundColor: 'green',
border:'2px solid green',
outline:'none',
boxShadow: 'none',
width:'13px',
height:'13px',
marginTop: '-3px',
        }

    },
    selectContainer:{
        marginLeft: 'auto',
        marginRight: "1em"
    }
    
});






export {
	useMiniPaletteStyles,
	usePalleteListStyles,
	useColorBoxStyles,
	usePalleteStyles,
	usePalleteFooterStyles,
	useNavbarStyles
};
