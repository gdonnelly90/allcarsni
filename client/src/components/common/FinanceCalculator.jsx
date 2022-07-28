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
          e.target.value
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
          ' months'
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
            '%'
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
            '%'
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
            '%'
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
            <Form horizontal>
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
//  Assign Types for props
FinanceCalculator.propTypes = {
  valueD: React.PropTypes.number,
  stepD: React.PropTypes.number,
  maxD: React.PropTypes.number,
  minD: React.PropTypes.number,
  valueA: React.PropTypes.number,
  stepA: React.PropTypes.number,
  maxA: React.PropTypes.number,
  minA: React.PropTypes.number,
  APR1: React.PropTypes.number,
  APR2: React.PropTypes.number,
  APR3: React.PropTypes.number,
  currency: React.PropTypes.string,
};

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

// import React from 'react';
// import Select from 'react-select';

// import selectOptions from '../../utils/selectOption.json';
// import controlList from '../../utils/controls.json';

// export default class FinanceCalculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       result: 0,
//       details: {
//         numberOfMonths: '',
//         interestRate: '',
//         monthlyPaymentAmount: '',
//         loanAmount: '',
//         termLength: '',
//       },
//       selectedOption: 'FMP',
//       error: false,
//       resultLabel: 'Find Monthly Mortgage',
//     };
//     this.onSubmitHandle = this.onSubmitHandle.bind(this);
//     this.onChangeHandle = this.onChangeHandle.bind(this);
//     this.clearAll = this.clearAll.bind(this);
//   }

//   onSubmitHandle(e) {
//     e.preventDefault();
//     this.calculateAndSetResults();
//   }

//   clearAll() {
//     this.setState({
//       error: false,
//       details: {
//         numberOfMonths: '',
//         interestRate: '',
//         monthlyPaymentAmount: '',
//         loanAmount: '',
//         termLength: '',
//       },
//       result: 0,
//     });
//   }

//   setError() {
//     this.setState({ error: true });
//   }

//   setResult(result) {
//     this.setState({ result });
//   }

//   calculateAndSetResults() {
//     /* eslint no-eval: 0 */
//     let result = 0;
//     let loanAmount;
//     let interestRate;
//     let numberOfMonths;
//     let monthlyPaymentAmount;
//     switch (this.state.selectedOption) {
//       case 'FLA':
//         monthlyPaymentAmount = this.state.details.monthlyPaymentAmount;
//         numberOfMonths = this.state.details.numberOfMonths;
//         interestRate = this.state.details.interestRate;
//         if (
//           monthlyPaymentAmount !== '' &&
//           numberOfMonths !== '' &&
//           interestRate !== ''
//         ) {
//           interestRate = interestRate / 1200;
//           result = eval(
//             (monthlyPaymentAmount / interestRate) *
//               (1 - 1 / Math.pow(1 + interestRate, numberOfMonths))
//           ).toFixed(2);
//           result = `$${result}`;
//         } else {
//           this.setError();
//         }
//         break;

//       case 'FMP':
//         loanAmount = this.state.details.loanAmount;
//         numberOfMonths = this.state.details.numberOfMonths;
//         interestRate = this.state.details.interestRate;
//         if (loanAmount !== '' && numberOfMonths !== '' && interestRate !== '') {
//           interestRate = interestRate / 1200;
//           result = eval(
//             (loanAmount *
//               interestRate *
//               Math.pow(1 + interestRate, numberOfMonths)) /
//               (Math.pow(1 + interestRate, numberOfMonths) - 1)
//           ).toFixed(2);

//           result = `$${result}`;
//         } else {
//           this.setError();
//         }
//         break;
//       default:
//         break;
//     }

//     this.setResult(result);
//   }

//   onChangeHandle({ value, resultLabel }) {
//     this.clearAll();
//     this.setState({ selectedOption: value, resultLabel: resultLabel });
//   }

//   onInputChange(e, type) {
//     e.persist();
//     this.setState((state) => {
//       state.details[type] =
//         e.target.value.trim() >= 0 ? e.target.value.trim() : '';
//       state.result = 0;
//       state.error = false;
//       return state;
//     });
//   }

//   Error() {
//     return (
//       <div
//         className='errorWrap align-center'
//         style={{
//           display: (this.state.error && 'flex') || 'none',
//           color: 'red',
//         }}
//       >
//         <em>Please insert vaild inputs!</em>
//       </div>
//     );
//   }

//   Results() {
//     return (
//       <div
//         className='resultBlock'
//         style={{ display: (this.state.result && 'flex') || 'none' }}
//       >
//         <span className='resultIcon'>
//           <svg
//             xmlns='http://www.w3.org/2000/svg'
//             width='18'
//             height='18'
//             viewBox='0 0 18 18'
//           >
//             <g fill='none'>
//               <path
//                 fill='#6DD400'
//                 d='M9 0c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9C-.014 4.044 3.992.014 8.949 0H9z'
//               />
//               <path
//                 fill='#FFF'
//                 d='M13.986 6.52L7.594 12.912 4.014 9.358 5.472 7.926 7.594 10.023 12.528 5.088z'
//               />
//             </g>
//           </svg>
//         </span>
//         <span className='resultText'>
//           Result: {this.state.resultLabel} = {this.state.result}
//         </span>
//       </div>
//     );
//   }

//   renderInputControls() {
//     const list = controlList[this.state.selectedOption];

//     return (
//       <React.Fragment>
//         {list.map((item) => {
//           return (
//             <div className='input-control flex_1' key={item.event}>
//               <label>{item.label}</label>
//               <input
//                 type='number'
//                 onChange={(e) => this.onInputChange(e, item.event)}
//                 value={this.state.details[item.event]}
//               />
//             </div>
//           );
//         })}
//       </React.Fragment>
//     );
//   }

//   render() {
//     return (
//       <div className='wrapper'>
//         <div className='wrapperInner'>
//           <h2 className='heading'>Car Finance Calculator</h2>
//           <form onSubmit={(e) => this.onSubmitHandle(e)}>
//             <div className='select-control'>
//               <label>Please Select Type</label>
//               <Select
//                 options={selectOptions}
//                 onChange={(obj) => this.onChangeHandle(obj)}
//                 isSearchable={false}
//                 isClearable={false}
//                 defaultValue={selectOptions[0]}
//               />
//             </div>
//             <div className='form__input--control'>
//               {this.renderInputControls()}
//             </div>
//             <div className='buttonsControlWrap flex direction-column align-center'>
//               <button
//                 type='submit'
//                 className='submitBtn '
//                 data-event_tag='CalculateBtnClick'
//                 data-event_action='UserClick'
//               >
//                 Calculate
//               </button>
//               <button
//                 type='button'
//                 className='cancelBtn '
//                 data-event_tag='ClearAllClick'
//                 data-event_action='UserClick'
//                 onClick={this.clearAll}
//               >
//                 Clear All
//               </button>
//             </div>
//           </form>
//           {this.Error()}
//           {this.Results()}
//         </div>
//       </div>
//     );
//   }
// }
