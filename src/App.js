import './App.css';
import Student from './student';

const students = [
  {id:1,name:"Toxirjon", age:36},
  {id:2,name:"Toxiraxon", age:33},
  {id:3,name:"Dilyoraxon", age:11},
  {id:4,name:"Sadriddin", age:11},
  {id:5,name:"XojiAkbar", age:11},
  {id:6,name:"Abubakirn", age:11},
  {id:7,name:"Muslim", age:11},
  {id:8,name:"Muxammadrizo", age:9},
  {id:9,name:"Daryo", age:13},
]
function App() {
  return (
    <div className="App">
     {students.map((student) =>(<Student value = {student}/>))}
    </div>
  );
}

export default App;
