import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { NotificationManager } from "react-notifications";
import { connect } from "react-redux";
import { addProduct } from "../../redux/actions/catalogAction";
import { categories } from "../../redux/actions/catalogFilterAction";

const AddProductSchema = Yup.object().shape({
    name: Yup.string()
    .required("Name is required!"),
    price: Yup.string()
    .required("Price is required!")
    .test('numeric', 'Price must be numeric!',
        function (value) {
            return (!/^\d+$/.test(value)) ? false : true;
        }),
    desc: Yup.string()
    .required("Description is required!"),
    image: Yup.string()
    .required("Image URL is required!")
    .url("*Must enter URL in http://www.example.com format"),
    category: Yup.string()
    .required("Category is required!")
});

const AddProduct = props => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button
                onClick={() => handleShow()}
                className="fab-add-product btn btn-primary"
            >
                Add Product
            </button>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            name: "",
                            price: "",
                            desc: "",
                            image: "",
                            category: "smartphone"
                        }}
                        validationSchema={AddProductSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setSubmitting(true);
                            setTimeout(() => {
                                let newId =
                                    props.catalog[
                                        Object.keys(props.catalog).length - 1
                                    ].id + 1;
                                let newProduct = {
                                    id: newId,
                                    name: values.name,
                                    price: parseInt(values.price),
                                    desc: values.desc,
                                    image: values.image,
                                    category: values.category
                                };
                                props.addProduct(newProduct);
                                resetForm();
                                setSubmitting(false);
                                handleClose();
                                NotificationManager.success(
                                    `New product is successfully created!`
                                );
                            }, 500);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="productName">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Product name"
                                        name="name"
                                        className={
                                            touched.name && errors.name
                                                ? "error"
                                                : null
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        isInvalid={touched.name && errors.name}
                                        isValid={touched.name && !errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="productPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Price"
                                        name="price"
                                        className={
                                            touched.price && errors.price
                                                ? "error"
                                                : null
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.price}
                                        isInvalid={
                                            touched.price && errors.price
                                        }
                                        isValid={touched.price && !errors.price}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.price}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="productCategory">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control
                                        as="select"
                                        placeholder="Category"
                                        name="category"
                                        className={
                                            touched.category && errors.category
                                                ? "error"
                                                : null
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.category}
                                        isInvalid={
                                            touched.category && errors.category
                                        }
                                        isValid={
                                            touched.category && !errors.category
                                        }
                                    >
                                        {categories.map(category => (
                                            <option
                                                value={category.value}
                                                key={category.value}
                                            >
                                                {category.name}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.category}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="productDesc">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Description"
                                        name="desc"
                                        className={
                                            touched.desc && errors.desc
                                                ? "error"
                                                : null
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.desc}
                                        isInvalid={touched.desc && errors.desc}
                                        isValid={touched.desc && !errors.desc}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.desc}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="productImage">
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Image URL"
                                        name="image"
                                        className={
                                            touched.image && errors.image
                                                ? "error"
                                                : null
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.image}
                                        isInvalid={
                                            touched.image && errors.image
                                        }
                                        isValid={touched.image && !errors.image}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.image}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Save
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
};

const mapStateToProps = state => ({
    catalog: state.catalog
});

const mapDispatchToProps = dispatch => ({
    addProduct: product => dispatch(addProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
