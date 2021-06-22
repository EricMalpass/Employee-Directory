import React, { Component } from "react";
import API from "../utils/API";
import Container from "../componets/Container";
import SearchForm from "../componets/Filter";
import SearchResults from "../componets/FilterResults";
import Alert from "../componets/Alert";

class Search extends Component {
    state = {
      search: "",
      employees: [],
      gender: ["Male", "Female"],
      error: "",
      displayData:[],
      sortD: 0
      
    };

    componentDidMount() {
        API.getEmployee()
          .then(res => { console.log(res)
              this.setState({ employees: res.data.results,  displayData:res.data.results})})
          
          .catch(err => console.log(err));
      }

      handleInputChange = event => {
        this.setState({ search: event.target.value });
      };

    //   //build filter for gender  if this.state.employees
    //    handleFormSubmit = event => {
    //      API.getEmployeesOfGender(this.state.search)
    //      .then (res => {
    //          if (res.response  )
    //      }


      handleFormSubmit = event => {
        event.preventDefault();
        API.getEmployeesOfGender(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      };

      sortFunction = event => {
        event.preventDefault();
         const sorted = this.state.employees.sort( (a, b) => {
             console.log(this.state)
             if (this.state.sortD === 1) {
                 this.setState({sortD: -1}) 
                return -a.name.last.localeCompare(b.name.last); 
             } else {
                 this.setState({sortD: 1});
                return a.name.last.localeCompare(b.name.last); 
             }
          })
          this.setState ({displayData: sorted}) 
      };

      render() {
        return (
          <div>
            <Container style={{ minHeight: "80%" }}>
              <h1 className="text-center">Search By Gender</h1>
              <Alert
                type="danger"
                style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
              >
                {this.state.error}
              </Alert>
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                employees={this.state.gender}
              />
              <SearchResults results={this.state.displayData} sort={this.sortFunction} />

            
            </Container>
          </div>
        );
      }
    }
    
    export default Search;