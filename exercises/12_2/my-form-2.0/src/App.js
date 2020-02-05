import React from 'react';
import './App.css';

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
      formErrors: { email: '', password: '' }
    }
  }
  changeHandler = event => {
    const { name, value } = event.target;
    this.setState((state) => {
      return ({
        [name]: value
      })
    })
  }
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
      descricao: ''
    })
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
            type='text'
            name='nome'
            value={this.state.nome}
            onChange={this.changeHandler}
          /></div>
          <div>E-mail <input
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.changeHandler}
          /></div>
          <div>CPF <input
            type='number'
            name='cpf'
            value={this.state.cpf}
            onChange={this.changeHandler}
          /></div>
          <div>Endereço <input
            type='text'
            name='endereco'
            value={this.state.endereco}
            onChange={this.changeHandler}
          /></div>
          <div>Cidade <input
            type='text'
            name='cidade'
            value={this.state.cidade}
            onChange={this.changeHandler}
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
          <div>Resumo do currículo <textarea name='curriculo' onChange={this.changeHandler}></textarea></div>
          <div>Cargo <textarea name='cargo' onChange={this.changeHandler}></textarea></div>
          <div>Descrição do cargo <textarea name='descricao' onChange={this.changeHandler}></textarea></div>
        </fieldset>
        <button>Submeter!</button><br></br>
        <button onClick={this.limparCampos}>Limpar</button>
      </div>
    );
  }
}

export default App;
