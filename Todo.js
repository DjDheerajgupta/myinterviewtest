import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
//import ListGroup from 'react-bootstrap/ListGroup';


class App extends Component {
constructor(props) {
	super(props);

	
	this.state = {
	userInput : "",
	list:[]
	}
}


updateInput(value){
	this.setState({
	userInput: value,
	});
}

addItem(){
	if(this.state.userInput !== '' ){
	const userInput = {

	

		value : this.state.userInput
	};

	const list = [...this.state.list];
	list.push(userInput);
 
	this.setState({
		list,
		userInput:""
	});
	}
}



render(){
	return(<Container>

		

		<hr/>
		<Row>
		<Col md={{ span: 5, offset: 4 }}>

		<InputGroup className="mb-3">
		<FormControl
			placeholder="add your item"
			
			value = {this.state.userInput}
			onChange = {item => this.updateInput(item.target.value)}
			
		/>
		<InputGroup.Append>
			<Button
			variant="dark"
			size="lg"
			onClick = {()=>this.addItem()}
			>
			ADD
			</Button>
		</InputGroup.Append>
		</InputGroup>

	</Col>
</Row>
<Row>
	<Col md={{ span: 5, offset: 4 }}>
		<ul>
		
		{this.state.list.map(item => {return(

			<li>{item.value}</li>

		)})}
        </ul>
		
	</Col>
</Row>
	</Container>
	);
}
}

export default App;
