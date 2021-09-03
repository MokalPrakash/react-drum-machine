import { useEffect, useState } from "react";

const keys1 = [
  {
  text:'Q',
  url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  keyString:'q'
  },
  {
    text:'W',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    keyString:'w'
  },
  {
    text:'E',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    keyString:'e'
  },
  {
    text:'A',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    keyString:'a'
  },
  {
    text:'S',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    keyString:'s'
  },
  {
    text:'D',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    keyString:'d'
  },
  {
    text:'Z',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    keyString:'z'
  },
  {
    text:'X',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    keyString:'x'
  },
  {
    text:'C',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    keyString:'c'
  }
]


function App() {
  const [display,setDisplay] = useState()  
  return (
    <div className='container' id='drum-machine'>
      <div className='display'>
        <div className='display-container'>
        {keys1.map((key,index)=>{
          return (
            <Drumpad key={index} 
            keys={key}
            setDisplay = {setDisplay}
            />
          )
        })}
        </div>
        <div className='display-label' id='display'>
          <h5>{display}</h5>
        </div>
      </div>
      <div></div>
    </div>
  );
}

const Drumpad = ({keys,setDisplay})=>{
  useEffect(() => {
    document.addEventListener('keydown', onKeyHandler);
    return () => {
      document.removeEventListener('keydown', onKeyHandler)
    }
  }, [])
  const playSound = ()=>{
    let audio = document.getElementById(keys.text)
    audio.cureentTime = 0
    audio.play()
    setDisplay(audio.id)
  }
  const onKeyHandler = (event)=>{
    if (event.key === keys.keyString){
      playSound()
    } 
  }
  return (
    <div className='drumpad'
    id={`drumpad-${keys.text}`} 
    onClick={playSound}
    onKeyDown={onKeyHandler}
    >
      {keys.text}
      <audio src={keys.url} className='clip'id={keys.text}></audio>
    </div>
  )
}

// document.addEventListener('keypress',(event)=>{
//   //console.log(event.key)
//   switch(event.key){
//     case 'q':
//       document.getElementById("Q").play()
//       setDisplay("Q")
//       break;
//     case 'w':
//       document.getElementById("W").play()
//       setDisplay("W")
//       break;
//     case 'e':
//       document.getElementById("E").play()
//       setDisplay("E")
//       break;
//     case 'a':
//       document.getElementById("A").play()
//       setDisplay("A")
//       break
//     case 's':
//       document.getElementById("S").play()
//       setDisplay("S")
//       break
//     case 'd':
//       document.getElementById("D").play()
//       break
//     case 'z':
//       document.getElementById("Z").play()
//       setDisplay("Z")
//       break
//     case 'x':
//       document.getElementById("X").play()
//       setDisplay("X")
//       break
//     case 'c':
//       document.getElementById("C").play()
//       setDisplay("C")
//       break
//     default:
//       break
//   }
// })

export default App;
