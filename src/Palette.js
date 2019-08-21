import React from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteContext from './PaletteContext';
//import MainContext from './MainContext'
import './Palette.css';

function Palette(props) {
	const [ level, setLevel ] = React.useState(500);
	const [ format, setFormat ] = React.useState('hex');
	console.log('pal', props);
	//const pContext =React.useContext(MainContext)
	const colorBoxes = props.palette.colors[level].map((color) => (
		<ColorBox background={color[format]}
		 name={color.name}
		  key={color.id} 
		  id={color.id} 
		  palletId ={props.palette.id}
		  showLink ={true}/>
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
			<div className="Palette">
				<Navbar />

				<div className="Palette-colors">{colorBoxes} </div>
				<footer className="palette-footer">
					{props.palette.paletteName}
					<span className="emoji">{props.palette.emoji}</span>
				</footer>
			</div>
		</PaletteContext.Provider>
	);
}

export default Palette;
