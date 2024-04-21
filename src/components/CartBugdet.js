import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CartBudget = () => {
    const { budget, dispatch, CartValue } = useContext(AppContext);
    const [initialValue, setInitialValue] = useState(budget);
    const [showButton, setShowButton] = useState(false);

    const handleInitialValueChange = (e) => {
        const newValue = parseInt(e.target.value);
        console.log({ newValue: newValue });
        setInitialValue(newValue);
        setShowButton(newValue !== budget);
    }

	const changeBudget = (val)=>{
        console.log({ val: val.target.value });
        dispatch({
            type: 'MODIFY_BUDGET',
            payload: initialValue,
        });
        setShowButton(false);
    }

    const error = (isNaN(initialValue) ||initialValue < 0 || initialValue < (budget - CartValue) || initialValue > 20000);

    return (
        <div className='alert alert-primary flex flex-col items-center gap-2'>        
        <div className='flex gap-2 items-center'>
            <h3 className='font-normal text-base my-0'>Budget</h3>
            <div className='flex'>
                <span>{Location}</span>
                <input type='number' step={10} value={initialValue} onChange={handleInitialValueChange} />
            </div>
        </div>
        {error ? (
            <div className='border max-w-[260px] my-1 border-solid border-red-300 bg-red-100 py-2 text-sm text-red-600 rounded-lg' role='alert'>
                {initialValue < 0 && <p className='my-0'>The initial value cannot be less than 0.</p>}
                {initialValue < (budget - CartValue) && <p className='my-0'>The initial value cannot be less than what has already been spent.</p>}
                {initialValue > 20000 && <p className='my-0'>The initial value cannot be greater than 20000.</p>}
                {isNaN(initialValue) && <p className='my-0'>The initial value must be a number.</p>}
            </div>
        ) : showButton ? (
            <button onClick={changeBudget} className='bg-green-200 w-full py-1 rounded-lg border border-solid border-green-500'>
                Save
            </button>
        ) : null}
    </div>
      
    );
};

export default CartBudget;
