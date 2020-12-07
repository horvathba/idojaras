
import Navi from './Route';
import  {useDarkMode} from "./useDarkMode.js";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles.js";
import {useEffect} from 'react';
import Toggle from './Toggler.js';

import { lightTheme, darkTheme } from "./Themes"

const App = () => {
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
        <GlobalStyles/>
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <>
        <Navi></Navi>
        </>
      </ThemeProvider>

        
    );
}

export default App;