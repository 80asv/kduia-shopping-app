import { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
	let new_expenses = [];
	console.log('action', {action});
	switch (action.type) {
		case 'MODIFY_BUDGET':
			if (typeof action.payload === 'number') {
				state.budget = action.payload;
			}
			return {
				...state,
			};
		case 'INCREASE_BY_10':
			state.expenses = state.expenses.map((expense) => {
				if (expense.name === action.payload.name) {
					return { ...expense, unitprice: expense.unitprice + 5 };
				}
				return expense;
			});
			return {
				...state,
			};
		case 'DECREASE_BY_10':
			state.expenses = state.expenses.map((expense) => {
				if (expense.name === action.payload.name) {
					return { ...expense, unitprice: expense.unitprice - 5 };
				}
				return expense;
			});
			return {
				...state,
			};
		case 'EDIT_UNITPRICE':
			let updatedPrice = false;
			state.expenses = state.expenses.map((expense)=>{
				if(expense.name === action.payload.name) {
					if(action.payload.typeOperation === 'increment') {
						expense.unitprice += action.payload.value;
					} else if(action.payload.typeOperation === 'decrement') {
						expense.unitprice -= action.payload.value;
					}
					updatedPrice = true;
				}
				return expense;
			});
			if(!updatedPrice) {
				// Si el item no estaba en la lista y se está agregando
				// Aquí podrías agregar lógica para manejar este caso
			}
			action.type = "DONE";
			return {
				...state,
			};
		case 'DELETE_ITEM':
			state.expenses = state.expenses.filter((expense) => expense.name !== action.payload.name);
			action.type = "DONE";
			return {
				...state,
			};
		case 'CHG_LOCATION':
				action.type = "DONE";
				state.Location = action.payload;
				return {
					...state
				}
			default:
				return state;
	}
};

// 1. Sets the initial state when the app loads
const initialState = {
	budget: 2000,
	expenses: [
		{ id: "Shirt", name: 'Shirt', quantity: 1, unitprice: 50 },
		{ id: "Jeans", name: 'Jeans', quantity: 1, unitprice: 300 },
		{ id: "Dress", name: 'Dress', quantity: 1, unitprice: 70 },
		{ id: "Dinner set", name: 'Dinner set', quantity: 1, unitprice: 40 },
		{ id: "Bags", name: 'Bags', quantity: 1, unitprice: 500 },
	],
	Location: '$'
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
	// 4. Sets up the app state. takes a reducer, and an initial state
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const totalExpenses = state.expenses.reduce((total, item) => total + item.unitprice * item.quantity, 0);
	state.CartValue = totalExpenses;

	return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
				CartValue: state.CartValue,
				dispatch,
				Location: state.Location,
				budget: state.budget,
				totalExpenses,
				remaning: state.budget - totalExpenses,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};