export default class ApriIndex {

    constructor(state) {

        this.ast = state.ast;
        this.ulnAst = state.ulnAst;
        this.plateletCount = state.plateletCount;
    }

    calculate() {

        if(isNaN(this.ast))
            return NaN;
        
        if(isNaN(this.ulnAst))
            return NaN;

        if(isNaN(this.plateletCount))
            return NaN;

        var apriIndexNumerator = (this.ast / (this.ulnAst) * 100.00);
        var apriIndexDenominator = this.plateletCount;
        
        return (apriIndexNumerator / apriIndexDenominator).toFixed(2);
    }
}