import * as React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from 'react';

interface Props {
    show: boolean,
    handleClose: () => void
}

const MessageModal: React.FunctionComponent<Props> = ({show, handleClose}: Props) => {
    const [submit, setSubmit] = useState<boolean>(false);

    return (
        <>
            <Modal show={show} onHide={() => {setSubmit(false); handleClose()}}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {
                        !submit &&
                        <Form>
                            <Form.Group controlId='email'>
                                <Form.Label>Your email address: </Form.Label>
                                <Form.Control type="email" placeholder='Enter email' />
                            </Form.Group>
                            <Form.Group controlId='message'>
                                <Form.Label>Your message: </Form.Label>
                                <Form.Control as="textarea" rows="5" />
                            </Form.Group>
                            <Button variant='primary' type='submit' onClick={() => setSubmit(true)}>
                                Submit
                            </Button>
                        </Form>

                    }
                    {
                        submit &&
                        <div>Message sent!</div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={() => {setSubmit(false); handleClose()}}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default MessageModal;
