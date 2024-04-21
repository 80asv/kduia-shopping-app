import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaMinusCircle, FaPlusCircle, FaTimesCircle} from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location, budget, totalExpenses } = useContext(AppContext);

    const remaning = budget - totalExpenses;

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };
        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handleDecreaseBy10 = () => {
        console.log('props.unitprice', props.unitprice);
        if (parseInt(props.unitprice) > 0) {
            dispatch({
                type: 'DECREASE_BY_10',
                payload: { name: props.name },
            });
        } else {
            alert("No se puede decrementar ya que el precio unitario ya es 0");
        }
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{Location}{parseInt(props.unitprice)}</td>
        <td>
            <button onClick={() => props.handleIncreaseBy10(props.name)}>
                <FaPlusCircle size='2.2em' color="green"></FaPlusCircle>
            </button>
        </td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDecreaseBy10}></FaMinusCircle></td>
        <td><FaTimesCircle size='2.2em' color="black" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
    
};

export default ExpenseItem;
