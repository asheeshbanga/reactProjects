import { calculateInvestmentResults, formatter } from "../util/investment";

export default function InvestmentResults({ input }) {

    const resultsData = calculateInvestmentResults(input);
    const initialInvestment =
        resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

    console.log(resultsData);

    return (
        <>
            {resultsData &&
                <table id="result">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Investment Value</th>
                            <th>Interest(Year)</th>
                            <th>Total Interest</th>
                            <th>Invested Capital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultsData.map((item) => {
                            const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
                            const totalAmountInvested = item.valueEndOfYear - totalInterest;
                            return (
                                <tr key={item.year}>
                                    <th>{item.year}</th>
                                    <th>{formatter.format(item.valueEndOfYear)}</th>
                                    <th>{formatter.format(item.interest)}</th>
                                    <th>{formatter.format(totalInterest)}</th>
                                    <th>{formatter.format(totalAmountInvested)}</th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
        </>
    )
} 