import React from "react";

function SearchForm(props) {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="name"
            list="employees"
            type="text"
            className="form-control"
            placeholder="Select the gender of the employee"
            id="gender"
          />
          <datalist id="employees">
            {props.employees.map(gender => (
              <option value={gender} key={gender} />
              
            ))}
          </datalist>
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
  }
  
  export default SearchForm;