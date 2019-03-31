
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { connect } from 'react-redux'

export class Teste extends React.Component {
  render() {
    return (
      <div>
        {this.props.state.nome}
        <button onClick={() => this.props.alertar()}>test</button>
      </div>
    );
  }
}

function requestAPI() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(results => results.json())
      .then(data => {
        return data.title
      })
}

function reducer(state = { nome: "abc" }, action) {
  switch (action.type) {
    case 'ALERTA':
      state = {...state, nome: requestAPI()}
      break;
    default:
      return state
  }
  return state;
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

const TestProvider = connect(mapStateToProps, mapDispatchToProps)(Teste);

render(
  <Provider store={store}>
    <TestProvider />
  </Provider>,
  document.getElementById('root')
);