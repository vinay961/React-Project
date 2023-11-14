
import './App.css'
import useCounter from './CustomHooks/Hook.js'

function App() {
  const {count,increment,decrement,reset} = useCounter(0,1);
  return (
    <div className="p-4 bg-gray-200 rounded-md text-3xl text-center my-4">
      <h1 className='m-2'>Basic Custom Hook</h1>
      <p>Count: {count}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={increment}>Increment</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={decrement}>Decrement</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2" onClick={reset}>Reset</button>
    </div>
  )
}

export default App
