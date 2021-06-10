import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';


export class HornedForm extends Component {
    hornReset = (event) => {
        event.preventDefault();
    
   let selectNumber = Number(event.target.value);
   
if (selectNumber > 0) {
    let beastArr = this.props.Pictures.filter(hornNumber => {
        return (Number(hornNumber.horns) === selectNumber)
       
    });
    this.props.newState(beastArr);
    console.log(beastArr)
}
else { this.props.newState(this.props.Pictures); }
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
                            <option value="4">More than three</option>
                        </Form.Control>
                    </Container>

                </Form.Group>


                <Button variant="primary" type="submit">
                    Filter Horns
                    </Button>
            </Form>
        </div>
    )
};
}
export default HornedForm
