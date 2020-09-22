import React, {Component} from 'react';

export default class Refresh extends Component{

  render(){
    return(
      <>
      <button className="button" onClick= { function refreshPage(){window.location.reload()} }>
              Refresh
              </button>
      </>
    )
  }
}
