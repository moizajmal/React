import classes from './ResultsTable.module.css'
const ResultsTable =(props)=>
{
    console.log(props.data.length);
    return(
        <table className={classes.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
            {props.data.map((yearData) =>
            (
             <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{yearData.savingsEndOfYear}</td>
            <td>{yearData.yearlyInterest}</td>
            <td>{yearData.savingsEndOfYear - props.initalInvestment - yearData.yearlyInterest * yearData.year}</td>
            <td>{props.initalInvestment + yearData.yearlyInterest * yearData.year}</td>
          </tr>
            ))
            }
      
        </tbody>
      </table>
    );
};

export default ResultsTable;