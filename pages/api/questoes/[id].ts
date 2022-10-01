import questoes from '../bancoDeQuestoes'


export default function qestaoId (req, res)  {
  const idSelect = +req.query.id


  const questoesSelect = questoes.filter(questao => questao.id === idSelect)
 
 
 
  if (questoesSelect.length === 1) {

    const questaoSelecionada = questoesSelect[0].embaralharResposta()


    res.status(200).json(questaoSelecionada .toObject())

  } else {
    res.status(200).send("erro")
  }



}
