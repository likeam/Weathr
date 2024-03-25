export default function App() {
  return (
    <div className="w-full h-screen text-white px8">
      <nav className="flex items-center justify-center p-3">
        <h1 className="text-3xl font-bold tracking-wide">Weather App</h1>
        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          <img src={} alt="search" />
          <input type="text" className=" focus:outline-none w-full text-[#212121] text-lg" />
        </div>        
      </nav>
    </div>
  )
}