import './index.css'

const SuggestionItem = props => {
  const {searchSuggestion, searchSuggestionSelectionHandler} = props

  const onSearchSuggestionSelectionEvent = () =>
    searchSuggestionSelectionHandler(searchSuggestion)

  return (
    <li className="suggestion-item-container">
      <p className="suggestion-text">{searchSuggestion}</p>
      <button
        type="button"
        className="suggestion-selection-button"
        onClick={onSearchSuggestionSelectionEvent}
      >
        <img
          className="selection-arrow-img"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
