import React, {useState} from 'react'
const Map = () => {
    const [data, setData] = useState([
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Carol', age: 35 },
      ]);
      const[search, setSearch] = useState("")
      const handleInputChange = (e) =>{setSearch(e.target.value) }
      const filterData = data.filter((SearchValue) => {
        const itemSearched=search.toLowerCase();
        
        return(
            SearchValue.name.toLowerCase().includes (itemSearched) || SearchValue.age.toString().includes(itemSearched)|| SearchValue.id.toString().includes(itemSearched)
       
        )

      });
      
    
      const rows = filterData.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          
        </tr>
      ));
    
  return (
    <div>
        <h2>2</h2>
        <input type='text' value={search} onChange={handleInputChange}/>
       
      <table border="1">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
    </div>
  )
}

export default Map