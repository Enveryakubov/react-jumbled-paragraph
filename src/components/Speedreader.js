import {useState, useRef} from 'react'


const Speedreader = () => {
  const [result, setResult] = useState("")
  const [show, setShow] = useState(true)
  const refff = useRef()
  const text = useRef("")

  

  const submitHandler = (e) => {
    e.preventDefault()
    if (refff.current.value === "") {
      return alert("Введите текст")
    }

    setShow(!show)
    text.current = refff.current.value

    let arr = text.current.split(" ")
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      async function demo(speed) {
        for (let i = 0; i < arr.length; i++) {
         await sleep(speed);
         setResult(prev => prev + arr[i] + " ")
        }
      }
      demo(300)
  }
  const repeat = () => {
    setResult("")
    setShow(!show)
  }

  const clearAll = () => {
    refff.current.value=""
    setResult("")
    setShow(!show)
  }
    return (
        <>
          <h1>Скорочтение</h1>
          { show &&
          <div style={{backgroundColor:"#d9dab0", padding:"20px", borderRadius:"5px"}}>
            <h2 style={{color:"white"}}>Введите текст</h2>
            <form onSubmit={submitHandler}>
              <textarea
              ref={refff}
              type="text"
              style={{width:"60%", height:"100px", borderRadius:"5px", marginBottom:"20px", padding:"20px"}}
              name="Para"
              >
              </textarea>
              <br/>
              <div className="jumbler-btn">
                <button type="submit" className="btn-main">Начать</button>
                {result && <button onClick={clearAll} style={{backgroundColor:"#7c9473"}}>Очистить все</button>}
              </div>
            </form>
          </div>}
          { !show && 
          <div>
            <div style={{width:"60%", minHeight:"100px", backgroundColor:"white", margin:'auto', textAlign:"left", padding:"20px", marginTop:"20px", marginBottom:"20px"}}>
                <p>{result}</p>
            </div>
            <button className="btn-main" onClick={repeat}>Вернуться</button>
          </div>
          }
        </>
    )
}

export default Speedreader


