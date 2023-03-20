import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from './theme/default';
import { GlobalStyle } from './theme/global';

export const App = () => {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <h1>Ignite Timer</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
