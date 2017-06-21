import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function mapStateToProps(state) {
  return {
    // propsを通して取得する際に使う名前: Storeのstateの値
    text: state.searchResults.text,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // propsを通して取得する際に使う名前
  };
}


let SearchResults = (SearchResults) => {
  return (
    <div>
      {SearchResults.text}
    </div>
  )
}
SearchResults = connect(mapStateToProps, mapDispatchToProps)(SearchResults)

export default SearchResults
