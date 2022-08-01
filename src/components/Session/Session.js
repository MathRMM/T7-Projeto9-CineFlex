import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import './session.css'

export default function Session({ reload }) {

    const { idFilme } = useParams()
    const [movie, setMovie] = useState([])
    const [days, setDays] = useState([])

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`)
            .then((res) => {
                setMovie(res.data)
                setDays(res.data.days)
            })
    }, [reload])

    function RenderSession({ weekday, date, showTimes }) {
        return (
            <li>
                <p>{weekday} - {date}</p>
                <div className="sessions">

                    {showTimes.map((e) =>
                        <Link to={`/assentos/${e.id}`}>
                            <div
                                className="hour"
                                key={e.id}>
                                {e.name}</div>
                        </Link>
                    )}
                </div>
            </li>
        )
    }

    return (
        <div className="session centerPage">
            <h1>Selecione o horário</h1>
            <ul>
                {days.map((day) => <RenderSession
                    key={day.id}
                    weekday={day.weekday}
                    date={day.date}
                    showTimes={day.showtimes}
                />)}
            </ul>
            <div className='footer centerAling'>
                <div className='movie'>
                    <div className='poster centerAling'><img src={movie.posterURL} /></div>
                    <h1>{movie.title}</h1>
                </div>
            </div>
        </div>
    )
}