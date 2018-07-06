import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ViewList from './ViewList/ViewList'
class App extends Component {

  state={
    data:[
      {name:"name1",count:"2"},
      {name:"name2",count:"3"},
      {name:"name3",count:"4"}
    ],
    isfrist:true,
    inputText:"",
  }
  SerchClick=(searchtext)=>
  {
    var url="https://api.github.com/search/repositories?q="+searchtext+"#&sort=stars";
    fetch(url)
    .then((response)=>response.json())     
    .then((json)=>{
      this.setState({data:json,isfrist:false});
    });
  }
  componentDidMount() {
    fetch('https://api.github.com/search/repositories?q=C#&sort=stars')
  .then((response)=>response.json())     
  .then((json)=>{
    this.setState({data:json,isfrist:false});
  });
    }
    onChangeInput=(sender)=>
    {
let val=sender.target.value;
this.setState({inputText:val})
    }
  render() {
    if(!this.state.isfrist)
    {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input type="text" value={this.state.inputText} onChange={this.onChangeInput} />
        <button onClick={()=>this.SerchClick(this.state.inputText)}>搜索</button>
        {
          this.state.data.items.map(function (repo, index)
        {
          return(
          <ViewList url={repo.html_url} connect={repo.stargazers_count} name={repo.name} desc={repo.description}/>
          )
        })
        }
        
      </div>
    );
  }
  else
  {
    return <p>londing..........</p>
  }
  }
}

export default App;
