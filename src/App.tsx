import React from 'react'
import logo from './logo.svg'
import './App.css'


function App() {
  // d - List of items that can be updated with new additional items when the button is pressed
  var [d, set] = React.useState()

  // var fill = () => {
  //     // The function fills the list for render with some items
  //
  //     [...Array(20)].forEach((_, index) => {
  //         if (!Array.isArray(d)) {
  //             // @ts-ignore
  //             d = []
  //         }
  //
  //         // @ts-ignore
  //         d.push({
  //             id: index, title: (function () {
  //                 var result = [];
  //                 for (var i = 0; i < 10; i++) {
  //                     result.push('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() *
  //                         'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.length)));
  //                 }
  //                 var string = result.join('');
  //                 return string
  //             })()
  //         })
  //     })
  //     set(d)
  // }
  //
  // // Fills the List onmount
  // fill()

  var render = () => {
    // renders the list of items as components

    if (!Array.isArray(d)) {
      // @ts-ignore
      d = []
    }
    var result: any = []
    // @ts-ignore
    d.forEach(function (i, index) {
      result.push(<div className={'App-item'}>{'Title is:' + i.title + '!'}</div>)
    })
    return result
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </div>
      <div>
        <button className="App-button">
          Add More
        </button>
      </div>
      <div>
        {render()}
      </div>
    </div>
  )
}

export default App
