import {calculateInvestmentResults, formatter} from "../util/investment.js";

const Result = ({result}) => {
    const resultData = calculateInvestmentResults(result);
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
    return (
        <table className="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
                {resultData.map(element => {
                    const total = element.valueEndOfYear - element.annualInvestment * element.year - initialInvestment;
                    const totalInvested = element.valueEndOfYear - total;

                    return <tr key={element.year}>
                        <td>{element.year}</td>
                        <td>{formatter.format(element.valueEndOfYear)}</td>
                        <td>{formatter.format(element.interest)}</td>
                        <td>{formatter.format(total)}</td>
                        <td>{formatter.format(totalInvested)}</td>
                    </tr>
                }
                )}
            </tbody>
        </table>
    );
};

export default Result;