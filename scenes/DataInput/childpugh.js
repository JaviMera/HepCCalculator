export default class ChildPughScore {

  constructor(state) {

    this.bilirubin = state.bilirubin;
    this.albumin = state.albumin;
    this.inr = state.inr;
    this.ascites = state.selectedAscites;
    this.encephalopathy = state.selectedEncephalopathy;
  }
  
  calculate() {

    if(isNaN(this.bilirubin))
      return NaN;

    if(isNaN(this.albumin))
      return NaN;

    if(isNaN(this.inr))
      return NaN;

    if(isNaN(this.ascites))
      return NaN;

    if(isNaN(this.encephalopathy))
      return NaN;

    var childResult = 0;

    if(this.bilirubin < 2.0) {
      childResult += 1;
    }
    else if(this.bilirubin >= 2.0 && this.bilirubin <= 3.0){

      childResult += 2;
    }
    else {
      childResult += 3;
    }

    if(this.albumin > 3.5) {
      childResult += 1;
    }
    else if(this.albumin >= 2.8 && this.albumin <= 3.5){

      childResult += 2;
    }
    else {
      childResult += 3;
    }

    if(this.inr < 1.7) {
      childResult += 1;
    }
    else if(this.inr >= 1.7 && this.inr <= 2.3) {
      childResult += 2;
    }
    else {
      childResult += 3;
    }

    if(this.ascites == 0) {
      childResult += 1;
    }
    else if(this.ascites == 1) {
      childResult += 2;
    }
    else {
      childResult += 3;
    }

    if(this.encephalopathy == 0) {

      childResult += 1;
    }
    else if(this.encephalopathy == 1) {
      childResult += 2;
    }
    else {
      childResult += 3;
    }

    return childResult;
  }
}