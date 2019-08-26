import React from 'react';
import { Route, Switch } from 'react-router-dom';
import seedColors from './seedColors';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPalleteForm from './NewPalleteForm'
import { generatePalette } from './colorHelpers';
import MainContext from './MainContext';
function App() {
	const [palettes,setPalettes] = React.useState(seedColors)
	function findPalette(id) {
		return palettes.find((pal) => {
			return pal.id === id;
		});
	}
	function savePalette(newPalette){
		setPalettes([...palettes,newPalette])
	}
	return (
		<div>
			<MainContext.Provider value={{}}>
				<Switch>
					<Route exact
					 path="/palette/new" 
					 render={(routeProps) => <NewPalleteForm savePalette={savePalette} palettes= {palettes} {...routeProps}/>} />
					<Route
						exact
						path="/"
						render={(routeProps) => <PaletteList palettes={palettes} {...routeProps} />}
					/>
					<Route
						exact
						path="/palette/:id"
						render={(routeProps) => (
							<Palette
								{...routeProps}
								palette={generatePalette(findPalette(routeProps.match.params.id))}
							/>
						)}
					/>
					<Route
						exact
						path="/palette/:paletteId/:colorId"
						render={(routeProps) => (
							<SingleColorPalette
								{...routeProps}
								colorId={routeProps.match.params.colorId}
								palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
							/>
						)}
					/>
				</Switch>
			</MainContext.Provider>
		</div>
	);
}

export default App;
