import React, { Component } from 'react'
//import fetchCall from './component/action/aindex';
import Data from '../mock/MockData'
export class DropDown extends Component {
     constructor() {
         super();
         this.state = {
             dropdown1: [],
             dropdown2: [],
             selectdd: '',
             isLoaded: false
          };
     }
     componentDidMount() {
         this.setState({
            dropdown1: this.props.countries
         });
         //this.fetchCall(countries[0])
         this.fetchCall(this.props.countries[0])
         //fetchCall(this.props.countries[0])
     }
     selectChange(e) {
         this.setState({ selectdd: e.target.value });
         this.fetchCall(e.target.value);
         //fetchCall(e.target.value);
     }
     render() {
         return (
             <div>
             <select value={this.state.selectdd} onChange={this.selectChange.bind(this)}>
              {
                 this.state.dropdown1.map(x => {
                 return <option>{x}</option>
                 })
               }
             </select>
              <select>
              {
               this.state.dropdown2.map(x => {
              return   <option>{x.name}</option> 
           })
           }
          </select> 
          </div>
         )
     }
      fetchCall(name){
         var url = "https://restcountries.eu/rest/v2/region/"+ name
         fetch(url)
         .then(res => res.json())
         .then(
             (result) => {
                 if(result.length)
                 {  
                     this.setState({
                         isLoaded: true,
                         dropdown2: result
                     });
                 }
                 else
                 {
                     this.setState({
                         isLoaded: true,
                         dropdown2: []
                     });
                 }
             },
         // Note: it's important to handle errors here
         // instead of a catch() block so that we don't swallow
         // exceptions from actual bugs in components.
             (error) => {
             this.setState({
                 isLoaded: false,
                 dropdown2: []
             });
         }
       )
     }  
 }
DropDown.defaultProps = Data
  export default DropDown;
 