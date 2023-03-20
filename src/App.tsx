import { ThemeProvider } from 'styled-components';
import { AppRoutes } from './routes';
import { DEFAULT_THEME } from './theme/default';
import { GlobalStyle } from './theme/global';

export const App = () => {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
