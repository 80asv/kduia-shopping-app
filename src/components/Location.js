import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

	const changeLocation = (val)=>{
			dispatch({
				type: 'CHG_LOCATION',
				payload: val,
			})
	}
	

  return (
		<div className='alert alert-secondary'> Currency: {
      <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
        <option value="$" className="bg-green-200 text-black">$ Dollar</option>
        <option value="£" className="bg-green-200 text-black">£ Pound</option>
        <option value="€" className="bg-green-200 text-black">€ Euro</option>
        <option value="₹" className="bg-green-200 text-black">₹ Ruppee</option>
      </select>	
      }	
    </div>
	);
};

export default Location;