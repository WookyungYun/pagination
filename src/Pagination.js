class Pagination{
    constructor(data){
    this.data=data;
        this.render()
    }
    setPaginationBtns=(maxPageCnt,currentPageCnt,perPageCnt)=>{
        
        for(let i=0; i <= maxPageCnt+1; i++){
            
            const button=document.createElement('button')
            button.innerHTML=`${i}`
            if(i==0){
                button.innerHTML="<<"
                button.classList.add("arrow")
            } else if(i==maxPageCnt+1){
                button.innerHTML=">>"
                button.classList.add("arrow")
            }
            button.addEventListener("click",(e)=>{this.setCurrentPage(e,currentPageCnt,perPageCnt,maxPageCnt)})
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

    setCurrentPage=(e,currentPageCnt,perPageCnt,maxPageCnt)=>{
        const tbody=document.querySelector("tbody")
        const tr=tbody.querySelectorAll("tr")

        const pageNum=e.target.innerHTML
        currentPageCnt=pageNum
        
        this.handleActivePageBtn(e)
        const prevRange=(pageNum-1)*perPageCnt 
        const currentRange=pageNum*perPageCnt  
        if(e.target.innerText=="<<"){
            tr.forEach((item,index)=>{
                item.classList.add("hidden")
                if(index>=0&&index<5){
                    item.classList.remove("hidden")
                }
            })
        } else if(e.target.innerText==">>"){
            tr.forEach((item,index)=>{
                item.classList.add("hidden")
                const prevRange=(maxPageCnt-1)*perPageCnt
                const currentRange=prevRange*perPageCnt
                if(index>=prevRange&&index<currentRange){
                    item.classList.remove("hidden")
                }
            })
        }
        else if(e.target.innerHTML<=maxPageCnt){
            tr.forEach((item,index)=>{
                item.classList.add("hidden");
                if(index>=prevRange&&index<currentRange){
                    item.classList.remove("hidden")
                }
            })
        }
    }
 
   
    render(){
        let maxPageCnt=5;
        let currentPageCnt=1;
        let perPageCnt=5;
       this.setPaginationBtns(maxPageCnt,currentPageCnt,perPageCnt)
    }
}

export default Pagination;