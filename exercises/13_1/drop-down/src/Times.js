import React from 'react';

class Times extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valorCaixa: '',
            clicado: false
        };
    }
    render() {
        return (
            <div>
                <button>oi</button><br></br>
                <select size="4">
                    <option>Apple</option>
                    <option>Orange</option>
                    <option>Pineapple</option>
                    <option>Banana</option>
                </select>
                <p>{this.props.children[0].item}</p>
            </div>
        )
    }
}

export default Times;