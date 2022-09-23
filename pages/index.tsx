import Questao from '../components/Questao'
import RespostaModel from '../model/resposta'
import QuestaoModel from '../model/questao'


export default function Home() {
  
  const questaoTeste = new QuestaoModel(1, "oioi?", [
    RespostaModel.errada('verde'),
    RespostaModel.errada('vermelho'),
    RespostaModel.errada('Preto'),
    RespostaModel.certa('azul'),
  ])
  
  return (
   
    <div style={{
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }} >
      
      <Questao valor={questaoTeste} />
    </div>
  )
}
