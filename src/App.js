import React from 'react';
import styled from 'styled-components'
import './App.css';
import CardList from './components/CardList'
import SearchBar from './components/SearchBar'
import Header from './components/Header'
import ErrorBoundary from './components/ErrorBoundary'

const Top = styled.div`
  background: rgba(76, 175, 80, 0.9);
  box-shadow: rgba(76, 175, 80, 0.9) 0px 0px 3px 6px;

`;

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      searchfield: ''
    }
  }
  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character/')
        .then (response => response.json())
        .then (data => this.setState({characters: data.results}))
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render(){
    const { characters, searchfield } = this.state;
    const filteredCharacters = characters.filter(character => {
      return character.name.toLowerCase().includes(searchfield.toLowerCase());
        })
    // console.log(this.state.characters)
    return (
      <div className="App">
        <Top>
          <Header />
          <SearchBar searchChange = {this.onSearchChange}/>
        </Top>
        <ErrorBoundary>
          <CardList characters = {filteredCharacters}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default Main;