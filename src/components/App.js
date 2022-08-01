import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Home from "./Home/Home"
import Session from "./Session/Session"
import Seats from "./Seats/Seats"
import Ticket  from "./Ticket/Ticket"

export default function App() {
    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    const [dataClient, setDataClient] = useState([])
    const [selectSeat, setSelectSeat] = useState([])
    const [reload, setReload] = useState(false)
    
    useEffect(() => {
        //Lista de Filmes
        axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies')
            .then((e) => setMovies(e.data))
    }, [reload])

    return (
        <>
            <div className="header">
            <button onClick={() => navigate(-1)}>Voltar</button>
                CINEFLEX
            </div>
            <Routes>
                <Route path="/" element={<Home movies={movies}/>} />
                <Route path="/sessoes/:idFilme" element={<Session/>} reload={reload}/>
                <Route path="/assentos/:idSessao" element={<Seats 
                setDataClient={setDataClient}
                setSelectSeat ={setSelectSeat}
                reload={reload}
                />} />
                <Route path="/sucesso" element={<Ticket 
                dataClient={dataClient} 
                selectSeat={selectSeat}
                reload={reload}
                setReload={setReload}/>} />
            </Routes>
        </>
    )
}