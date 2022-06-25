import React from "react"
import ReactDOM from "react-dom/client"
import { createRoot } from 'react-dom/client';
import App from "../src/App"
<link rel="stylesheet" href="style.css"></link>

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);
ReactDOM.render(<App/>,document.getElementById("root"))
