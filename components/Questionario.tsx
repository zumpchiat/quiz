import styles from '../styles/Questionario.module.css'
import QuestaoModel from "../model/questao"
import Questao from './Questao'
import Botao from './Botao'



interface QuestionarioProps {
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irProxima: () => void

}


export default function Questionario(props: QuestionarioProps) {

    function respostaFornecida(indice: number) {
        if (props.questao.naoRespondida) {
            props.questaoRespondida(props.questao.responderCom(indice))
        }

    }

    return (
        <div className={styles.questionario}>

            {props.questao ?
                <Questao valor={props.questao}
                    tempoResposta={7}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={props.irProxima} />
                : false
                }


            <Botao onClick={props.irProxima}
                texto={props.ultima ? 'Finalizar' : 'Próxima'} />
        </div>
    )
}