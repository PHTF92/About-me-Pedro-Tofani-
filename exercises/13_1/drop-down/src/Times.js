import React from 'react';

class Times extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valorCaixa: this.props.children[0].item,
            clicado: true
        };
    }

    botaoClique = () => {
        if (this.state.clicado) this.setState({ clicado: false })
        else this.setState({ clicado: true })
    }

    selectTime = (event) => {
        this.setState({ valorCaixa: event.target.value })
    }

    renderizarLista = () => {
        const arrTimes = this.props.children.map(time => time.item)
        if (this.state.clicado) {
            return (
                <select size="4">
                    {arrTimes.map(time =>
                        <option onClick={this.selectTime} key={time} value={time}>{time}</option>
                    )}
                </select>
            )
        }
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <button onClick={this.botaoClique}>{this.state.valorCaixa}</button><br></br>
                {this.renderizarLista()}
            </div>
        )
    }
}

export default Times;