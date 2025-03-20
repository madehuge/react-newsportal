import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";

class ContactBox extends Component {
  state = {
    formData: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    errors: {},
    loading: false,
    responseMessage: "",
  };

  validateForm = () => {
    let newErrors = {};
    const { name, email, phone } = this.state.formData;

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z ]+$/.test(name)) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    this.setState({ errors: newErrors });
    return Object.keys(newErrors).length === 0;
  };

  handleChange = (e) => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({ loading: true, responseMessage: "" });
      try {
        const response = await fetch("https://your-api-endpoint.com/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.formData),
        });
        const data = await response.json();
        if (response.ok) {
          this.setState({ responseMessage: "Form submitted successfully!" });
        } else {
          this.setState({ responseMessage: "Error: " + data.message });
        }
      } catch (error) {
        this.setState({ responseMessage: "Failed to submit form" });
      }
      this.setState({ loading: false });
    }
  };

  render() {
    const { formData, errors, loading, responseMessage } = this.state;
    return (
      <div>
        <section
          className="breadcrumb-section"
          style={{
            backgroundImage:
              "url('https://community.nasscom.in/sites/default/files/community_banner/Untitled-3_12.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "50px 0",
          }}
        >
          <Container>
            <h1 className="text-white">Contact Us</h1>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Contact</Breadcrumb.Item>
            </Breadcrumb>
          </Container>
        </section>

        <Container className="contact-container py-5">
          <Row>
            <Col md={6} className="contact-details">
              <h3>Contact Information</h3>
              <p>
                <strong>Email:</strong> info@demo.com
              </p>
              <p>
                <strong>Phone:</strong> +91324987654
              </p>
            </Col>
            <Col md={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={this.handleChange}
                  />
                  {errors.name && (
                    <small className="text-danger">{errors.name}</small>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={this.handleChange}
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={this.handleChange}
                  />
                  {errors.phone && (
                    <small className="text-danger">{errors.phone}</small>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Form>
              {responseMessage && (
                <p className="mt-3 text-info">{responseMessage}</p>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ContactBox;
