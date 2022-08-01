import { createRoot } from "react-dom";
import App from './components/App'
import { BrowserRouter } from "react-router-dom";

import './components/reset.css'

const container = document.querySelector('.root')
const root = createRoot(container)

root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
)