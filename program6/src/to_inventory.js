import React, {useState,useEffect} from "react";
import axios from "axios";

function Display_Inventory(){
    const[res,setRes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000")
        .then(response=>setRes(response.data));
    }, []);
    return(
        <div>
            <h1>Inventory Management</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {res.map((inventory) => (
                        <tr key={inventory.id}>
                            <td>{inventory.id}</td>
                            <td>{inventory.prodname}</td>
                            <td>{inventory.qty}</td>
                            <td>{inventory.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function AddInventory(){
    const[id,setId] = useState("");
    const[prodname,setProdname]=useState("");
    const[qty,setQty]=useState("");
    const[price,setPrice]=useState("");
    
    const SubmitEvent=async()=>{
        const fo={id,prodname,qty,price};
        await axios.post("http://localhost:8000/add",fo);
        alert("Inventory added");
    };

    return(
        <div>
            <h1>Add Inventory</h1>
            <input type="number" placeholder="ID" onChange={e => setId(e.target.value)} />
            <input type="text" placeholder="Product Name" onChange={e=> setProdname(e.target.value)} />
            <input type="number" placeholder="Quantity" onChange={e=>setQty(e.target.value)}/>
            <input type="number" placeholder="Price" onChange={e => setPrice(e.target.value)} /><br/>
            <button onClick={SubmitEvent}>Add</button>
        </div>
    );   
}
export { Display_Inventory, AddInventory};