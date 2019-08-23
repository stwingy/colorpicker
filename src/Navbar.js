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
import {useNavbarStyles} from './useAllStyles'
// import './Navbar.css';
function Navbar(props) {
	const [open,setOpen] =React.useState(false)
const [format,setFormat]=React.useState("hex")
const navContext = React.useContext(PaletteContext)
const classes = useNavbarStyles()
function changeFormat(e){
    setFormat(e.target.value)
	props.handleChange(e.target.value);
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
		<nav className={classes.Navbar}>
			<div className={classes.logo}>
				<Link to ="/">ReactColorPicker</Link>
			
			</div>
			{props.showingAllColors && (<div>
				<span>level: {props.level}</span>
				<div className={classes.slider}>
					<Slider
						defaultValue={props.level}
						min={100}
						max={900}
						step={100}
						onAfterChange={props.changeLevel}
					/>
				</div>
			</div>)}
			<div className={classes.selectContainer}>
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
