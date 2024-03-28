import { useState } from "react";

export default function MoviesHome() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pt-24 container mx-auto">
      {/* Button to toggle the collapse */}
      <button onClick={() => setIsOpen(!isOpen)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Toggle Collapse
      </button>

      {/* Collapsible content */}
      <div className={`absolute transition-all ease-in-out duration-500 ${isOpen ? 'py-8 opacity-100' : ' py-0 opacity-0'}`}>
        <p className="p-4">Collapsible content goes here...</p>
      </div>
    </div >
  )
}
