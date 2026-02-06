const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());

let inventory=[
  {id:1,prodname:"Laptop",qty:12,price:320000},
  { id: 2, prodname: "Mouse", qty: 50, price: 500 },
  { id: 3, prodname: "Keyboard", qty: 40, price: 1200 },
  { id: 4, prodname: "Monitor", qty: 15, price: 9000 },
  { id: 5, prodname: "Printer", qty: 8, price: 15000 },
  { id: 6, prodname: "Scanner", qty: 6, price: 11000 },
  { id: 7, prodname: "Webcam", qty: 25, price: 2500 },
  { id: 8, prodname: "Headphones", qty: 30, price: 1800 },
  { id: 9, prodname: "Speaker", qty: 20, price: 3000 },
  { id: 10, prodname: "USB Cable", qty: 100, price: 150 },
  { id: 11, prodname: "Hard Disk", qty: 18, price: 5500 },
  { id: 12, prodname: "SSD", qty: 22, price: 6500 },
  { id: 13, prodname: "RAM 8GB", qty: 35, price: 3200 },
  { id: 14, prodname: "RAM 16GB", qty: 20, price: 6200 },
  { id: 15, prodname: "Graphics Card", qty: 10, price: 28000 },
  { id: 16, prodname: "Motherboard", qty: 12, price: 8500 },
  { id: 17, prodname: "Power Supply", qty: 14, price: 4200 },
  { id: 18, prodname: "CPU Fan", qty: 28, price: 1200 },
  { id: 19, prodname: "Cabinet", qty: 16, price: 3800 },
  { id: 20, prodname: "Router", qty: 24, price: 2200 },
  { id: 21, prodname: "Modem", qty: 9, price: 2000 },
  { id: 22, prodname: "Switch", qty: 7, price: 5000 },
  { id: 23, prodname: "Network Cable", qty: 80, price: 100 },
  { id: 24, prodname: "Projector", qty: 5, price: 32000 },
  { id: 25, prodname: "UPS", qty: 11, price: 7000 },
  { id: 26, prodname: "Pen Drive 32GB", qty: 45, price: 700 },
  { id: 27, prodname: "Pen Drive 64GB", qty: 38, price: 1100 },
  { id: 28, prodname: "Memory Card", qty: 42, price: 900 },
  { id: 29, prodname: "External HDD", qty: 14, price: 7200 },
  { id: 30, prodname: "External SSD", qty: 9, price: 9800 },
  { id: 31, prodname: "Laptop Bag", qty: 26, price: 1500 },
  { id: 32, prodname: "Cooling Pad", qty: 18, price: 1300 },
  { id: 33, prodname: "Smartphone", qty: 20, price: 18000 },
  { id: 34, prodname: "Tablet", qty: 13, price: 22000 },
  { id: 35, prodname: "Smartwatch", qty: 27, price: 3500 },
  { id: 36, prodname: "Bluetooth Earbuds", qty: 34, price: 2500 },
  { id: 37, prodname: "Power Bank", qty: 40, price: 1800 },
  { id: 38, prodname: "HDMI Cable", qty: 60, price: 300 },
  { id: 39, prodname: "VGA Cable", qty: 55, price: 250 },
  { id: 40, prodname: "Extension Board", qty: 32, price: 900 },
  { id: 41, prodname: "Smart TV", qty: 6, price: 42000 },
  { id: 42, prodname: "Remote Control", qty: 48, price: 600 },
  { id: 43, prodname: "Wireless Mouse", qty: 44, price: 800 },
  { id: 44, prodname: "Wireless Keyboard", qty: 33, price: 1500 },
  { id: 45, prodname: "Office Chair", qty: 10, price: 7500 },
  { id: 46, prodname: "Office Desk", qty: 7, price: 12000 },
  { id: 47, prodname: "Notebook", qty: 120, price: 80 },
  { id: 48, prodname: "Pen", qty: 200, price: 20 },
  { id: 49, prodname: "Stapler", qty: 35, price: 150 },
  { id: 50, prodname: "Calculator", qty: 18, price: 900 }
]

app.get('/',(req,res) => {
    res.json(inventory);
});

app.post('/add',(req,res) => {
    const invent={id:req.body.id,prodname:req.body.prodname,qty:req.body.qty,price:req.body.price};
    inventory.push(invent);
    res.json(inventory);
});

app.listen(8000,()=>{
    console.log('Server is running at http://localhost:8000');
});