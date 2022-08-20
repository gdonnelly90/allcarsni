import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import SliderAmount from './financeHelpers/SliderAmount';
import SliderDuration from './financeHelpers/SliderDuration';
import RightSide from './financeHelpers/RightSide';
// originally by rafalkaczynsky but amended to fit my needs

class FinanceCalculator extends Component {
  /* Constructor*/
  constructor(props) {
    super(props);

    // SET STARTER CALCULATUION

    let MPR = this.props.APR1 / 100 / 12;
    let amount = this.props.valueA;
    let duration = this.props.valueD;
    let totalAmountToRepay = amount + amount * MPR * duration;
    let monthly = totalAmountToRepay / duration;

    // save props values in to the state
    this.state = {
      valueAmount: this.props.valueA,
      stepAmount: this.props.stepA,
      maxAmount: this.props.maxA,
      minAmount: this.props.minA,

      valueDuration: this.props.valueD,
      stepDuration: this.props.stepD,
      maxDuration: this.props.maxD,
      minDuration: this.props.minD,

      APR: this.props.APR1,
      amountToRepay: Math.round(totalAmountToRepay).toFixed(),
      monthlyInst: Math.round(monthly).toFixed(),
    };
  }

  /* Update function*/
  update(e) {
    // Assign to let changedID ID of slider which has been changed
    let changedID = e.target.id;
    let value = e.target.value;
    if (changedID === 'sliderAmount') {
      this.setState({ valueAmount: e.target.value });
      console.log('EVENT TIME: ' + this.getNewDate());
      console.log(
        'NEW ACTION DETECTED: ID - ' +
          e.target.id +
          ': has been changed. New value: ' +
          this.props.currency +
          e.target.value,
      );
    }
    if (changedID === 'sliderDuration') {
      this.setState({ valueDuration: e.target.value });
      console.log('EVENT TIME: ' + this.getNewDate());
      console.log(
        'NEW ACTION DETECTED: ID - ' +
          e.target.id +
          ': has been changed. New value: ' +
          e.target.value +
          ' months',
      );
    }

    // if button credit history clicked set APR to choosen value
    switch (changedID) {
      case '4.9':
        this.setState({ APR: this.props.APR1 });
        console.log('EVENT TIME: ' + this.getNewDate());
        console.log(
          'NEW ACTION DETECTED: ID - ' +
            e.target.id +
            ': has been clicked. New APR value is: ' +
            this.props.APR1 +
            '%',
        );
        break;

      case '6.9':
        this.setState({ APR: this.props.APR2 });
        console.log('EVENT TIME: ' + this.getNewDate());
        console.log(
          'NEW ACTION DETECTED: ID - ' +
            e.target.id +
            ': has been clicked. New APR value is: ' +
            this.props.APR2 +
            '%',
        );
        break;

      case '10.9':
        this.setState({ APR: this.props.APR3 });
        console.log('EVENT TIME: ' + this.getNewDate());
        console.log(
          'NEW ACTION DETECTED: ID - ' +
            e.target.id +
            ': has been clicked. New APR value is: ' +
            this.props.APR3 +
            '%',
        );
        break;

      default:
        break;
    }

    this.calculate(changedID, value);
  }

  getNewDate() {
    let newDate = new Date();
    let h, m, s;
    h = newDate.getHours();
    m = '0' + newDate.getMinutes();
    s = '0' + newDate.getSeconds();
    m = m.slice(-2);
    s = s.slice(-2);

    let event_date = h + ':' + m + ':' + s;
    return event_date;
  }

  /* Calculate function*/

  calculate(id, value) {
    let amount, duration;
    let MPR = this.state.APR / 100 / 12; // MPR monthly APR for calculation
    let aprNew;
    // if calculate is after Duration is changed take value of duration from slider, but value of amount from state
    if (id === 'sliderDuration') {
      duration = parseFloat(value);
      amount = parseFloat(this.state.valueAmount);
    }
    // if calculate is after Amount is changed take value of Amount from slider, but value of duration from state
    else if (id === 'sliderAmount') {
      amount = parseFloat(value);
      duration = parseFloat(this.state.valueDuration);
    }
    // if calculate is after button credit history clicked  take values from state
    else {
      amount = parseFloat(this.state.valueAmount);
      duration = parseFloat(this.state.valueDuration);
      switch (id) {
        case '4.9':
          aprNew = this.props.APR1;
          MPR = aprNew / 100 / 12; // MPR monthly APR for calculation
          break;

        case '6.9':
          aprNew = this.props.APR2;
          MPR = aprNew / 100 / 12; // MPR monthly APR for calculation
          break;

        case '10.9':
          aprNew = this.props.APR3;
          MPR = aprNew / 100 / 12; // MPR monthly APR for calculation
          break;

        default:
          break;
      }
    }
    // calculate total and monthly inst
    let totalAmountToRepay = amount + amount * MPR * duration;
    let monthly = totalAmountToRepay / duration;

    // fixing numbers
    totalAmountToRepay = Math.round(totalAmountToRepay).toFixed();
    monthly = Math.round(monthly).toFixed();

    //save results into state
    this.setState({ amountToRepay: totalAmountToRepay });
    this.setState({ monthlyInst: monthly });
  }

  /* Return */
  render() {
    return (
      <Container className='show-grid mainContainer'>
        <Row>
          <Col className='leftSide' xs={12} md={6}>
            <Form>
              <div className='slider-amount-div mt-3 mb-5'>
                <SliderAmount
                  value={this.state.valueAmount}
                  min={this.state.minAmount}
                  max={this.state.maxAmount}
                  onChange={this.update.bind(this)}
                  step={this.state.stepAmount}
                  currency={this.props.currency}
                />
              </div>
              <div className='slider-duration-div'>
                <SliderDuration
                  value={this.state.valueDuration}
                  min={this.state.minDuration}
                  max={this.state.maxDuration}
                  onChange={this.update.bind(this)}
                  step={this.state.stepDuration}
                />
              </div>
            </Form>
          </Col>

          <RightSide
            currency={this.props.currency}
            amount={this.state.amountToRepay}
            monthly={this.state.monthlyInst}
            APR={this.state.APR}
            btnOnClick={this.update.bind(this)}
          />
        </Row>
      </Container>
    );
  }
}

// Assign deafault values to props
FinanceCalculator.defaultProps = {
  valueD: 36,
  stepD: 12,
  maxD: 72,
  minD: 12,

  valueA: 25000,
  stepA: 1000,
  maxA: 50000,
  minA: 5000,

  APR1: 4.9,
  APR2: 6.9,
  APR3: 10.9,

  currency: '£',
};

export default FinanceCalculator;
