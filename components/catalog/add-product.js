import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const FormPopup = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Add New Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="productName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="email" placeholder="Product name" />
                    </Form.Group>
                    <Form.Group controlId="productPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Price" />
                    </Form.Group>
                    <Form.Group controlId="productDesc">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="textarea"
                            placeholder="Description"
                        />
                    </Form.Group>
                    <Form.Group controlId="productImage">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="text" placeholder="Image URL" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.onHide}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

const AddProduct = () => {
    const [show, setShow] = React.useState(false);

    return (
        <div>
            <button onClick={() => setShow(true)} className="fab-add-product btn btn-primary">Add Product</button>
            <FormPopup show={show} onHide={() => setShow(false)} />
        </div>
    );
}
export default AddProduct;
