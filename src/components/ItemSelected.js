import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = (props) => {
    const { dispatch, expenses, Location, remaning } = useContext(AppContext);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [action, setAction] = useState('Add');
    

    const submitEvent = () => {
        if (name === '') {
            alert('Please select an item');
            return;
        }
        if (quantity === '') {
            alert('Please enter a quantity');
            return;
        }
        if (isNaN(quantity)) {
            alert('Please enter a valid number');
            return;
        }
        if (parseInt(quantity) <= 0) {
            alert('Please enter a number greater than 0');
            return;
        }
        if (remaning <= 0 && action === 'Add') {
            alert('Cannot increase because remaining is equal to 0');
            return;
        }
        if (parseInt(quantity) > remaning && action === 'Add') {
            alert('Cannot increase because the quantity is greater than the remaining');
            return;
        }
        if (parseInt(quantity) > remaning && action === 'Reduce') {
            alert('Cannot decrease because the quantity is greater than the remaining');
            return;
        }  
        dispatch({
            type: 'EDIT_UNITPRICE',
            payload: {
                name,
                typeOperation: action === 'Add' ? 'increment' : 'decrement',
                value: parseInt(quantity),
            },
        });
    
    };



    console.log({ expenses, name})

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Items</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue value="" name="">Select an item</option>
                        {expenses.map((expense) => (
                            <option value={expense.name} name={expense.name}>{expense.name}</option>
                        ))}
                  </select>
                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                  </select>  
                  <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px'}}>{Location}</span>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={quantity}
                        className='border border-solid border-gray-300 p-1 w-20 rounded-md'
                        onChange={(event) => setQuantity(event.target.value)}/>
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
                </div>

        </div>
    );
};

export default ItemSelected;
