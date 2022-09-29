import { useRouter } from 'next/router'
import Botao from '../components/Botao'
import Estatistica from '../components/Estatistica'
import styles from '../styles/Resultado.module.css'

export default function resultado()  {

    const router = useRouter()

    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas/total) * 100)


    return(
        <div className={styles.resultado}>

        <h1> Resultado final</h1>

        <div style={{display: "flex"}}>
        < Estatistica texto="Perguntas" valor={total}/>
        < Estatistica texto="Acertos" valor={certas} corFundo="#9CD2A4"/>
        < Estatistica texto="Aproveitamento" valor={`${percentual}%`} corFundo="#DE6A33"/>
        </div>
        <Botao href="/" texto="Tentar novamente" />
        

        </div>
    )
}