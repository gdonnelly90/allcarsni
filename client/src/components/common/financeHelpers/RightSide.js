import React, { Component } from 'react';
import { Button, ButtonGroup, Col } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

class RightSide extends Component {
  render() {
    return (
      <Col className='rightSide' xs={12} md={6}>
        <h4>Monthly</h4>
        <span className='monthlyInstDisplay'>
          {this.props.currency}
          {this.props.monthly}
        </span>

        <h4 className='mt-3'>Total to repay</h4>
        <span className='totalAmountDisplay'>
          {this.props.currency}
          {this.props.amount}
        </span>

        <h4 className='mt-3'>APR Selected</h4>
        <span className='aprDisplay mb-5'>{this.props.APR}%</span>

        <h6 className='mt-4'>Example APR Rates</h6>

        <ButtonGroup justified>
          <Button variant='primary' id='4.9' onClick={this.props.btnOnClick}>
            4.9%
          </Button>
          <Button variant='primary' id='6.9' onClick={this.props.btnOnClick}>
            6.9%
          </Button>
          <Button variant='primary' id='10.9' onClick={this.props.btnOnClick}>
            10.9%
          </Button>
        </ButtonGroup>
      </Col>
    );
  }
}

export default RightSide;
