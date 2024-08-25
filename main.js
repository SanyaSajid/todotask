let totoLst = []
let donelst = []

const leadsFromLocal = JSON.parse(localStorage.getItem("todo-lst"))
const ulEl = document.getElementById("section")
const leadsFrom = JSON.parse(localStorage.getItem("donelst"))
const Done=document.getElementById("done_sec")


if (leadsFromLocal) {
    totoLst = leadsFromLocal
    donelst=leadsFrom
    render(totoLst,donelst)
}
else{
    ulEl.innerHTML= ""
    ulEl.innerHTML+= `<p>Tasks to do! <span id="todoval"></span></p>` 
}

function render(lst,ll){
    let lstItems = ""
    let llitems=""
    for (let i = 0;i< lst.length;i++){
        lstItems += `
        <div class="todocard">
                    <div class="todotitle">
                        <p class="cardtxt">${lst[i]}</p>
                    </div>
                    <div class="todoicon">
                        <div class="dltbtn" onclick="moveToDone(${i})">
                        <svg width="17" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.7364 1.67391L6.73641 12.6739C6.67256 12.7378 6.59673 12.7885 6.51327 12.8231C6.42981 12.8577 6.34035 12.8755 6.25 12.8755C6.15965 12.8755 6.07019 12.8577 5.98673 12.8231C5.90327 12.7885 5.82745 12.7378 5.76359 12.6739L0.951095 7.86141C0.822092 7.7324 0.749619 7.55744 0.749619 7.375C0.749619 7.19256 0.822092 7.0176 0.951095 6.88859C1.0801 6.75959 1.25506 6.68712 1.4375 6.68712C1.61994 6.68712 1.7949 6.75959 1.92391 6.88859L6.25 11.2155L16.7636 0.701094C16.8926 0.572091 17.0676 0.499619 17.25 0.499619C17.4324 0.499619 17.6074 0.572091 17.7364 0.701094C17.8654 0.830097 17.9379 1.00506 17.9379 1.1875C17.9379 1.36994 17.8654 1.5449 17.7364 1.67391Z"
                                fill="#9E78CF" />
                        </svg>
                        </div>
                        <div class="dltbtn" onclick="edittodo(${i})">
                        <svg width="18" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.5833 1.75001C14.8241 1.50925 15.1099 1.31827 15.4245 1.18798C15.739 1.05768 16.0762 0.990616 16.4167 0.990616C16.7572 0.990616 17.0943 1.05768 17.4089 1.18798C17.7234 1.31827 18.0092 1.50925 18.25 1.75001C18.4908 1.99076 18.6817 2.27658 18.812 2.59115C18.9423 2.90571 19.0094 3.24286 19.0094 3.58334C19.0094 3.92382 18.9423 4.26097 18.812 4.57553C18.6817 4.8901 18.4908 5.17592 18.25 5.41667L5.875 17.7917L0.833336 19.1667L2.20834 14.125L14.5833 1.75001Z"
                                stroke="#9E78CF" stroke-width="1.66667" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        </div>
                        <div class="dltbtn" onclick="dlttodo(${i})">
                        <svg width="18" height="18" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.5138 4.125H4.38878C4.20644 4.125 4.03157 4.19743 3.90264 4.32636C3.77371 4.4553 3.70128 4.63016 3.70128 4.8125C3.70128 4.99484 3.77371 5.1697 3.90264 5.29864C4.03157 5.42757 4.20644 5.5 4.38878 5.5H5.07628V17.875C5.07628 18.2397 5.22114 18.5894 5.47901 18.8473C5.73687 19.1051 6.08661 19.25 6.45128 19.25H17.4513C17.816 19.25 18.1657 19.1051 18.4236 18.8473C18.6814 18.5894 18.8263 18.2397 18.8263 17.875V5.5H19.5138C19.6961 5.5 19.871 5.42757 19.9999 5.29864C20.1288 5.1697 20.2013 4.99484 20.2013 4.8125C20.2013 4.63016 20.1288 4.4553 19.9999 4.32636C19.871 4.19743 19.6961 4.125 19.5138 4.125ZM17.4513 17.875H6.45128V5.5H17.4513V17.875ZM7.82628 2.0625C7.82628 1.88016 7.89871 1.7053 8.02764 1.57636C8.15657 1.44743 8.33144 1.375 8.51378 1.375H15.3888C15.5711 1.375 15.746 1.44743 15.8749 1.57636C16.0038 1.7053 16.0763 1.88016 16.0763 2.0625C16.0763 2.24484 16.0038 2.4197 15.8749 2.54864C15.746 2.67757 15.5711 2.75 15.3888 2.75H8.51378C8.33144 2.75 8.15657 2.67757 8.02764 2.54864C7.89871 2.4197 7.82628 2.24484 7.82628 2.0625Z"
                                fill="#9E78CF" />
                        </svg>
                        </div>

                    </div>
                </div>
        `
        // ulEl.append(lstItems)
        ulEl.innerHTML= ""
        ulEl.innerHTML+= `<p>Tasks to do! <span id="todoval"></span></p>`
    ulEl.innerHTML +=lstItems
   
    const incval = document.getElementById("todoval")
    incval.innerText = totoLst.length
    }
    for (let i = 0;i< ll.length;i++){
        llitems +=  `
        
        <div class="todocard">
                    <div class="todotitle">
                        <p class="carddonetxt">${ll[i]}</p>
                    </div>
                </div>
        
        
        
        `;
     
        Done.innerHTML= ""
        Done.innerHTML+= `<p>Done! <span id="donetodo"></span></p>`
    Done.innerHTML +=llitems
   
    const incval = document.getElementById("donetodo")
    incval.innerText = donelst.length
    }
}

const plus = document.getElementById("addplus")
plus.onclick = function(){
    
   
    const addTxt = document.getElementById("input-el").value
    totoLst.push(addTxt)
    // alert(totoLst)
    document.getElementById("input-el").value = ""
    localStorage.setItem("todo-lst",JSON.stringify(totoLst))
    render(totoLst,donelst) 
}

  
function dlttodo(index){
    // alert("hi")
    totoLst.splice(index, 1);
    localStorage.setItem("todo-lst", JSON.stringify(totoLst));
    render(totoLst,donelst);
}

function edittodo(index){
    const newTask = prompt("Edit your task:", totoLst[index]);
    if (newTask !== null && newTask.trim() !== "") {
        totoLst[index] = newTask; 
        localStorage.setItem("todo-lst", JSON.stringify(totoLst)); 
        render(totoLst,donelst); 
    }
    else{
        alert("Cannot be edited!")
    }
}

function donetodo(index){
    
}

function moveToDone(taskElement) {
    
    
        taskText=totoLst[taskElement];
        const doneCard = document.createElement("div");
        doneCard.innerHTML= `
        
        <div class="todocard">
                    <div class="todotitle">
                        <p class="carddonetxt">${taskText}</p>
                    </div>
                </div>
        
        
        
        `;
        
        totoLst.splice(taskElement,1);
        document.getElementById("done_sec").append(doneCard);

        // Update local storage and task counter
        localStorage.removeItem(taskText);
        //alert(totoLst);
        
        localStorage.setItem('todo-lst', JSON.stringify(totoLst));
        donelst.push(taskText);
        localStorage.setItem('donelst', JSON.stringify(donelst));
      
        
        render(totoLst,donelst);
        
        
        const count = donelst.length;
        
        document.getElementById("donetodo").textContent = count;
    }

  