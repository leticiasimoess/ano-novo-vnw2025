import style from './main.module.scss'
import imagemAnoNovo from '../../assets/imagemAnoNovo.png'

export default function Main() {
    return (
        <main className={style.main}>
            <img src={imagemAnoNovo} alt="Imagem escrito 'Ano Novo 2025' adornado de luzinhas amarelas nas letras e estrelas nos lados." />
            <section className={style.conteinerBoasFestas}>
                <h3>Boas Festas!!!</h3>
                <h2>Felicidades!!!</h2>
                <section className={style.conteinerPoema}>
                    <p>Em 2025, vamos juntos programar,
                    Com mais código limpo e muito para alcançar!
                    Que o ano novo traga só funções de felicidade,
                    E que a paz seja nossa variável de realidade!
                    Sem bugs, sem falhas, com muito amor,
                    Vamos debugar os problemas com ardor!
                    Que a vida seja sempre o output de alegria,
                    O Vai Na Web te deseja um Ano Novo, que seja
                    pura harmonia!</p>
                </section>
            </section>
        </main>
    )
}