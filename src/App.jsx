import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { CrossIcon } from './components/icons/CrossIcon'
import { MoonIcon } from './components/icons/MoonIcon'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-no-repeat bg-contain min-h-screen">
      <header className='container mx-auto px-4 pt-8'>
        <div className='flex justify-between'>
          <h1 className='uppercase  text-white text-3xl font-semibold tracking-[0.3em]'>Todo</h1>
          <button>
            <MoonIcon className="fill-red-400"/>
          </button>

        </div>
        <form action="" className=' mt-8 bg-white rounded-md overflow-hidden py-4 px-4 flex gap-4 items-center'>
          <span className='rounded-full border-2 w-5 h-5 inline-block'></span>
          <input className='w-full text-gray-400 outline-none' type="text" name="" id="" placeholder='Create a new todo...' />
        </form>

      </header>
      <main className='container mx-auto px-4 mt-8'>
        <div className='rounded-md bg-white [&>article]:p-4'>

          <article className='flex gap-4  border-b border-b-gray-400'>
            <button className='rounded-full border-2 w-5 h-5 inline-block'></button>
            <p className='text-gray-600 grow'>Complete online curse in blueweb</p>
            <button className='flex-none'><CrossIcon /></button>
          </article>

          <article className='flex gap-4  border-b border-b-gray-400'>
            <button className='rounded-full border-2 w-5 h-5 inline-block'></button>
            <p className='text-gray-600 grow'>Complete online curse in blueweb</p>
            <button className='flex-none'><CrossIcon /></button>
          </article>

          <article className='flex gap-4  border-b border-b-gray-400'>
            <button className='rounded-full border-2 w-5 h-5 inline-block'></button>
            <p className='text-gray-600 grow'>Complete online curse in blueweb</p>
            <button className='flex-none'><CrossIcon /></button>
          </article>

          <section className='py-4 px-4 flex justify-between'>
            <span className='text-gray-400'>5 item left</span>
            <button className='text-gray-400'>Clear Completed</button>
          </section>
        </div>
      </main>

      <section className='container px-4 mx-auto mt-8'>
        <div className='bg-white p-4 flex gap-4 justify-center rounded-md'>
          <button className='text-blue-600'>All</button>
          <button className='hover:text-blue-600'>Active</button>
          <button className='hover:text-blue-600'>Completed</button>
        </div>

      </section>

      <p className='text-center mt-8'>
        Drag and drop to reorder list
      </p>
    </div>

  )
}

export default App
