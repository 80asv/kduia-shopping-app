import { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
  const { dispatch, budget, totalExpenses, expenses } = useContext(AppContext);

  const remaning = budget - totalExpenses;

    const handleIncreaseBy10 = (name) => {
      if (remaning > 0) {
          console.log({ name });
          dispatch({
              type: 'INCREASE_BY_10',
              payload: { name },
          });
      } else {
          alert("No se puede incrementar ya que el remaining es igual a 0");
      }
  };

    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocation budget</th>
              <th scope="col">Increase by 10</th>
              <th scope="col">Descrease by 10</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
            <tbody>
            {expenses.map((expense) => (
                <ExpenseItem handleIncreaseBy10={handleIncreaseBy10} id={expense.id} key={expense.id} name={expense.name} quantity={expense.quantity} unitprice={expense.unitprice} />
            ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
