import logo from './logo.svg';
import './App.css';
import {Container , Row , Col ,  Button , Alert , Breadcrumb, Card , Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
      
        <Form>
          <Row>
            <Col>
          <Form.Group controlId='formemail'>
         
           <Form.Label>email</Form.Label>
           <Form.Control type='email' placeholder='anything@gmail.com'></Form.Control>
           
          </Form.Group>
       </Col>
       <Col>
          <Form.Group controlId='formpassword'>
      
           <Form.Label>password</Form.Label>
           <Form.Control type='password' placeholder='Password'></Form.Control>
          </Form.Group>
          </Col>
        </Row>
        <Button variant="success">login</Button>{' '} 
        </Form> 
  
        <Card className='mb-3' >

          <Card.Img   src='https://static.boredpanda.com/blog/wp-content/uploads/2016/01/manny-cat-takes-selfies-dogs-gopro-9.jpg'></Card.Img>
          <Card.Body></Card.Body>
          
          <Card.Title style={{color: '#000'}} > this link will make your day</Card.Title>
          <Card.Link href="https://youtu.be/VZrDxD0Za9I">hint:wickwolled</Card.Link>
          <Card.Text style={{color: '#000'}} > this is a bootstrap card </Card.Text>
          <Button variant="success" type='submit'>click</Button>{' '}       
        </Card>
        <Breadcrumb> 
        <Breadcrumb.Item>test1</Breadcrumb.Item>
        <Breadcrumb.Item>test2</Breadcrumb.Item>
        <Breadcrumb.Item>test3</Breadcrumb.Item>
        </Breadcrumb>
<Alert> click here  </Alert>
<Button variant="outline-danger">just a button </Button>{' '}       
</Container>
      </header>
    </div>
  );
}
 
export default App;
