import { embaralhar } from "../functions/array"
import RespostaModel from "./resposta"

export default class QuestaoModel {

    #id: number
    #enunciado: string
    respostas: RespostaModel[]
    #acertou: boolean
    #respondida: boolean

    constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false) {

        this.#id = id
        this.#enunciado = enunciado
        this.respostas = respostas
        this.#acertou = acertou

    }

    get id() {
        return this.#id
    }
    get enunciado() {
        return this.#enunciado
    }
    get resposta() {
        return this.respostas
    }
    get acertou() {
        return this.#acertou
    }
    get naoRespondida() {
        return !this.respondida
    }
    get respondida() {
        for (let resposta of this.respostas) {
            if (resposta.revelada) return true
        }
        return false
    }
    responderCom(indice: number): QuestaoModel {
        const acertou = this.respostas[indice]?.certa
        console.log(acertou)
        const respostas = this.respostas.map((resposta, i) => {
            const resSelecionada = indice === i
            const devRevelar = resSelecionada || resposta.certa
            return devRevelar ? resposta.revelar() : resposta
        })
        return new QuestaoModel(this.id, this.enunciado, respostas, acertou)
    }


    embaralharResposta(): QuestaoModel {
        let respostaEmbaralhada = embaralhar(this.respostas)
        return new QuestaoModel(this.#id, this.#enunciado, respostaEmbaralhada, this.#acertou)
    }

    static criarUsandoObj(obj: QuestaoModel): QuestaoModel {
        const respostas = obj.respostas.map(resp => RespostaModel.criarUsandoObj(resp))
        return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou)

    }


    toObject() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            respondida: this.respondida,
            acertou: this.#acertou,
            respostas: this.respostas.map(resp => resp.toObject()),
        }
    }




}