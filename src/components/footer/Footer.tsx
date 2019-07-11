import React from "react";
import { Box, ResponsiveContext, Text } from "grommet";

import { FooterContent } from "./FooterContent";

const Footer = ({ ...rest }) => (
    <ResponsiveContext.Consumer>
        {size => (
            <Box
                direction="row"
                justify="between"
                border={{ side: "top", color: "light-4" }}
                pad={{ top: "xsmall" }}
                {...rest}
            >
                <Box gap="small" align="start">
                    <Box
                        gap="small"
                        direction="row-responsive"
                        align="center"
                        pad={{ horizontal: "small" }} // align with margin of icons from SocialMedia
                    >
                        <Text weight="normal" size={(size !== 'small' && size !== 'xsmall') ? 'large' : 'small'}>
                            See: <a href="http://lucacardelli.name/TheoryOfObjects.html">
                            M. Abadi, L. Cardelli. A theory of objects. – Springer Berlin, 1996.
                        </a>
                        </Text>
                    </Box>
                </Box>
                <FooterContent />
            </Box>
        )}
    </ResponsiveContext.Consumer>
);

export { Footer };
