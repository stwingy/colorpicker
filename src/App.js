import React from 'react';
import { Route, Switch } from 'react-router-dom';
import seedColors from './seedColors';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette'
import { generatePalette } from './colorHelpers';
import MainContext from './MainContext';
function App() {
	function findPalette(id) {
		return seedColors.find((pal) => {
			return pal.id === id;
		});
	}
	return (
		<div>
			<MainContext.Provider value={{}}>
				<Switch>
					<Route
						exact
						path="/"
						render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />}
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
          path = "/palette/:paletteId/:colorId"
          render={(routeProps)=><SingleColorPalette 
			{...routeProps}
			colorId ={routeProps.match.params.colorId}
			palette={generatePalette(findPalette(routeProps.match.params.paletteId))}/>}
          />
				</Switch>
			</MainContext.Provider>
		</div>
	);
}

export default App;
