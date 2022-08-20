import React, { Component } from 'react';
import { Row, Col, FormGroup } from 'react-bootstrap';

export class MaxPriceSlider extends Component {
  render() {
    return (
      <FormGroup>
        <Row>
          <Col sm={12}>
            <Row>
              <Col className='labelSlider' xs={12} sm={4}>
                <h4>Max Price</h4>
              </Col>
            </Row>
          </Col>

          <Col sm={12}>
            <input
              id='sliderMinPrice'
              type='range'
              value={this.props.value}
              min={this.props.min}
              max={this.props.max}
              onChange={this.props.onChange}
              step={this.props.step}
            />
            <div id='priceValueDisplay'>
              {this.props.currency}
              {this.props.value}
            </div>
          </Col>
        </Row>
      </FormGroup>
    );
  }
}
