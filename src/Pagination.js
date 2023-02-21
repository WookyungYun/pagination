class Pagination{
    constructor(data){
    this.data=data;
        this.render()
    }
    setPaginationBtns=(maxPageCnt,currentPageCnt,perPageCnt)=>{
        
        for(let i=1; i <= maxPageCnt; i++){
            
            const button=document.createElement('button')
            button.innerHTML=`${i}`
            button.addEventListener("click",(e)=>{this.setCurrentPage(e,currentPageCnt,perPageCnt)})
            document.querySelector("#number-btns").appendChild(button)
        }
    }

    handleActivePageBtn=(e)=>{
        const activeEle=document.querySelector(".active")
        if(activeEle){
            activeEle.className=""
        }
        e.target.className="active"
    }

    setCurrentPage=(e,currentPageCnt,perPageCnt)=>{
        const tbody=document.querySelector("tbody")
        const tr=tbody.querySelectorAll("tr")
        const pageNum=e.target.innerHTML
        currentPageCnt=pageNum
        
        this.handleActivePageBtn(e)
        
        const prevRange=(pageNum-1)*perPageCnt 
        const currentRange=pageNum*perPageCnt  
        
        tr.forEach((item,index)=>{
            item.classList.add("hidden");
            if(index>=prevRange&&index<currentRange){
                item.classList.remove("hidden")
            }
        })
    }
 
   
    render(){
        let maxPageCnt=5;
        let currentPageCnt=1;
        let perPageCnt=5;
       this.setPaginationBtns(maxPageCnt,currentPageCnt,perPageCnt)
    }
}

export default Pagination;