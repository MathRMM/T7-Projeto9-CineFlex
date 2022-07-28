import {createRoot}  from "react-dom";
import App from './components/App'

import './components/reset.css'

const container = document.querySelector('.root')
const root = createRoot(container)

root.render(<App/>)