import React from "react";

function SearchResults(props) {
  return (
      <div>
          <button className="btn btn-success" onClick={props.sort}>Sort list alphabetically</button>
    <table className="list-group search-results">
      {props.results.map(result => (
          <tr>
        <th key={result} className="list-group-item">
            <p>{result.name.first}   {result.name.last}    {result.gender} </p>
            
        
        </th></tr>
      ))}
      
    </table>
    </div>
  );
}

export default SearchResults;