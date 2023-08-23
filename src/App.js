import "./App.css";
import Header from "./component/Header";
import { useState , useEffect} from "react";

function App() {
  const [name, setname] = useState("");
  const [link, setlink] = useState("");
  const [data, setdata] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data"));
    if (storedData) {
      setdata(storedData);
    }
  }, []);

  function add()
  {
    setdata([...data,{name,link}])
    setname("")
    setlink("")
    localStorage.setItem('data', JSON.stringify([...data,{name,link}]));
  }

  function del(index)
  {
    let arr = data;
    arr.splice(index,1);
    setdata([...arr]);
    localStorage.setItem('data', JSON.stringify([...arr,{name,link}]));
  }

  return (
    <>
      <Header />
        <div id="input">
          <input placeholder="Enter here about the links" value={name} onChange={(event) => {setname(event.target.value) }} type="name" className="input1"></input>
          <input placeholder="Enter the links here" value={link} onChange={(event) => {setlink(event.target.value) }} type="url" className="input2"></input>
          <button className="btn" onClick={add} >Add</button>
        </div>
          <div id="output-box">
            <div id="output">
              <h4>Sr.no.</h4>
              <h4>Discription</h4>
              <h4>Links</h4>
              <h4>Delete</h4>
            </div>
          {
            data.map((data,index) => {
              return(
                <div key={index} id='field'>
                  <h4>{index+1}</h4>
                  <h4>{data.name}</h4>
                  <h4><a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                {data.link}
              </a></h4>
                  <button className='button' onClick={()=>del(index)}>Delete</button>
                </div>
              )
            })
          }
          </div>
    </>
  );
}

export default App;
