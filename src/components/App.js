import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Home from "./Home/Home"
import Session from "./Session/Session"
import Seats from "./Seats/Seats"
import Ticket  from "./Ticket/Ticket"

export default function App() {
    const [movies, setMovies] = useState([])
    const [dataClient, setDataClient] = useState([])
    const [selectSeat, setSelectSeat] = useState([])
    /* const [session , setSession] = useState([]) */
    const [reload, setReload] = useState(false)

    useEffect(() => {
        //Lista de Filmes
        axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies')
            .then((e) => setMovies(e.data))
    }, [reload])

    console.log(selectSeat)

    return (
        <BrowserRouter>
            <div className="header">
                CINEFLEX
            </div>
            <Routes>
                <Route path="/" element={<Home movies={movies}/>} />
                <Route path="/sessoes/:idFilme" element={<Session/>} />
                <Route path="/assentos/:idSessao" element={<Seats 
                setDataClient={setDataClient}
                setSelectSeat ={setSelectSeat}
                />} />
                <Route path="/sucesso" element={<Ticket dataClient={dataClient} selectSeat={selectSeat}/>} />
            </Routes>
        </BrowserRouter>
    )
}