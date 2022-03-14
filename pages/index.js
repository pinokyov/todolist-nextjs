import {Card,ListGroup,Table,Button,InputGroup,FormControl,CloseButton} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => (
    <div className={"container mt-5"}>
        <Card className={"col-md-4 offset-4"}>
            <Card.Body>
                <Card.Title>To Do List</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>Item</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr stye={{width:'100%'}}>
                        <td>Sample todo item.   <CloseButton className={"float-right"} variant="white" /></td>
                    </tr>
                    </tbody>
                </Table>
            </ListGroup>
            <Card.Body>

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                    </Button>
                </InputGroup>
            </Card.Body>
        </Card>
    </div>
);

export default Index;
