
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import {connect} from 'react-redux'

export class Teste extends React.Component {
    alertar(){
        alert('aaaa');
    }
    render() {
        return (
            <div>
                <button onClick={() => this.props.alertar()}>test</button>
            </div>
        );
    }
}
function reducer(state, action) {
    switch (action.type) {
      case 'ALERTA':
        alert('ok');
        break;
      default:
        return state
    }
  }

let store = createStore(reducer);

const mapStateToProps = (state) => {
    return {
      state
    }
  };

  const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      alertar: () => dispatch({ type: 'ALERTA' })
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Teste);

render(
    <Provider store={store}>
      <Teste />
    </Provider>,
    document.getElementById('root')
  );