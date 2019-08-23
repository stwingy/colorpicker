import React from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter'
import PaletteContext from './PaletteContext';
import {usePalleteStyles} from './useAllStyles'
//import MainContext from './MainContext'
// import './Palette.css';

function Palette(props) {
	const [ level, setLevel ] = React.useState(500);
	const [ format, setFormat ] = React.useState('hex');
const classes = usePalleteStyles()
	//const pContext =React.useContext(MainContext)
	const colorBoxes = props.palette.colors[level].map((color) => (
		<ColorBox background={color[format]}
		 name={color.name}
		  key={color.id} 
		  id={color.id} 
		  palletId ={props.palette.id}
		  showingFullPalette/>
	));

	function changeLevel(newLevel) {
		setLevel(newLevel);
	}
	function changeFormat(val) {
		setFormat(val);
		console.log(format, 'HAV', val);
	}
	console.log(format);
	return (
		<PaletteContext.Provider value={{ level, changeLevel, changeFormat }}>
			<div className={classes.Pallete}>
				<Navbar level={level} changeLevel ={changeLevel} handleChange = {changeFormat} showingAllColors/>

				<div className={classes.colors}>{colorBoxes} </div>
				<PaletteFooter paletteName ={props.palette.paletteName} emoji ={props.palette.emoji}/>
				
			</div>
		</PaletteContext.Provider>
	);
}

export default Palette;
