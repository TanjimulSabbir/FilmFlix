import './App.css'
import Home from './components/Home/Home';

function App() {
  return (
    <div className='h-screen w-screen py-10 flex items-center justify-center space-x-2'>
      {/* <div className='snake w-10 h-4 bg-teal-600 rounded'>
       
      </div> */}
      <h1 className='name rounded-full flex items-center justify-center text-black'>Hi!</h1>
      <h1 className='name2 rounded-full flex items-center justify-center text-black'>I'm Tanjimul Sabbir!</h1>
      <h1 className='name3 h-12 rounded-full flex items-center justify-center text-black'>You are welcomed to my portfolio!</h1>
    </div>
  )
}

export default App;
