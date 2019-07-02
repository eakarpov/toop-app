import React from "react";
import { Box, ResponsiveContext } from "grommet";

const FooterContent = () => (
    <ResponsiveContext.Consumer>
        {size => (
            <Box
                direction="row"
                gap={size !== "xsmall" && size !== "small" ? "xlarge" : "small"}
            >
            </Box>
        )}
    </ResponsiveContext.Consumer>
);

export { FooterContent };
