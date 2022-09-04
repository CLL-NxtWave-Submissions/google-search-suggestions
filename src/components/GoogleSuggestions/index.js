import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

export default class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    const {suggestionsList} = props

    this.state = {
      searchString: '',
      matchingSuggestionsList: suggestionsList,
    }
  }

  updateSearchState = (searchInput, suggestionDataList) => {
    const filteredSuggestionsList = suggestionDataList.filter(
      currentSuggestionItem => {
        const lowerCaseCurrentSuggestion = currentSuggestionItem.suggestion.toLowerCase()
        const lowerCaseUserSearchInput = searchInput.toLowerCase()

        return lowerCaseCurrentSuggestion.includes(lowerCaseUserSearchInput)
      },
    )

    this.setState({
      searchString: searchInput,
      matchingSuggestionsList: filteredSuggestionsList,
    })
  }

  onUserSearchInputChange = userSearchInputChangeEvent => {
    const userSearchInput = userSearchInputChangeEvent.target.value
    const {suggestionsList} = this.props

    this.updateSearchState(userSearchInput, suggestionsList)
  }

  onSearchSuggestionUserSelection = selectedSuggestionText => {
    const {suggestionsList} = this.props

    this.updateSearchState(selectedSuggestionText, suggestionsList)
  }

  render() {
    const {searchString, matchingSuggestionsList} = this.state

    return (
      <div className="google-search-suggestions-bg-container">
        <div className="google-search-suggestions-content-container">
          <img
            className="google-logo-img"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-container">
            <div className="search-input-bar">
              <img
                className="search-icon-img"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search Google"
                name="user-search-input"
                value={searchString}
                onChange={this.onUserSearchInputChange}
              />
            </div>

            <ul className="search-suggestions-container">
              {matchingSuggestionsList.map(matchingSuggestionItem => (
                <SuggestionItem
                  key={matchingSuggestionItem.id}
                  searchSuggestion={matchingSuggestionItem.suggestion}
                  searchSuggestionSelectionHandler={
                    this.onSearchSuggestionUserSelection
                  }
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
