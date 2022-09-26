import Questao from '../components/Questao'
import RespostaModel from '../model/resposta'
import QuestaoModel from '../model/questao'
import { useState } from 'react'

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
    console.log(indice)

  }

  return (

    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }} >

      <Questao
        valor={questao}
        respostaFornecida={respostaFornecida} />
    </div>
  )
}
