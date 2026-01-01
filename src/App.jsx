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
            className="px-3 py-1 rounded-3xl text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black focus:outline-none"
            style={{ backgroundColor: "green" }}
            aria-pressed={color === "green"}
            aria-label="Set background color to Green"
            onClick={() => setColor("green")}
          >
            Green
          </button>
              <button
            className="px-3 py-1 rounded-3xl text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black focus:outline-none"
            style={{ backgroundColor: "red" }}
            aria-pressed={color === "red"}
            aria-label="Set background color to Red"
            onClick={() => setColor("red")}
          >
            Red
          </button>
                <button
            className="px-3 py-1 rounded-3xl text-black focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black focus:outline-none"
            style={{ backgroundColor: "yellow", color: "#000" }}
            aria-pressed={color === "yellow"}
            aria-label="Set background color to Yellow"
            onClick={() => setColor("yellow")}
          >
           Yellow
          </button>
            <button
            className="px-3 py-1 rounded-3xl text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black focus:outline-none"
            style={{ backgroundColor: "pink" }}
            aria-pressed={color === "pink"}
            aria-label="Set background color to Pink"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
           <button
            className="px-3 py-1 rounded-3xl text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black focus:outline-none"
            style={{ backgroundColor: "purple" }}
            aria-pressed={color === "purple"}
            aria-label="Set background color to Purple"
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
        </div>
        {/* Announce color changes to assistive technologies */}
        <div aria-live="polite" className="sr-only">{`Background color changed to ${color}`}</div>
      </div>
    </div>
  )
}

export default App
