import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from '../../App';
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const ToggleColorMode = () => {
    const [mode, setMode] = React.useState < 'light' | 'dark' > ('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [setMode],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
export default ToggleColorMode;