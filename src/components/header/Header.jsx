import logoHeader from '../../assets/logoHeader.png'
import style from './header.module.scss'

export default function Header(){
    return(
        <header className={style.header}>
            <img src={logoHeader} alt="Logo 'Feliz 2025'" />
            <nav>
                <ul>
                    <li><a href="/Paz">Paz</a></li>
                    <li><a href="/Saúde">Saúde</a></li>
                    <li><a href="/Alegria">Alegria</a></li>
                </ul>
            </nav>
        </header>
    )
}