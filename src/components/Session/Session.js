import { useState, useEffect } from 'react'
import {useParams,Link} from 'react-router-dom'
import axios from 'axios'

import './session.css'

export default function Session() {

    const {idFilme} = useParams()
    const [session, setSession] = useState([])
    const [days , setDays] = useState([])
    
    useEffect(()=>{
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        .then((res)=> {
            setSession(res.data)
            setDays(res.data.days)})
    },[])
    console.log(session)

    function RenderSession({weekday,date,showTimes}) {
        console.log(showTimes)
        
        return (
            <li>
                <p>{weekday} - {date}</p>
                <div className="sessions">
                    
                    {showTimes.map((e)=><div className="hour" key={e.id}>{e.name}</div>)}
                </div>
            </li>
        )
    }

    return (
        <div className="session centerPage">
            <h1>Selecione o horário</h1>
            <ul>
                {days.map((day)=><RenderSession 
                key={day.id} 
                weekday={day.weekday}
                date = {day.date}
                showTimes = {day.showtimes}
                />)}
            </ul>
            <div className='footer centerAling'>
                <div className='poster centerAling'><img src={session.posterURL}/></div>
                <h1>{session.title}</h1>
            </div>
        </div>
    )
}