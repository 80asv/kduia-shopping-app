import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
import CartBudget from './components/CartBugdet';
import Remaining from './components/Remaining';
import SpentSoFar from './components/SpentSoFar';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's buget location</h1>
                <div className='flex w-full gap-2'> 
                    <CartBudget />
                    <div className='flex-1'>
                        <Remaining />
                    </div>
                    <SpentSoFar />
                    <div className='flex-1'>
                        <Location />
                    </div>
                </div>
                <h3 className='mt-3'>Shopping Cart</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change Allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <ItemSelected/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;