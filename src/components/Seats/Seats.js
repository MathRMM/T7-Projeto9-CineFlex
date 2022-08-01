import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Bolinha from './Bolinha'
import upData from '../upData'
import './seats.css'

export default function Seats({ setDataClient, setSelectSeat, reload }) {

    const { idSessao } = useParams()
    const [session, setSession] = useState([])
    const [movie, setMovie] = useState([])
    const [seats, setsSeats] = useState([])
    const [days, setDays] = useState([])
    const [select, setSelect] = useState([])
    const [name, setName] = useState('')
    const [cpf, setCPF] = useState('')
    const [send, setSend] = useState(false)

    let navigate = useNavigate('')

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)
            .then((res) => {
                setSession(res.data)
                setMovie(res.data.movie)
                setsSeats(res.data.seats)
                setDays(res.data.day)
            })

    }, [send, reload])

    function handleForm(e) {
        e.preventDefault()
        let body = {
            movie: movie.title,
            date: days.date,
            seats: select,
            hour: session.name
        }

        setSelectSeat(body)
        upData({ select, name, cpf, setSend, setDataClient })

    }

    if (send) {
        navigate("/sucesso")
    }

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

            <form onSubmit={handleForm}>
                <label>Nome do comprador:</label>
                <input type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required />
                <label>CPF do comprador:</label>
                <input type="text" name="cpf"
                    value={cpf}
                    onChange={e => setCPF(e.target.value)}
                    maxLength="11"
                    required />
                <button type='submit'>Reservar assento(s)</button>
            </form>
            <div className='footer centerAling'>
                <div className='movie'>
                    <div className='poster centerAling'><img src={movie.posterURL} /></div>
                    <h1><p>{movie.title}</p>
                        <p>{days.weekday}<span>{session.name}</span></p></h1>
                </div>
            </div>
        </div>
    )
}