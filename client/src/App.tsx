import {
	MantineProvider,
	ColorScheme,
	ColorSchemeProvider,
	Paper,
} from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import AllRoutes from './components/AllRoutes';

function App() {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: 'mantine-color-scheme',
		defaultValue: 'light',
	});

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	useHotkeys([['mod+J', () => toggleColorScheme()]]);

	return (
		<div className="App">
			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider theme={{ colorScheme }} withGlobalStyles>
					<Paper>
						<AllRoutes />
					</Paper>
				</MantineProvider>
			</ColorSchemeProvider>
		</div>
	);
}

export default App;
