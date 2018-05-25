var commitButton = document.getElementById("btCommitBox");
var btCommit = document.getElementById("btCommit");
var select1 = document.getElementById("select1");
var colNum = document.getElementById("colNum");
var tableName = document.getElementById("tableName");
var createTableBox = document.getElementById("createTableBox");
var tableBox = document.getElementById("tableBox");
var addRowBox = document.getElementById("addRowBox");
var deleteRowBox = document.getElementById("deleteRowBox");
var attributeBox = document.getElementById("attributeBox");
var select2 = document.getElementById("select2");
var tables = [];
var numOfTable = 0 ;
var attributes = [];
var createRowInput = [];
var deleteRowInput = [];
select1.onchange = function () {
    checkSelect();
};
select2.onchange = function () {
    tableBox.innerHTML = "";
    let index = select2.selectedIndex;
    if(index > 0){
        tableBox.append(tables[index - 1].tableNode);
    }
    checkSelect();
};
colNum.oninput = function () {
    let num = colNum.value ;

    if(num > 0){
        attributeBox.innerHTML = "";
        for(let i = 0 ; i < num ; i++){
            let attribute = document.createElement("input");
            if(num > 4 ){
                attribute.style.width = (800/num) + "px";
            }
            attribute.placeholder = "Attr" + (i + 1);
            attributes[i] = attribute;
            attributeBox.append(attributes[i]);
        }
        attributeBox.style.display = "block";
        commitButton.style.display = "block";
        }
};



function Table(colNume,name) {
    this.name = name;
    this.colNum = colNume;
    let table = document.createElement("table");
    let head = document.createElement("tr");
    table.append(head);

    for(let i = 0 ; i < colNum ; i++){
        let td = document.createElement("td")
        if(attributes[i].value == ""){
            td.innerText = "    ";
        }else {
            td.innerText = attributes[i].value;
        }
        head.append(td);
    }
    this.tableNode = table;
    this.getName = function () {
        return this.name;
    };
    this.getColNum = function () {
        return this.colNum;
    };
}

function addRow(row, parent) {
    parent.innerText = "";
    let num = 0;
    let name = select2.options[select2.selectedIndex].value;
    for(let i = 0 ; i < numOfTable ; i++){
        if(i=== select2.selectedIndex-1){
            num = tables[i].getColNum();
        }
    }
    for(let i = 0 ; i < num ; i++){
        let input = document.createElement("input");
        input.setAttribute("type", "text",);
        if(num > 4){
            input.style.width = (960 / num -15) + "px";
        }
        row[i] = input;
        parent.append(input);
    }
}


function deleteRow(table,tdArray) {
    let trs = table.getElementsByTagName("tr");
    A:
        for(let i = trs.length - 1 ; i >= 0  ; i--){
            let tds = trs[i].getElementsByTagName("td");
            if(tds.length !== tdArray.length)
                return;
            for(let j = 0 ; j < tds.length ; j++){
                if(!(tdArray[j] === "" || tdArray[j] === tds[j].innerText))
                    continue A;
            }
            table.deleteRow(i);

       }
}


function checkSelect() {
    let index = select1.selectedIndex;
    let selected = select1.options[index].value ;
    switch (selected){
        case "SELECT ONE":
            commitButton.style.display = "none";
            createTableBox.style.display = "none";
            attributeBox.style.display = "none";
            addRowBox.style.display = "none";
            deleteRowBox.style.display = "none";
            break;
        case "CREATE TABLE":
            attributeBox.innerHTML = "";
            colNum.value = "";
            tableName.value = "";
            btCommit.onclick = function () {
                let table = new Table(colNum.value,document.getElementById("tableName").value);
                tables[numOfTable] = table;
                numOfTable++;
                tableBox.innerHTML = "";
                tableBox.append(table.tableNode);
                tableBox.style.display = "block";
                let option = document.createElement("option");
                select2.add(option);
                option.innerText = tableName.value;
                option.index = numOfTable;
                option.selected = true;
                colNum.value = "";
                tableName.value = "";
                checkSelect();
            };
            if(colNum.value > 0){
                commitButton.style.display = "block";
                attributeBox.style.display = "block";
            }else {
                commitButton.style.display = "none";
                attributeBox.style.display = "none";
            }
            createTableBox.style.display = "block";
            addRowBox.style.display = "none";
            deleteRowBox.style.display = "none";
            break;

        case "ADD ROW":
            addRow(createRowInput,addRowBox);
            commitButton.style.display = "block";
            addRowBox.style.display = "block";
            createTableBox.style.display = "none";
            attributeBox.style.display = "none";
            deleteRowBox.style.display = "none";
            btCommit.onclick = function () {
                let tr = document.createElement("tr");
                tables[select2.selectedIndex - 1].tableNode.append(tr);
                for(let i = 0 ; i < tables[select2.selectedIndex - 1].getColNum() ; i++){
                    let td = document.createElement("td");
                    td.innerText = createRowInput[i].value;
                    tr.append(td);
                }
            };
            break;
        case "DELETE ROW":
            addRow(deleteRowInput,deleteRowBox);
            commitButton.style.display = "block";
            deleteRowBox.style.display = "block";
            addRowBox.style.display = "none";
            createTableBox.style.display = "none";
            attributeBox.style.display = "none";
            btCommit.onclick = function () {
                let arr = [];
                for(let i = 0 ; i < tables[select2.selectedIndex - 1].getColNum() ; i++){
                    arr[i] = deleteRowInput[i].value;
                }
                deleteRow(tables[select2.selectedIndex - 1].tableNode,arr);
            };
            break;
        case "DELETE TABLE":
            commitButton.style.display = "block";
            createTableBox.style.display = "none";
            attributeBox.style.display = "none";
            addRowBox.style.display = "none";
            deleteRowBox.style.display = "none";
            btCommit.onclick = function () {
                let tableIndex = select2.selectedIndex - 1;
                if(tableIndex >= 0){
                    tables.splice(tableIndex,1);
                    select2.removeChild(select2.options[select2.selectedIndex]);
                    select2.options[0].selected = true;
                    numOfTable--;
                    tableBox.innerHTML = "";
                }
            };
            break;
    }

}
















