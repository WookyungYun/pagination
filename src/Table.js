class Table{
    constructor(data){
        this.data=data
        this.render();
    }
    displayTblaeHead=()=>{
        const headList=[]
        let template=`
        <thead>
            {{__table_head__}}
        </thead>
        `
        for(let key in this.data[0]){
            headList.push(`
            <th>${key}</th>
            `)
        }
        return template = template.replace("{{__table_head__}}",headList.join(""))
    }
    displayTableData=()=>{
        const dataList=[]
        let template=`
           {{__table_data__}}
        `
        this.data.map((item)=>(
            dataList.push(`
            <tr>
                <td>${item.name}</td>
                <td>${item.title}</td>
                <td>${item.email}</td>
                <td>${item.role}</td>
            </tr>
            `)

        ))
        return template= template.replace("{{__table_data__}}",dataList.join(""))
    }
    render(){
        const tableContainer = document.querySelector("#table")
        tableContainer.innerHTML=""
        const table=document.createElement("table")
        const tbody=document.createElement("tbody")
        tableContainer.appendChild(table)

        const thead =this.displayTblaeHead()
        const tableData=this.displayTableData()
        table.innerHTML=thead
        table.appendChild(tbody)
        tbody.innerHTML=tableData
    }
}

export default Table