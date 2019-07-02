import * as React from 'react';
import {Anchor, Box} from 'grommet';
import { Github } from "grommet-icons";

const SocialMedia = () => (
    <Box direction="row" gap="xxsmall" justify="center">
        <Anchor
            target="_blank"
            a11yTitle="Fork me on GitHub"
            href="https://github.com/psttf/TOOP"
            icon={<Github color="brand" size="medium" />}
        />
    </Box>
);

export { SocialMedia };
