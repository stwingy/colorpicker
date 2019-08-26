import React, { useState } from 'react';
import DraggableColorBox from './DraggableColorBox';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { useNewPalletFormStyles } from './useAllStyles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Button from '@material-ui/core/Button';

import { ChromePicker } from 'react-color';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'; //https://www.npmjs.com/package/react-material-ui-form-validator

function NewPalleteForm(props) {
	const classes = useNewPalletFormStyles();
	const theme = useTheme();
	const [ currentColor, setCurrentColor ] = useState('teal');
	const [ open, setOpen ] = useState(true);
	const [ colors, setColors ] = useState([ { color: 'blue', name: 'sky' } ]);
	const [ newColorName, setNewColorName ] = useState('');
const [newPaletteName,setNewPaletteName] = React.useState('')
	React.useEffect(
		() => {
			function validate() {
				ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
					return colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase()) ? true : false;
				});
			}
			validate();
			return () => ValidatorForm.removeValidationRule('isColorNameUnique');
		},
		[ colors ]
	);
	React.useEffect(
		() => {
			function validate() {
				ValidatorForm.addValidationRule('isColorUnique', (value) => {
					
					return colors.every(({ color }) => color !== currentColor) ? true : false;
				});
			}
			validate();
			return () => ValidatorForm.removeValidationRule('isColorUnique');
		},
		[ currentColor, colors ]
	);
	React.useEffect(
		() => {
			function validate() {
				ValidatorForm.addValidationRule('isPalletNameUnique', (value) => {
					
					return props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()) ? true : false;
				});
			}
			validate();
			return () => ValidatorForm.removeValidationRule('isColorUnique');
		},
		[ props.palettes ]
	);

	function handleDrawerOpen() {
		setOpen(true);
	}

	function handleDrawerClose() {
		setOpen(false);
	}
	function updateCurrentColor(newColor) {
		setCurrentColor(newColor.hex);
	}
	function addNewColor() {
		const newCol = {
			color: currentColor,
			name: newColorName
		};

		setColors([ ...colors, newCol ]);
		setNewColorName('');
	}
	function handleChange(evt) {
		if(evt.target.name==="setNewPaletteName"){
			setNewPaletteName(evt.target.value)
		}
		if(evt.target.name==="setNewColorName"){
			setNewColorName(evt.target.value);
		}
		
		
	}
	function handleSubmit() {
		let newName = newPaletteName

		const newPalette = { 
			paletteName: newName,
			id:newName.toLowerCase().replace(/ /g,"-"),
			 colors: colors 
			};
		props.savePalette(newPalette);
		props.history.push('/');
	}

	function removeColor(colorName){
const newColors = colors.filter(col=>col.name !==colorName)
setColors(newColors)
	}
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				color="default"
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Persistent drawer
					</Typography>
					<ValidatorForm onSubmit = {handleSubmit}>
					<TextValidator  
					name ="setNewPaletteName"
					value ={newPaletteName} 
					label = "Palette Name" 
					onChange = {handleChange}
					validators={["required",'isPalletNameUnique']}
					errorMessages={["Enter a name","Name must be unique"]}/>
					<Button variant="contained" color="primary" type="submit">
						Save Palette
					</Button>
					</ValidatorForm>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Typography variant="h4">Design Your Palette</Typography>
				<div>
					<Button variant="contained" color="secondary">
						Clear Palette
					</Button>
					<Button variant="contained" color="primary">
						Random Color
					</Button>
				</div>
				<Divider />
				<ChromePicker color={currentColor} onChangeComplete={updateCurrentColor} />
				<ValidatorForm onSubmit={addNewColor}>
					<TextValidator
					name ="setNewColorName"
						value={newColorName}
						onChange={handleChange}
						validators={[ 'required', 'isColorNameUnique', 'isColorUnique' ]}
						errorMessages={[
							'this field is required',
							'color name should be unique',
							'That color is already selected'
						]}
					/>
					<Button variant="contained" color="primary" style={{ backgroundColor: currentColor }} type="submit">
						Add Color
					</Button>
				</ValidatorForm>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open
				})}
			>
				<div className={classes.drawerHeader} />

				{colors.map((color) => <DraggableColorBox key = {color.name} color={color.color} name={color.name} handleClick ={()=>removeColor(color.name)}/>)}
			</main>
		</div>
	);
}

export default NewPalleteForm;
