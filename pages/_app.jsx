import { Provider } from "react-redux";
import store from "src/store";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
};

export default App;
