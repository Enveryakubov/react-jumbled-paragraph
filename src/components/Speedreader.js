import {useState, useRef} from 'react'


const Speedreader = () => {
  const [result, setResult] = useState("")
  const [show, setShow] = useState(true)
  const [speed, setSpeed] = useState(120)
  const refff = useRef()
  const text = useRef("")

  let readingSpeed = Math.round((60/speed)*1000)

  const submitHandler = (e) => {
    e.preventDefault()
    if (refff.current.value === "") {
      return alert("Введите текст")
    }
    if (speed <= 0) {
      return alert("Скорость установлена не верно")
    }
    if (speed > 2000) {
      return alert("Не много ли на себя берете? )))")
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
      demo(readingSpeed)
      
      
      
  }
  const repeat = () => {
    setResult("")
    setShow(!show)
    
  }

  
    return (
        <div className="container">
          <div className="titleCont">
            <div className="container title">Скорочтение</div>
          </div>
          { show &&
          <div className="container sph">
            <h5 style={{color:"#493323"}}>1. Введите текст</h5>
            <form onSubmit={submitHandler}>
              <textarea
              ref={refff}
              type="text"
              style={{width:"100%", minHeight:"150px", borderRadius:"5px", marginBottom:"20px", padding:"20px"}}
              name="Para"
              >
              </textarea>
              <br/>
              <div>
                <h5 style={{color:"#493323"}}>2. Выставите кол-во слов в минуту</h5>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                  
                    <div onClick={() => setSpeed(speed-10)} style={{width:"45%"}} className="btn btn-warning">-</div>
                    <input 
                    style={{textAlign:"center"}}
                    className="form-control"
                    value={speed} readOnly
                    />
                    <div onClick={() => setSpeed(speed+10)} style={{width:"45%"}} className="btn btn-warning">+</div>
                </div>
              </div>
              <br/>
              <h5 style={{color:"#493323"}}>3. Приготовтесь и начинайте</h5>
              <div className="jumbler-btn">
                <button  type="submit" className="btn btn-success mb-3 btnT">Начать</button>
              </div>
            </form>
          </div>}
          { !show && 
          <div className="container" style={{backgroundColor:"#d9dab0", borderRadius:"5px", marginTop:"20px", textAlign:"center", paddingTop:"20px", paddingBottom:"20px"}}>
            <div style={{ minHeight:"100px", backgroundColor:"white", margin:'auto', textAlign:"left", padding:"20px", marginTop:"20px", marginBottom:"20px", borderRadius:"5px"}}>
                <p>{result}</p>
            </div>
            <div style={{width:"100%"}}>
              <button className="btn btn-success btnT" onClick={repeat}>Вернуться</button>
            </div>
          </div>
          } 
        </div>
    )
}

export default Speedreader


