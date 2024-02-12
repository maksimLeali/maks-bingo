import {
	BrowserRouter as Router,
	Route,
	Routes as Switch,
} from "react-router-dom";
import { Intro, Main } from "../modules/game";

export const AppRouter = () => {
	return (
		<Router>
			<Switch>
				{/* Public Routes */}
				<Route path="/" Component={() => <Intro />} />
				<Route path="/main" Component={() => <Main/>} />
				
			</Switch>
		</Router>
	);
};
