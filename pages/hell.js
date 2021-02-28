
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Hell() {
    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="title" component="h1" gutterBottom>
            This is hell
          </Typography>
          <Button variant="contained" color="primary" component={Link} naked href="/">
            Go to the main page
          </Button>
          <Button variant="contained" color="primary" component={Link} naked href="/about">
            Go to the about
          </Button>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    );
  }
  