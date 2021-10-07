export default class Fibrosis4 {

  constructor(state) {

    this.age = state.age;
    this.ast = state.ast;
    this.plateletCount = state.plateletCount;
    this.alt = state.alt;
  }

  calculate() {

      if(isNaN(this.age))
        return NaN;

      if(isNaN(this.ast))
        return NaN;

      if(isNaN(this.plateletCount))
        return NaN;

      if(isNaN(this.alt))
        return NaN;
        
      var fibrosisNumerator = this.age * this.ast;
      var fibrosisDenominator = this.plateletCount * Math.sqrt(this.alt);
      return (fibrosisNumerator / fibrosisDenominator).toFixed(2);
  }
}