import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(360, 'o que e java?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('programa'),
        RespostaModel.errada('math'),
        RespostaModel.certa('linguagem de Programação'),
    ]),

    new QuestaoModel(220, 'o que e linux?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('programa'),
        RespostaModel.errada('math'),
        RespostaModel.certa('SO'),
    ]),
]
export default questoes