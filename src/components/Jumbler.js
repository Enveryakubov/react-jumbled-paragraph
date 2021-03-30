import {useState, useRef} from 'react'

const Jumbler = () => {
  const [result, setResult] = useState("")
  const refff = useRef()

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
  }
 
    return (
        <div>
          <h1>Веселый текст</h1>
          <div style={{backgroundColor:"#c5d7bd", padding:"20px", borderRadius:"5px"}}>
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
                  <button type="submit" className="btn-main">Обработать</button>
                  {result && <button onClick={clearAll} style={{backgroundColor:"#f0a500"}}>Очистить все</button>}
                  </div>
              </form>
              {result &&
              <div>
                <h2>Ваш текст</h2>
                <div className="jumbler-result">
                    <p style={{fontSize:"25px", textAlign:"justify", letterSpacing:"0.1rem"}}>{result}</p>
                </div>
              </div>} 
          </div>
        </div>
    )
}

export default Jumbler
