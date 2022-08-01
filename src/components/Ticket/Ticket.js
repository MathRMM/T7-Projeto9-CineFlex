import { useState } from "react"
import { Link } from 'react-router-dom'

import './ticket.css'

export default function Ticket({ dataClient, selectSeat, reload, setReload}) {
    const seats = [...selectSeat.seats]
    console.log(dataClient, selectSeat.seats)


    return (
        <div className="ticket centerPage">
            <h1>Pedido feito com sucesso!</h1>
            <div>
                <h2>Filme e sessão</h2>
                <p>{selectSeat.movie}</p>
                <p>
                    {selectSeat.date}  {selectSeat.hour}
                </p>
            </div>
            <div>
                <h2>Ingressos</h2>
                {seats.map((e) => <p>Assento {e.name}</p>)}
            </div>
            <div>
                <h2>Comprador</h2>
                <p>Nome: {dataClient.name}</p>
                <p>
                    CPF:{dataClient.cpf}
                </p>
            </div>
            <Link to={'/'} onClick={()=>setReload(!reload)}>
                <button>Voltar pra Home</button>
            </Link>
        </div>
    )
}