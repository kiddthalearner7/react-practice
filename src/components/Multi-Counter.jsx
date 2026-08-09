import { useState } from "react";

function MultiCounter(){
    const [count,setCount] = useState(0)

    function decreaseCount(){
        if(count === 0){
            setCount(0)
        }else{
            setCount(count - 1)
        }
        }
        
    

    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-row gap-8 items-center">
          <button
            onClick={ decreaseCount}
            className="bg-red-600 p-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14"
              />
            </svg>
          </button>
          <p> {count} </p>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 p-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    );
}

export default MultiCounter