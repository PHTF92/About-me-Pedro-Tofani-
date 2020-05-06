import React from 'react';
import './App.css';
import CriarDiv from './CriarDiv.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      nome: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      local: '',
      curriculo: '',
      cargo: '',
      descricao: '',
      entrouJa: false,
      formErrors: { email: '' }
    }
  }
  changeHandler = event => {
    let { name, value } = event.target;
    if (name === 'endereco') value = this.validarEndereco(value)
    this.setState((state) => {
      return ({
        [name]: value,
        formErrors: {
          ...state.formErrors,
          [name]: this.validarCampo(name, value)
        }
      })
    })
  }
  handlerBlur = event => {
    let { value } = event.target;
    const novoValor = value.match(/^\d/) ? '' : value
    this.setState({ cidade: novoValor })
  }
  validarEndereco = endereco => endereco.replace(/[^\w\s]/gi, '')
  limparCampos = () => {
    this.setState({
      email: '',
      password: '',
      nome: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      local: '',
      curriculo: '',
      cargo: '',
      descricao: '',
      formErrors: { email: '' }
    })
  }
  validarCampo(campo, value) {
    switch (campo) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
  }
  mouseEnter = () => {
    if (this.state.entrouJa === false) {
      alert('Preencha com cuidado esta informação');
      this.setState({ entrouJa: true })
    }
  }
  passarInfos = () => {
    const chaves = Object.keys(this.state)
    this.setState({ estadoAtual: chaves })
  }
  render() {
    console.log(this.state)
    const estados = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)',
      'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)',
      'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Pará (PA)', 'Paraíba (PB)', 'Paraná (PR)', 'Pernambuco (PE)',
      'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)',
      'Santa Catarina (SC)', 'São Paulo (SP)', 'Sergipe (SE)', 'Tocantins (TO)']
    return (
      <div>
        <fieldset>
          <legend>Formulário</legend>
          <div>Nome <input
            maxLength="40"
            type='text'
            name='nome'
            value={this.state.nome.toUpperCase()}
            onChange={this.changeHandler}
            required='required'
          /></div>
          <div>E-mail <input
            maxLength="50"
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.changeHandler}
            required='required'
          /></div>
          <div>CPF <input
            type='number'
            maxLength="11"
            name='cpf'
            value={this.state.cpf}
            onChange={this.changeHandler}
            required='required'
          /></div>
          <div>Endereço <input
            maxLength="200"
            type='text'
            name='endereco'
            value={this.state.endereco}
            onChange={this.changeHandler}
            required='required'
          /></div>
          <div>Cidade <input
            maxLength="28"
            type='text'
            name='cidade'
            value={this.state.cidade}
            onChange={this.changeHandler}
            onBlur={this.handlerBlur}
            required='required'
          /></div>
          <div>Estado
            <select required='required' name='estado' value={this.state.estado} onChange={this.changeHandler}>
              <option value=''>Selecione o estado</option>
              {estados.map(estado => <option key={estado}>{estado}</option>)}
            </select></div>
          <div>
            <input name='local' type="radio" value="casa" onChange={this.changeHandler} checked={this.state.local === 'casa'}></input><div>Casa</div>
            <input name='local' type="radio" value="ape" onChange={this.changeHandler} checked={this.state.local === 'ape'}></input><div>Apartamento</div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Informações profissionais</legend>
          <div>Resumo do currículo <textarea maxLength="1000" required='required' name='curriculo' onChange={this.changeHandler}></textarea></div>
          <div>Cargo <textarea onMouseEnter={this.mouseEnter} name='cargo' maxLength="40" required='required' onChange={this.changeHandler}></textarea></div>
          <div>Descrição do cargo <textarea maxLength="500" required='required' name='descricao' onChange={this.changeHandler}></textarea></div>
        </fieldset>
        <button onClick={this.passarInfos}>Submeter!</button><br></br>
        <button onClick={this.limparCampos}>Limpar</button>
        <CriarDiv estadoAtual={this.state.estadoAtual} estado={this.state}/>
      </div>
    );
  }
}

export default App;
