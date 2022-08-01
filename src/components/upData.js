import { useState, useEffect } from 'react'
import axios from 'axios'

export default function upData({select , name, cpf , setSend ,setDataClient}){
    const dataClient = {
        ids: select.map((seat => seat.id)),
        name: name,
        cpf: cpf}

    const requisicao = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", dataClient)
    .then(()=>
    setDataClient(dataClient),
    setSend(true)
    );
        console.log (dataClient)
}