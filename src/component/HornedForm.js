import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export class HornedForm extends Component {
    render() {
        return (
            <div>
                <Form style={{ width: '18rem' }} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>How Many Horns You Want To See ? </Form.Label>

                        <Container className="p-3" >
                            <Form.Control as="select" defaultValue="All">
                            <option value="All">All</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">More than three</option>
                            </Form.Control>
                        </Container>

                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default HornedForm
