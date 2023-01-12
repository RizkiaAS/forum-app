import { Link } from 'react-router-dom'
import StyledFooter from './styled/StyledFooter'

function CustomFooter () {
  return (
    <StyledFooter>
        <nav>
            <ul>
                <li>
                    <Link to="/" >
                        <button>
                            <span className="material-symbols-outlined">home</span>
                            <p>Home</p>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/leaderboard">
                        <button>
                            <span className="material-symbols-outlined">leaderboard</span>
                            <p>Leaderboard</p>
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    </StyledFooter>
  )
}

export default CustomFooter
