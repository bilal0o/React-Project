import { useState } from "react"

function App() {
  const [color, setColor] = useState('blue')

  return (
    <div
      className="w-full h-screen"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap fixed px-2 bottom-2 inset-x-1.5 justify-center">
        <div className="flex flex-wrap gap-3 px-3 py-2 bg-white">
          <button
            className="px-3 py-1 rounded-3xl text-white outline-none"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
              <button
            className="px-3 py-1 rounded-3xl text-white outline-none"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
                <button
            className="px-3 py-1 rounded-3xl text-white outline-none"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
           Yellow
          </button>
            <button
            className="px-3 py-1 rounded-3xl text-white outline-none"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
           <button
            className="px-3 py-1 rounded-3xl text-white outline-none"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            purple
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
