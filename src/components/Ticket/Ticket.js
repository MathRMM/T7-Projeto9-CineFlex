

export default function Ticket ({dataClient}){
    console.log(dataClient)
    return (
        <div className="ticket centerPage">
            <p>{dataClient.name}</p>
        </div>
    )
}