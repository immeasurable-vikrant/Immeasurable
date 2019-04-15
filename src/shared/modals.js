import React from 'react';
import { Button, Modal , ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal : false
        }
        this.toggle = this.toggle.bind(this);

     
    }
  

    toggle() {
        this.setState(prevState => ({
            modals: !prevState.modal
        }));
    } 
    render() {
        return(
            <div >
                <Button color="primary" onClick= {this.toggle}>Login </Button>
                    <Modal  isOpen = {this.state.modals} toggle={this.toggle} className= {this.state.className}>
                        <ModalHeader toggle={this.toggle} >Modal title </ModalHeader>
                            <ModalBody>
                                Lorem ipsum dolor sit amet cristiano 
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggle} > Submit</Button>
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                    </Modal>
            </div>
        );
    }

}
export default ModalLogin;