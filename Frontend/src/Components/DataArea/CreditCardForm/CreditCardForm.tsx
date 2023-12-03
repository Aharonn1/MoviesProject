import "react-credit-cards/es/styles-compiled.css";
import {  Form, Col } from "react-bootstrap";
import UseForm from "../UseForm/UseForm";
import Cards from "react-credit-cards";

const CreditCardForm = () => {

    const { handleChange, handleFocus, handleSubmit, values} = UseForm();

    return (
        <div className="container ">
            <div className="box justify-content-center align-item-center">
                <div className="form-div">
                    <div className="credit-card">
                        <Cards
                            cvc={values.cvc}
                            expiry={values.expiration}
                            focused={values.focus}
                            name={values.name}
                            number={values.number}
                        />
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control
                                type="text" required min={4} max={10000000000000000.0000000000001111111111111}
                                id="name"
                                name="name"
                                placeholder="הכנס שם"
                                value={values.name}
                                onChange={handleChange}
                                onFocus={handleFocus}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="number" required min={999999999999999} max={10000000000000000.0000000000001111111111111}
                                id="number"
                                name="number"
                                placeholder="הכנס מספר"
                                value={values.number}
                                onChange={handleChange}
                                onFocus={handleFocus}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="number" required min={100} max={1280.000000000001}
                                id="expiration"
                                name="expiration"
                                placeholder="הכנס תוקף "
                                value={values.expiration}
                                onChange={handleChange}
                                onFocus={handleFocus}
                            />
                        </Form.Group>
                        <Col>
                            <Form.Group>
                                <Form.Control
                                    type="number" required min={100} max={999.0000000000001}
                                    id="cvc"
                                    name="cvc"
                                    placeholder="שלוש ספרות"
                                    value={values.cvc}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                />
                            </Form.Group>
                        </Col>
                        <button> לרכישה</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default CreditCardForm;
