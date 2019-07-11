import * as React from 'react';
import {Component} from 'react';
import {Box, Grommet, ResponsiveContext } from 'grommet';
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
            <ResponsiveContext.Consumer>
                {size => (
                    <React.Fragment>
                        <NavHeader />
                        <Box align="center" pad="large">
                          <Router>
                              <Route path="/" component={SigmaPage} />
                          </Router>
                        </Box>
                        <Section>
                            <Footer />
                        </Section>
                    </React.Fragment>)}
            </ResponsiveContext.Consumer>
        </Grommet>
    );
  }
}

export default App;
