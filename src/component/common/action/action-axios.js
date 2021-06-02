
 /* export default function fetchCall(name){
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
 */
 import axios from "axios";
export default function fetchCall(name){
    var url = "https://restcountries.eu/rest/v2/region/"+ name
    axios.get(url)
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
     (error) => {
        this.setState({
            isLoaded: false,
            dropdown2: []
        });
    }
  )
    }

/* export const selectValue = event => ({
    type: 'SELECTED_VALUE',
    region: event
}) */



 