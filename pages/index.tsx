
import QuestaoModel from '../model/questao'
import { useEffect, useState } from 'react'
import Questionario from '../components/Questionario'
import { useRouter } from 'next/router'


const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()
  const [idQuestoes, setIdQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [questaoCertas, setQuestaoCertas] = useState<number>(0)


  async function carregarIdsQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)

    const idQuestoes = await resp.json()
    console.log(idQuestoes)
    setIdQuestoes(idQuestoes)

  }
  useEffect(() => {
    carregarIdsQuestoes()
  }, [])

  async function carregarQuestoes(id: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${id}`)
    const obj = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObj(obj)
    setQuestao(novaQuestao)
  }
  useEffect(() => {
    idQuestoes.length > 0 && carregarQuestoes(idQuestoes[0])
  }, [idQuestoes])

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setQuestaoCertas(questaoCertas + (acertou ? 1 : 0))
    console.log(questaoCertas + (acertou ? 1 : 0))

  }

  function idProximaPergunta() {
   
      const proximoIndice = idQuestoes.indexOf(questao.id) + 1
      return idQuestoes[proximoIndice]
    

  }

  function irProxima() {

    const proximoId = idProximaPergunta()
    proximoId ? irProximaQuestao(proximoId) : finalizar()
  }

  function irProximaQuestao(proximoId: number) {
    carregarQuestoes(proximoId)
  }
  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idQuestoes.length,
        certas: questaoCertas
      }

    })
  }


  return (
    questao ? (<Questionario questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irProxima={irProxima} />
    ) : false
  )
}
