import React from 'react';
import {Link} from 'react-router-dom'
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import PaletteContext from './PaletteContext'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import './Navbar.css';
function Navbar() {
	const [open,setOpen] =React.useState(false)
const [format,setFormat]=React.useState("hex")
const navContext = React.useContext(PaletteContext)
console.log(navContext)
function changeFormat(e){
    setFormat(e.target.value)
	navContext.changeFormat(e.target.value);
	setOpen(true)
}
// const memoizedCallback = React.useCallback(
//     () => {
//       handleChange(format);
//     },
//     [format,handleChange],
//   );
function closeSnackbar(){
	setOpen(false)
}
	return (
		<nav className="Navbar">
			<div className="logo">
				<Link to ="/">ReactColorPicker</Link>
			
			</div>
			<div className="slider-container">
				<span>level: {navContext.level}</span>
				<div className="slider">
					<Slider
						defaultValue={navContext.level}
						min={100}
						max={900}
						step={100}
						onAfterChange={navContext.changeLevel}
					/>
				</div>
			</div>
			<div className="select-container">
				<Select value ={format} onChange ={changeFormat}>
					<MenuItem value = 'hex'>HEX- #ffffff</MenuItem>
                    <MenuItem value = 'rgb'>RGB- rgb(255,255,255)</MenuItem>
                    <MenuItem value = 'rgba'>RGBA- rgba(255,255,255,1.0)</MenuItem>
				</Select>
			</div>
			<Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
		open ={open}
		onClose={closeSnackbar}
		autoHideDuration={3000}
		message={<span id ="message-id">Format Changed to {format.toUpperCase()}</span>}
		ContentProps={{
			'aria-describedby': 'message-id',
		  }}
		  action={[<IconButton onClick = {closeSnackbar}
			key="close"
            aria-label="close"
            color="inherit">
			  <CloseIcon/>
		  </IconButton>]}
		/>
		</nav>
	);
}

export default Navbar;
