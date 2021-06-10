import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';


export class HornedForm extends Component {
    hornReset = (event) => {
        let horns = Number(event.target.value);

        if (horns > 0) {
            let beastArr = this.props.horns.filter(hornNumber => {
                return (Number(hornNumber.horns) === horns)

            });
            this.props.newState(beastArr);
            console.log(beastArr)
        }
        else { this.props.newState(this.props.horns); }
    };

    render() {
        return (
            <div>

                <Form style={{ width: '18rem' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>How Many Horns You Want To See ? </Form.Label>

                        <Container className="p-3" >
                            <Form.Control as="select" onChange={this.hornReset}>
                                <option value="0">All</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="100">100 horns</option>
                            </Form.Control>
                        </Container>

                    </Form.Group>

                </Form>
            </div>
        )
    };
}
export default HornedForm
