import {Box} from 'grommet';
import * as React from 'react';

export interface ISection {
    width?: string;
}

const Section: React.FC<ISection> = ({ children, width, ...rest }) => (
    <Box align="center" pad="large" {...rest}>
        <Box width={width}>{children}</Box>
    </Box>
);

Section.defaultProps = {
    width: "xlarge"
};

export { Section };
