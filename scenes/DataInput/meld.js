const BILIRUBIN_MULTIPLIER = 3.8;
const INR_MULTIPLIER = 11.2;
const CREATININE_MULTIPLIER = 9.6;

export default class Meld {

  constructor(state) {

    this.bilirubin = state.bilirubin;
    this.inr = state.inr;
    this.dialysis = state.selectedDialysis;
    this.creatinine = state.creatinine;
  }

  calculate() {

    if(isNaN(this.bilirubin))
      return NaN;

    if(isNaN(this.inr))
      return NaN;
    
    if(isNaN(this.dialysis))
      return NaN;
    
    if(isNaN(this.creatinine))
      return NaN;

    var bilirubinResult = BILIRUBIN_MULTIPLIER * Math.log(this.bilirubin < 1.0 ? 1.0 : this.bilirubin).toFixed(2);
    var inrResult = INR_MULTIPLIER * Math.log(this.inr < 1.0 ? 1.0 : this.inr).toFixed(2);

    this.creatinine = this.creatinine < 1.0 ? 1.0 : this.creatinine
    var creatinineResult = CREATININE_MULTIPLIER * Math.log(this.dialysis == 0 ? 4.0 : this.creatinine).toFixed(2);
    var totalResult = (bilirubinResult + inrResult + creatinineResult + 6.4).toFixed(1);
    var decimalPlace = totalResult - parseInt(totalResult);

    if(decimalPlace >= .5)
      totalResult = Math.ceil(totalResult);
    else {
      totalResult = Math.floor(totalResult);
    }

    return totalResult;
  }
}