import * as React from 'react';
import {Component} from 'react';
import {Box, Grommet} from 'grommet';
import { customTheme } from "./theme";
import {Footer} from './components/footer/Footer';
import {Section} from './components/Section';
import {NavHeader} from './components/NavHeader';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {SigmaPage} from './pages/SigmaPage';

class App extends Component {
  public render() {
    return (
        <Grommet theme={customTheme} full>
          <NavHeader />
          <Box align="center" pad="large">
              <Router>
                  <Route path="/" component={SigmaPage} />
              </Router>
          </Box>
          <Section>
            <Footer />
          </Section>
        </Grommet>
    );
  }
}

export default App;
