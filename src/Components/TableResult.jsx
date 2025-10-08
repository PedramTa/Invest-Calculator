import { calculateInvestmentResults } from "../util/investment"
import { formatter } from "../util/investment"
const theader = ['Year', 'Investment Value', 'Interest (Year)', 'Total Interest', 'Invested Capital']
export default function TableResult({data,inputs}) {
    const resultData = calculateInvestmentResults(inputs);
    let totalInterest = 0;
    let investedCapital = 0;
    return (
        <div>
            <div >

                <table id="result">
                    <thead>
                        <tr >
                            {theader.map(item => <th key={item}>{item}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        { resultData && resultData.map(yeardata => {
                           investedCapital += yeardata.annualInvestment;
                            totalInterest += yeardata.interest;
                            return(
                            <tr key={yeardata.year}>
                                <td >{yeardata.year}</td>
                                <td >{formatter.format(yeardata.valueEndOfYear)}</td>
                                <td >{formatter.format(yeardata.interest)}</td>
                                <td >{formatter.format(totalInterest)}</td>
                                <td >{formatter.format(investedCapital)}</td>
                            </tr>);
                        })}
                    </tbody>

                </table>
            </div>
        </div>
    )
}