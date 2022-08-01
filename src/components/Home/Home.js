import { Link } from 'react-router-dom'
import './home.css'

export default function Home({ movies, setIdFilmes }) {

    function RenderMovie({ movie }) {

        return (
            <Link to={`/sessoes/${movie.id}`}>
                <li className='centerAling'>
                    <img src={movie.posterURL} />
                </li>
            </Link>
        )
    }

    return (
        <div className="home centerPage">
            <h1>Selecione o filme</h1>
            <ul>
                {movies.map((e) => <RenderMovie key={e.id} movie={e} />)}
            </ul>
        </div>
    )
}