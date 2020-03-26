import * as React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

const BackToResults: React.FunctionComponent<{}> = () => {
    return (
        <div className='button-container'>
            <Button variant='outline-secondary' as={Link} to='/ads'>Back to result page</Button>
        </div>
    );
};

export default BackToResults;
