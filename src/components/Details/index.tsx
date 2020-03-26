import * as React from 'react';
import './styles.scss';
import { useParams } from 'react-router-dom';
import BackToResults from '../BackToResults';
import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import useApiUrlContext from '../../services/useApiUrl';
import { Ad } from '../Ads';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MessageModal from '../MessageModal';

const Details: React.FunctionComponent<{}> = () => {
    const [ad, setAd] = useState<Ad>({});
    // if there would be an API endpoint for ids, one could use this id for a request
    const {id} = useParams();
    const {apiUrl} = useApiUrlContext();
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${apiUrl}/ad-single`);
                setAd(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData().catch(err => console.error(err));
    }, [apiUrl]);

    function handleClick() {
        setShowModal(true);
    }

    function handleClose() {
        setShowModal(false);
    }

    return (
        <Container>
            <MessageModal show={showModal} handleClose={handleClose} />
            <BackToResults />
            <div className='card-container'>
                <Card>
                    <Card.Img variant='top' src={ad.imageUrl} />
                    <Card.Body>
                        <Card.Title>{ad.title}</Card.Title>
                        <Card.Text>{ad.description}</Card.Text>
                        <Button variant='primary' onClick={() => handleClick()}>Write as message</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>

    );
};

export default Details;
