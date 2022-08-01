import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import Bolinha from './Bolinha'
import './seats.css'

export default function Seats() {

    const { idSessao } = useParams()
    const [session, setSession] = useState([])
    const [movie, setMovie] = useState([])
    const [seats, setsSeats] = useState([])
    const [days, setDays] = useState([])
    const [select, setSelect] = useState([])

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)
            .then((res) => {
                setSession(res.data)
                setMovie(res.data.movie)
                setsSeats(res.data.seats)
                setDays(res.data.day)
            })

    }, [])
    console.log(select)

    return (
        <div className="seats centerPage">
            <h1>Selecione o(s) assentos(s)</h1>
            <ul>
                {seats.map((seat) => <Bolinha
                    key={seat.id}
                    id={seat.id}
                    isAvailable={seat.isAvailable}
                    select={select}
                    setSelect={setSelect}>{seat.name}</Bolinha>)}

            </ul>
            <div className='subtitle'>
                <div>
                    <Bolinha type={"green"} />
                    <p>Selecionado</p>
                </div>
                <div>
                    <Bolinha type={"gray"} />
                    <p>Disponível</p>
                </div>
                <div>
                    <Bolinha type={"yellow"} />
                    <p>Indisponível</p>
                </div>
            </div>

            <form>
                <label>Nome do comprador:</label>
                <input type="text" id="fname" name="fname" />
                <label>CPF do comprador:</label>
                <input type="text" name="cpf"
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    />
            </form>

            <div className='footer centerAling'>
                <div className='poster centerAling'><img src={movie.posterURL} /></div>
                <h1><p>{movie.title}</p>
                    <p>{days.weekday}<span>{session.name}</span></p></h1>
            </div>
        </div>
    )
}