import { ThemeProvider } from 'styled-components';
import { AppRoutes } from '@routes/index';
import { DEFAULT_THEME } from '@theme/default';
import { GlobalStyle } from '@theme/global';
import { CyclesProvider } from '@contexts/CyclesContext';

export const App = () => {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <CyclesProvider>
        <AppRoutes />
      </CyclesProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
