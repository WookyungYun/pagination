import Pagination from "/src/Pagination.js";
import Table from "/src/Table.js";

class App {
    constructor($app) {
        this.$app = $app;
        this.render();
    }

    async render() { 
        try{
            const response = await fetch("/src/data.json")
            if(response.ok){
            const data= await response.json()
            new Table(data)
            new Pagination(data)
            console.log(data)
            }
        }catch(e){
            console.error(e)
        }
    }
}
export default App;