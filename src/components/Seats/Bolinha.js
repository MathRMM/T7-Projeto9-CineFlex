import styled from 'styled-components'
import { useState } from 'react'


export default function Bolinha({ children, id, isAvailable, type , select, setSelect}) {
    const [isClicked, setClicked]= useState(false)

    const Yellow = ()=> <Icon color ='#FBE192' borderColor='#F7C52B' onClick={()=>alert('Assento não disponivel')}>{children}</Icon>
    const Gray = ()=><Icon color ='#C3CFD9' borderColor='#808F9D' onClick={()=>saveSeats(id,children)}>{children}</Icon>
    const Green = () => <Icon color ='#8DD7CF' borderColor='#1AAE9E' onClick={()=>removeSeat(id)}>{children}</Icon>


    function Avaible (){
        return isClicked? <Green/> : <Gray/>
    }

    function Selection(){
        return isAvailable ? <Avaible/> : <Yellow/>
    }

    function Type({color}){
        if (color == "yellow") return <Yellow/>
        if (color == "gray") return <Gray/>
        if (color == "green") return <Green/>
    }

    function saveSeats(id,children) {
        select.push({
            'id': id,
            'name': children
        })
        setSelect(select)
        setClicked(!isClicked)
    }

    function removeSeat(id){
        setSelect(select.filter((seat)=> seat.id != id))
        setClicked(!isClicked)
    }
    return type!==undefined ? <Type color={type}/>:<Selection/>    
}
/* #C3CFD9
#808F9D */
const Icon = styled.li`
width: 26px;
height: 26px;
display: flex;
justify-content: center;
align-items: center;
background: ${props => props.color};
border: 1px solid ${props => props.borderColor};
border-radius: 20px;
margin: 6px 3px;
cursor: pointer;

&:hover{
    opacity: 0.85;
}
&:active{
    transform: translateY(2px);
}
`
