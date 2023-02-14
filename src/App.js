
import './App.css';
import List from './Components/List';
function App() {
  const employee = [
    {Id:1,   Name:"Raj",      City:"Mumbai",     empID:7865},
    {Id:2,   Name:"Surya",    City:"Kalyan",     empID:8644},
    {Id:3,   Name:"Karan",    City:"Haryana",    empID:5436},
    {Id:4,   Name:"Rahul",    City:"Kolkata",    empID:8753},
    {Id:5,   Name:"Sonam",    City:"Bangalore",  empID:2976},
    {Id:6,   Name:"Priya",    City:"Pune",       empID:5678},
    {Id:7,   Name:"Rohit",    City:"Tamil Nadu", empID:5677},
    {Id:8,   Name:"Shashank", City:"Delhi",      empID:6544},
    {Id:9,   Name:"Ravi",     City:"Assam",      empID:6789},
    {Id:10,  Name:"Ashu",     City:"Gujrat",     empID:2223}
    ]
  return (
    <div className="App">
     <List employeeJSON={employee}/>
    </div>
  );
}

export default App;
