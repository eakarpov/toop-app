import * as React from 'react';
import {Anchor, Box, ResponsiveContext, Text} from 'grommet';
import {SocialMedia} from './SocialMedia';

const NavHeader = () => (
    <ResponsiveContext.Consumer>
        {size => (
            <Box
                direction="row"
                justify="between"
                alignSelf="center"
                gap="medium"
                pad={{top: 'large', horizontal: 'xlarge'}}
            >
                <Anchor
                    href="/"
                    // icon={<Logo />}
                    color="black"
                    label={<Text size={(size !== 'xsmall' && size !== 'small') ? 'large' : 'small'}>
                        Sigma Calculus Interpreter
                    </Text>}
                />
                <SocialMedia/>
            </Box>
        )}
    </ResponsiveContext.Consumer>
);

export {NavHeader};
