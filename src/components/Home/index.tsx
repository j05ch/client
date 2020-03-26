import * as React from 'react';
import './index.scss';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Home: React.FunctionComponent<{}> = () => {
    return (
        <Container className='container'>
            <Button as={Link} to='/ads'>View ad listing</Button>
        </Container>

    );
};

export default Home;
