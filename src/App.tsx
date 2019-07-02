import * as React from 'react';
import {Component} from 'react';
import {Box, Grommet} from 'grommet';
import { customTheme } from "./theme";
import {Footer} from './components/footer/Footer';
import {Section} from './components/Section';
import {NavHeader} from './components/NavHeader';

class App extends Component {
  public render() {
    return (
        <Grommet theme={customTheme} full>
          <NavHeader />
          <Box align="center" pad="large">
          </Box>
          <Section>
            <Footer />
          </Section>
        </Grommet>
    );
  }
}

export default App;
