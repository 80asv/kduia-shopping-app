import { useContext } from "react"
import { AppContext } from "../context/AppContext";

export default function SpentSoFar() {
    const { totalExpenses, Location } = useContext(AppContext);
    return(
        <div className='border flex gap-2 items-center flex-1 border-solid border-gray-300 bg-gray-100 rounded-lg h-fit p-2.5'>
            <h3 className='text-base font-normal my-0'>Spent so far:</h3>
            <span>{Location}{totalExpenses}</span>
        </div>
    )
}