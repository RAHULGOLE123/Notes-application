import React,{useState} from "react";


const App = () => {

const [title, setTitle] = useState('');
const [details, setDetails] = useState('')
const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({title:title, details:details})
    setTask(copyTask);
    console.log("task:", task);

    console.log("title:", title);

    setTitle('');
    setDetails('');

  };
  

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-4 lg:w-1/2 items-start p-10"
        
      >
        <h1 className="text-3xl font-bold"> Add Notes </h1>
        
          <input
            type="text"
            placeholder="Enter Note Handling"
            className="px-5 py-5 w-full border-2 rounded"
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value);
            }}
          />

          <textarea
            type="text"
            className="px-5 py-2 w-full h-35 border-2 rounded"
            placeholder="Write Details"
            value={details}
            onChange={(e)=> {
              setDetails(e.target.value)
            }}
          />
          <button className="bg-white text-black px-5 py-2 rounded-2xl w-full font-bold ">
            Add note
            
          </button>
    
      </form>
      <div className="lg:w-1/2 lg:border-l-2 bg-gray-900 p-10">
      <h1 className="text-3xl font-bold"> Your Notes </h1>
      <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
       {task.map(function(elem, idx){
        return <div key={idx} className="h-52 w-40 rounded-2xl bg-white">
          <h1 className="font-bold text-black text-xl p-2 border-b-2">{elem.title}</h1>
          <p className="text-black p-2">{elem.details}</p>
        </div>
       })}
      </div>
      </div>
    </div>
  );
};

export default App;
