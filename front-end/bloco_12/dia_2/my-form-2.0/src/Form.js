import React, { Component } from 'react';

class Form extends Component {

  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      residence: '',
      city: '',
      state: '',
      skills: '',
      position: '',
      hardSkills: '',
    }
  }

  handleChange({ target }) {
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <main>
        <fieldset className="personalInfo">
          <h1>Informações pessoais</h1>
            
            {/* //   Limite de 40 caracteres
              //   Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.
              //   */}
            <label>
              Nome
              <input
                required
                type="text" 
                name="name" 
                value={this.state.name} 
                onChange={this.handleChange} 
              />
            </label>

            {/* //      Limite de 50 caracteres
              //    */}
            <label>
              Email
              <input required type="email" name="email" value={this.state.email} onChange={this.handleChange} />
            </label>

            {/* //     Limite de 11 caracteres
              //   */}
            <label>
              CPF
              <input required type="text" name="cpf" value={this.state.cpf} onChange={this.handleChange} />
            </label>

            {/* //     Limite de 200 caracteres
                //     Remover qualquer caracter especial que seja digitado
                //     */}
            <label>
              Endereço
              <input required type="text" name="address" value={this.state.address} onChange={this.handleChange} />
            </label>

            <label required onChange={this.handleChange}>
              <input name="residence" type="radio" value="home" /> Casa
              <input name="residence" type="radio" value="apartment" /> Apartamento
            </label>

            {/* //     Limite de 28 caracteres
              //     Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
              //     */}
            <label>
              Cidade
              <input required name="city" type="text" value={this.state.city} onChange={this.handleChange} />
            </label>

            {/* //     Todos os estados do Brasil
              //  */}
            <label>
              Estado
              <select required name="state" value={this.state.state} onChange={this.handleChange}>

                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
            </label>
        </fieldset>
        
        <fieldset className="lastJob">
          <h1>Ultimo Emprego</h1>

            {/* //     Limite de 1000 caracteres
              //      */}
            <label>
              Resumê
              <textarea required name="skills" />
            </label>

            {/* 
            //     Limite de 40 caracteres
            //     Quando o mouse passar por cima deste campo (evento onMouseEnter ), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.
            //      */}
            <label>
              Cargo
              <textarea required name="position" />
            </label>

            {/* //     Limite de 500 caracteres
            //     */}
            <label>
              Descrição
              <textarea required name="hardSkills" />
            </label>
        </fieldset>
      </main>
    )
  }
}

export default Form;

//   Crie um botão que, ao ser clicado, monta uma <div> com o consolidado dos dados que foram inseridos no formulário.
//   Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.
