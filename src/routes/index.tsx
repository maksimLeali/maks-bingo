import {
	BrowserRouter as Router,
	Route,
	Routes as Switch,
} from "react-router-dom";
import { Intro, Main } from "../modules/game";
import { MainLayout } from "../layouts";
import { withLayout } from "../utils";



export const AppRouter = () => {
	return (
		<Router>
			<Switch>
				{/* Public Routes */}
				<Route path="/" element={withLayout(MainLayout, <Intro/>)} />
				<Route path="/main" element={withLayout(MainLayout, <Main/>)} />
				
			</Switch>
		</Router>
	);
};
