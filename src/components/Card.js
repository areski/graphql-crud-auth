import React from 'react';


function Card() {
  return (
    <div class="w-64 rounded overflow-hidden shadow-lg">
      <img class="w-full" src="https://www.fillmurray.com/300/300" alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Card Title</div>
        <p class="text-gray-700 text-base">
          Some quick example text
         </p>
      </div>
      <div class="px-6 py-4">
        <button class="bg-blue-800 py-2 px-2 rounded text-white">Go Somewhere</button>
      </div>
    </div>
  );
}

export default Card;
