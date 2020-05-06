import React from 'react';

class CriarDiv extends React.Component {
    render() {
        const estadoArr = this.props.estadoAtual
        console.log(estadoArr)
        const estado = this.props.estado
        estado['formErrors'] = ''
        estado['estadoAtual'] = ''
        if (estadoArr) return (
            <div>
                {estadoArr.map(campo => <div key={campo}>{campo}: {estado[campo]}</div>)}
            </div>
        )
        return <div></div>;
    }
}

export default CriarDiv;