import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Home from "./Home/Home"
import Session from "./Session/Session"

export default function App() {
    const [movies, setMovies] = useState([])
    const [idFilme, setIdFilmes] = useState([])
    const [session, setSession] = useState({})
    const [seats, setsSeat] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        //Lista de Filmes
        axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
            .then((e) => setMovies(e.data))
        /* axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
            .then((res) => setSession(res.data)) */
    }, [idFilme])
    /* console.log(session) */

    return (
        <BrowserRouter>
            <div className="header">
                CINEFLEX
            </div>
            <Routes>
                <Route path="/" element={<Home movies={movies} setIdFilmes={setIdFilmes} />} />
                <Route path="/sessoes/:idFilme" element={<Session />} />
            </Routes>
        </BrowserRouter>
    )
}