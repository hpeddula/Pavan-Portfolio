import React from 'react'
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      email: '',
      mobile: '',
      name: ''
    }
    this.toggle = this.toggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggle() {
    this.setState({ modal: !this.state.modal })
  }
  handleInputChange(e) {
    switch (e.target.name) {
      case 'Name':
        this.setState({ name: e.target.value });
        break;
      case 'Mobile':
        this.setState({ mobile: e.target.value });
        break;
      case 'Email':
        this.setState({ email: e.target.value });
        break;
    }
  }
  handleSubmit() {
    const { email, mobile, name } = this.state;
    const data = {
      "Email": email,
      "Name": name,
      "MobileNo": mobile
    }
    const body = JSON.stringify(data);
    fetch('https://localhost:5001/api/contacts', {
      method: 'POST',
      body: body,
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json',
      },
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  render() {
    const { email, mobile, name } = this.state;
    return (
      <div>
        <div className="contact">
          <Button className="modal-button" onClick={this.toggle}>Contact Me</Button>
        </div>
        <div className="footer">
          <span><FontAwesomeIcon icon={faCopyright} color="white" /> Pavan Tummala </span>
          <FontAwesomeIcon icon={faGithub} color="white" className="git" />
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Contact Me
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="email" className="form-control" defaultValue={name} name="Name" onChange={(e) => this.handleInputChange(e)} id="name" placeholder="Enter Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="Mobile">Mobile Number</label>
                <input type="email" className="form-control" name="Mobile" defaultValue={mobile} onChange={this.handleInputChange} id="Mobile" placeholder="Enter Mobile Number" />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email address</label>
                <input type="email" className="form-control" name="Email" defaultValue={email} onChange={this.handleInputChange} id="Email" placeholder="Enter Your Email" />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
