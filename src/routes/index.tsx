import {
	BrowserRouter as Router,
	Route,
	Routes as Switch,
} from "react-router-dom";
import { CreateBingo, Intro, Main } from "../modules/game";
import { MainLayout } from "../layouts";
import { withLayout } from "../utils";



export const AppRouter = () => {
	return (
		<Router>
			<Switch>
				{/* Public Routes */}
				<Route path="/" element={withLayout(MainLayout, <Intro/>)} />
				<Route path="/main" element={withLayout(MainLayout, <Main/>)} />
				<Route path="/create" element={withLayout(MainLayout, <CreateBingo/> )} />
				
			</Switch>
		</Router>
	);
};
