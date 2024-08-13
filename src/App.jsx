import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "~/routes";
import PrivateRoute from "~/PrivateRoute";

function App() {

	return (
		<Routes> 
		{
			publicRoutes.map((route, index) => {
				const Page = route.component;
				let LayoutDefault = null;
				if (route.layout) {
					LayoutDefault = route.layout;
				  } else {
					LayoutDefault = Fragment;
				}
				return (		
						<Route					
						key={index}
						path={route.path}
						element={ 
							<LayoutDefault>
								<Page />       
							</LayoutDefault>              
						}
						/>			
				);
			})			
		}
		{
			privateRoutes.map((route, index) => {
				const Page = route.component;
				let LayoutDefault = null;
				let title = route.title ?? ''
				if (route.layout) {
					LayoutDefault = route.layout;
				  } else {
					LayoutDefault = Fragment;
				}
				return (		
						<Route
							key={index}
							path={route.path}
							element={ 
								<PrivateRoute LayoutDefault = {LayoutDefault} title = {title}>
									<Page />       
								</PrivateRoute>              
							}
						/>			
				);
			})
		}
		</Routes> 
	)

	
	
}

export default App;
