import {useState, useRef} from 'react'

const Jumbler = () => {
  const [result, setResult] = useState("")
  const [show, setShow] = useState(true)
  const refff = useRef()

  const style = show ? {display:"block"} : {display:"none"}

  const submitHandler = (e) => {
    e.preventDefault()
    if (refff.current.value === "") {
      return alert("Введите текст")
    }
    
    let test = refff.current.value.split(" ")
              .map(elem => {
                if (elem.length <= 2) {return elem + " "}
                let end = elem.length-1;
                let ending = elem[elem.length-1]
                if ([".", ",", "!", "?"].includes(elem[elem.length-1])) {
                end -= 1;
                ending = elem[elem.length-2] + elem[elem.length-1]
              }
                let middle = elem.slice(1, end)
                
                
                function shuffleArray(array) {
                  for (let i = array.length - 1; i > 0; i--) {
                      let j = Math.floor(Math.random() * (i + 1));
                      let temp = array[i];
                      array[i] = array[j];
                      array[j] = temp;
                  }

                }
                let y = middle.split("")
                shuffleArray(y)
                return elem[0] + y.join("") + ending + " "
              })
    setResult(test)
    // refff.current.value=""
  }
  const clearAll = () => {
    refff.current.value=""
    setResult("")
    setShow(true)
  }
 
    return (
        <div className="container" style={{marginTop:"20px", textAlign:"center"}}>
          <div className="titleCont" style={{marginBottom:"20px"}}>
            <div className="title">Размешалка</div>
          </div>
          <div style={{backgroundColor:"#c5d7bd", padding:"20px", borderRadius:"5px", marginBottom:"30px", paddingTop:"20px"}}>
                <h2 style={{color:"#493323"}}>{show ? "Введите текст": "А вот и ваш текст"}</h2>
                <form onSubmit={submitHandler}>
                    <div style={style}>
                      <textarea 
                      className="form-control"
                      ref={refff}
                      type="text"
                      style={{width:"100%", minHeight:"150px", borderRadius:"5px", marginBottom:"20px", padding:"20px"}}
                      name="Para"
                      >
                      </textarea>
                      <br/>
                    </div>
                    <div className="btnCol">
                      <button type="submit" style={{marginRight:"10px"}} className="btn btn-success" >Обработать</button>
                      {result && <button onClick={() => setShow(!show)} className="btn btn-success" style={{backgroundColor:"#1687a7", marginRight:"10px"}}>{show ? "Закрыть оригинал": "Показать оригинал"}</button>}
                      {result && <button onClick={clearAll} className="btn btn-success" style={{backgroundColor:"#f0a500"}}>Очистить все</button>} 
                    </div>
                </form>
              {result &&
              <div className="form-control" style={{marginTop:"40px"}}>
                <h2>Ваш текст</h2>
                <div className="jumbler-result">
                    <p style={{fontSize:"20px", textAlign:"justify", letterSpacing:"0.1rem"}}>{result}</p>
                </div>
              </div>} 
          </div>
        </div>
    )
}

export default Jumbler
