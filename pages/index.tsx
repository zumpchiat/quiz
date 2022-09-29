import RespostaModel from '../model/resposta'
import QuestaoModel from '../model/questao'
import { useState } from 'react'
import Questionario from '../components/Questionario'

const questaoMock = new QuestaoModel(1, "Qual é a cor do sangue?", [
  RespostaModel.errada('verde'),
  RespostaModel.errada('azul'),
  RespostaModel.errada('Preto'),
  RespostaModel.certa('vermelho'),
])

export default function Home() {

  const [questao, setQuestao] = useState(questaoMock)


  function questaoRespondida(questao: QuestaoModel) {
  }

  function irProxima() {
  }

  return (

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }} >



      <Questionario questao={questao}
        ultima={false}
        questaoRespondida={questaoRespondida}
        irProxima={irProxima} />
    </div>
  )
}
