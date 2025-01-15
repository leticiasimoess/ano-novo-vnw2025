import logoLinkedin from '../../assets/logoLinkedin.png'
import logoFacebook from '../../assets/logoFacebook.png'
import logoInstagram from '../../assets/logoInstagram.png'
import style from './footer.module.scss'

export default function Footer(){
    return(
        <footer className={style.footer}>
            <nav className={style.navFooter}>
                <ul>
                    <li><a href="https://www.linkedin.com/in/leesimoes/"><img src={logoLinkedin} alt="Logo do Linkedin" /></a></li>
                    <li><a href="https://www.facebook.com/?locale=pt_BR"><img src={logoFacebook} alt="Logo do Facebook" /></a></li>
                    <li><a href="https://www.instagram.com/simoes_lee/"><img src={logoInstagram} alt="Logo do Instagram" /></a></li>
                </ul>
            </nav>
        </footer>
    )
}