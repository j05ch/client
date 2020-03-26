import * as React from 'react';
import { useState, useEffect } from 'react';
import './index.scss';
import axios from 'axios';
import useApiUrlContext from "../../services/useApiUrl";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

export interface Ad {
    id?: number,
    title?: string,
    imageUrl?: string,
    description?: string
    userId?: number
}

const Ads: React.FunctionComponent<{}> = () => {
    const [adList, setAdList] = useState<Array<Ad>>([]);
    const {apiUrl} = useApiUrlContext();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${apiUrl}/ad-list`);
                setAdList(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData().catch(err => console.error(err));
    }, [apiUrl]);

    function buildAdCards() {
        return adList.map(ad =>
            <div className='card-container'>
                <Card >
                    <Card.Img variant='top' src={ad.imageUrl} />
                    <Card.Body>
                        <Card.Title>{ad.title}</Card.Title>
                        <Card.Text>{ad.description}</Card.Text>
                        <Button as={Link} to={`/details:${ad.id}`} variant="primary">Details</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }

    return (
        <Container>
            {buildAdCards()}
        </Container>
    );
};

export default Ads;
