import Questao from '../components/Questao'
import RespostaModel from '../model/resposta'
import QuestaoModel from '../model/questao'
import { useState } from 'react'
import Botao from '../components/Botao'

const questaoMock = new QuestaoModel(1, "Qual é a cor do sangue?", [
  RespostaModel.errada('verde'),
  RespostaModel.errada('azul'),
  RespostaModel.errada('Preto'),
  RespostaModel.certa('vermelho'),
])

export default function Home() {

  const [questao, setQuestao] = useState(questaoMock)



  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice))

  }

  function tempoEsgotado() {

    if(questao.naoRespondida){
      setQuestao(questao.responderCom(-1))
    }
    

  }

  return (

    <div style={{
      display: 'flex',
      flexDirection: 'column' ,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }} >

      <Questao
        valor={questao}
        respostaFornecida={respostaFornecida }
        tempoResposta={5}
        tempoEsgotado={tempoEsgotado}
        
        />
        <Botao texto=" Próxima " />
    </div>
  )
}
