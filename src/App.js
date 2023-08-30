import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [choix, setChoix] = useState();

  const randomChoiceForThePc = () => {
    const max = 4;
    const min = 1;

    const randomNumber = Math.floor(Math.random() * (max - min) + min);

    var choice;

    switch (randomNumber) {
      case 1:
        choice = "rock";
        break;

      case 2:
        choice = "paper";
        break;

      case 3:
        choice = "scissor";
        break;

      default:
        break;
    }
    // console.log(choice)
    // switch(random)
    // {
    //   case 1:
    //     choice = "rock";
    //     break;
    //   case 2:
    //     choice = "paper";
    //     break;
    //   case 3:
    //     choice = "scissor";
    //     break;
    // }
    return choice;
  };

  const handleClick = () => {
    var pcChoix = randomChoiceForThePc();
    console.log(pcChoix);
    console.log(choix);

    if (pcChoix === choix) {
      alert("Vous etes execo avec l'ordinateur !");
      console.log("Vous etes execo avec l'ordinateur !");
    
    // } else if (
    //   (randomChoiceForThePc() === "rock" && choix === "paper") ||
    //   (randomChoiceForThePc() === "paper" && choix === "scissor") ||
    //   (randomChoiceForThePc() === "scissor" && choix === "rock")
    // ) {
    //   // alert("Vous avez gagné contre l'ordinateur");
    //   console.log("Vous avez gagné contre l'ordinateur");
    }else if((pcChoix === "rock" && choix === "paper")){
     alert("Vous avez gagné contre l'ordinateur");
    }else if((pcChoix === "paper" && choix === "scissor")){
      alert("Vous avez gagné contre l'ordinateur");
    }else if((pcChoix === "scissor" && choix === "rock")){
      alert("Vous avez gagné contre l'ordinateur");
    } else {
      // alert("Vous avez perdu contre l'ordinateur !");
      alert("Vous avez perdu contre l'ordinateur !");
    }
    randomChoiceForThePc("");
    setChoix("");
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="w-full gap-5 h-fit py-10 flex-col flex justify-center items-center ">
      <div>
        <h1 className="font-bold text-4xl">ROCK PAPER SCISSOR</h1>
      </div>
      <div className="w-[80%] h-fit p-10 border-black shadow-xl">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="font-bold ">Vous</h1>
          </div>
          <div>
            <h1 className="font-bold ">L'ordinateur</h1>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-between border-2 flex-row">
          <div className="w-[550px] h-[300px] contain "></div>
          <div className="w-[1px] h-[200px] bg-gray-800"></div>
          <div className="w-[550px] h-[300px] contain"></div>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center w-[83%] h-fit p-10 border-black border-2">
        <h1 className="text-gray-800 text-2xl">Faites Votre Choix !</h1>
        <div className="w-[450px] h-[1px] bg-slate-600"></div>
        <div className="gap-2 flex flex-row justify-between">
          <div
            className="w-[200px] focus:ring focus:ring-green-600 active:bg-green-600 h-[200px] border-1 shadow-sm cursor-pointer"
            onClick={(e) => {
              setChoix("rock");
            }}
          >
            <svg
              fill="#000000"
              width="100%"
              height="100%"
              viewBox="0 0 36 36"
              version="1.1"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>cursor-hand-grab-line</title>
              <path
                d="M28.09,9.74a4,4,0,0,0-1.16.19c-.19-1.24-1.55-2.18-3.27-2.18A4,4,0,0,0,22.13,8,3.37,3.37,0,0,0,19,6.3a3.45,3.45,0,0,0-2.87,1.32,3.65,3.65,0,0,0-1.89-.51A3.05,3.05,0,0,0,11,9.89v.91c-1.06.4-4.11,1.8-4.91,4.84s.34,8,2.69,11.78a25.21,25.21,0,0,0,5.9,6.41.9.9,0,0,0,.53.17H25.55a.92.92,0,0,0,.55-.19,13.13,13.13,0,0,0,3.75-6.13A25.8,25.8,0,0,0,31.41,18v-5.5A3.08,3.08,0,0,0,28.09,9.74ZM29.61,18a24,24,0,0,1-1.47,9.15A12.46,12.46,0,0,1,25.2,32.2H15.47a23.75,23.75,0,0,1-5.2-5.72c-2.37-3.86-3-8.23-2.48-10.39A5.7,5.7,0,0,1,11,12.76v7.65a.9.9,0,0,0,1.8,0V9.89c0-.47.59-1,1.46-1s1.49.52,1.49,1v5.72h1.8V8.81c0-.28.58-.71,1.46-.71s1.53.48,1.53.75v6.89h1.8V10l.17-.12a2.1,2.1,0,0,1,1.18-.32c.93,0,1.5.44,1.5.68l0,6.5H27V11.87a1.91,1.91,0,0,1,1.12-.33c.86,0,1.52.51,1.52.94Z"
                class="clr-i-outline clr-i-outline-path-1"
              ></path>
              <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
            </svg>
          </div>
          <div
            className="w-[200px] h-[200px] focus:ring focus:ring-green-600 active:bg-green-600 border-1 shadow-sm cursor-pointer"
            onClick={(e) => {
              setChoix("paper");
            }}
          >
            <svg
              fill="#000000"
              width="100%"
              height="100%"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 16 2 C 14.617188 2 13.46875 2.96875 13.125 4.25 C 12.773438 4.105469 12.402344 4 12 4 C 10.355469 4 9 5.355469 9 7 L 9 17.75 L 8.125 16.875 C 6.960938 15.710938 5.039063 15.710938 3.875 16.875 C 2.710938 18.039063 2.710938 19.960938 3.875 21.125 L 10.65625 27.90625 C 11.832031 29.078125 13.457031 30 15.375 30 L 20 30 C 23.855469 30 27 26.855469 27 23 L 27 11 C 27 9.355469 25.644531 8 24 8 C 23.648438 8 23.316406 8.074219 23 8.1875 L 23 7 C 23 5.355469 21.644531 4 20 4 C 19.597656 4 19.226563 4.105469 18.875 4.25 C 18.53125 2.96875 17.382813 2 16 2 Z M 16 4 C 16.566406 4 17 4.433594 17 5 L 17 15 L 19 15 L 19 7 C 19 6.433594 19.433594 6 20 6 C 20.566406 6 21 6.433594 21 7 L 21 15 L 23 15 L 23 11 C 23 10.433594 23.433594 10 24 10 C 24.566406 10 25 10.433594 25 11 L 25 23 C 25 25.773438 22.773438 28 20 28 L 15.375 28 C 14.101563 28 13.007813 27.378906 12.09375 26.46875 L 5.28125 19.71875 C 4.882813 19.320313 4.882813 18.679688 5.28125 18.28125 C 5.679688 17.882813 6.320313 17.882813 6.71875 18.28125 L 9.28125 20.875 L 11 22.59375 L 11 7 C 11 6.433594 11.433594 6 12 6 C 12.566406 6 13 6.433594 13 7 L 13 15 L 15 15 L 15 5 C 15 4.433594 15.433594 4 16 4 Z" />
            </svg>
          </div>
          <div
            className="w-[200px] h-[200px] focus:ring focus:ring-green-600 active:bg-green-600 border-1 shadow-sm cursor-pointer"
            onClick={(e) => {
              setChoix("scissor");
            }}
          >
            <svg
              fill="#000000"
              width="100%"
              height="100%"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 11.40625 6.96875 C 10.578125 6.953125 9.890625 7.125 9.46875 7.25 C 9.457031 7.25 9.449219 7.25 9.4375 7.25 L 6.9375 8.03125 C 4.003906 8.933594 2 11.652344 2 14.71875 L 2 20 C 2 23.855469 5.144531 27 9 27 L 18.90625 27 C 20.125 27.027344 21.304688 26.3125 21.78125 25.125 C 22.082031 24.371094 22.039063 23.578125 21.75 22.875 C 22.363281 22.550781 22.882813 22.027344 23.15625 21.34375 C 23.46875 20.558594 23.417969 19.722656 23.09375 19 L 27 19 C 28.644531 19 30 17.644531 30 16 C 30 14.355469 28.644531 13 27 13 L 25.46875 13 L 25.875 12.875 C 27.449219 12.398438 28.351563 10.699219 27.875 9.125 C 27.398438 7.550781 25.699219 6.648438 24.125 7.125 L 15.6875 9.71875 C 15.613281 9.53125 15.527344 9.328125 15.40625 9.125 C 14.90625 8.289063 13.894531 7.34375 12.28125 7.0625 C 11.980469 7.011719 11.683594 6.972656 11.40625 6.96875 Z M 25.125 9 C 25.515625 9.042969 25.847656 9.3125 25.96875 9.71875 C 26.132813 10.257813 25.820313 10.804688 25.28125 10.96875 L 18.4375 13.03125 L 18.78125 14.15625 L 18.78125 15 L 27 15 C 27.566406 15 28 15.433594 28 16 C 28 16.566406 27.566406 17 27 17 L 20.40625 17 L 17.78125 15.96875 C 17.402344 15.816406 17.011719 15.742188 16.625 15.75 L 16.09375 11.65625 L 24.71875 9.03125 C 24.855469 8.988281 24.996094 8.984375 25.125 9 Z M 11.375 9.03125 C 11.566406 9.03125 11.765625 9.03125 11.9375 9.0625 C 13.011719 9.25 13.425781 9.71875 13.6875 10.15625 C 13.949219 10.59375 13.96875 10.90625 13.96875 10.90625 C 13.96875 10.925781 13.96875 10.949219 13.96875 10.96875 L 14.8125 17.40625 C 14.820313 17.4375 14.832031 17.46875 14.84375 17.5 C 14.96875 18.027344 14.652344 18.53125 14.125 18.65625 C 13.800781 18.734375 13.636719 18.691406 13.46875 18.59375 C 13.300781 18.496094 13.09375 18.289063 12.9375 17.84375 L 11.6875 13 C 11.609375 12.703125 11.398438 12.460938 11.121094 12.339844 C 10.839844 12.21875 10.519531 12.230469 10.25 12.375 L 8.59375 13.28125 C 8.109375 13.546875 7.933594 14.15625 8.203125 14.640625 C 8.46875 15.125 9.078125 15.300781 9.5625 15.03125 L 10.0625 14.75 L 11.03125 18.4375 C 11.039063 18.46875 11.050781 18.5 11.0625 18.53125 C 11.332031 19.304688 11.792969 19.925781 12.4375 20.3125 C 12.964844 20.628906 13.578125 20.75 14.1875 20.6875 C 13.871094 20.980469 13.609375 21.355469 13.4375 21.78125 C 12.980469 22.925781 13.269531 24.183594 14.09375 25 L 9 25 C 6.226563 25 4 22.773438 4 20 L 4 14.71875 C 4 12.519531 5.429688 10.585938 7.53125 9.9375 L 10.03125 9.1875 C 10.234375 9.125 10.804688 9.03125 11.375 9.03125 Z M 16.8125 17.78125 C 16.886719 17.792969 16.957031 17.78125 17.03125 17.8125 L 20.75 19.3125 C 21.273438 19.523438 21.523438 20.070313 21.3125 20.59375 C 21.101563 21.117188 20.523438 21.367188 20 21.15625 L 16.28125 19.6875 C 16.226563 19.667969 16.203125 19.621094 16.15625 19.59375 C 16.550781 19.085938 16.804688 18.445313 16.8125 17.78125 Z M 16.1875 21.90625 C 16.320313 21.90625 16.460938 21.917969 16.59375 21.96875 L 17.9375 22.5 L 19.25 23.03125 L 19.375 23.0625 C 19.898438 23.273438 20.148438 23.851563 19.9375 24.375 C 19.785156 24.757813 19.445313 24.980469 19.0625 25 C 19.050781 25 19.042969 25 19.03125 25 C 18.898438 25.003906 18.757813 24.988281 18.625 24.9375 L 15.84375 23.8125 C 15.320313 23.601563 15.070313 23.023438 15.28125 22.5 C 15.386719 22.238281 15.578125 22.070313 15.8125 21.96875 C 15.929688 21.917969 16.054688 21.90625 16.1875 21.90625 Z" />
            </svg>
          </div>
        </div>
        <div>
          <button
            className="w-[350px] p-5 flex items-center justify-center h-[55px] rounded-xl text-[1.3rem] bg-indigo-900 text-white cursor-pointer"
            onClick={handleClick}
          >
            Ook
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
