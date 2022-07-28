import React, { Component } from 'react';
import { Row, Col, FormGroup } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

class SliderDuration extends Component {
  render() {
    return (
      <FormGroup>
        <Row>
          <Col sm={12}>
            <Row>
              <Col className='labelSlider' sm={4}>
                <h4>Duration</h4>
              </Col>
            </Row>
          </Col>

          <Col sm={12}>
            <input
              id='sliderDuration'
              type='range'
              value={this.props.value}
              min={this.props.min}
              max={this.props.max}
              onChange={this.props.onChange}
              step={this.props.step}
            />

            <div id='amountValueDisplay'>{this.props.value} months</div>
          </Col>
        </Row>
      </FormGroup>
    );
  }
}

export default SliderDuration;
