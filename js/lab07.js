
var colId= new Array();
for(var i=0;i<100;i++){
    colId[i]="ID"+i;
}

var trID=new Array();
var trs=0;


var inputOne= new Array();
var addRow=new Array();
var rowId=new Array();
for(var i=0;i<100;i++){
    rowId[i]="rowSID"+i;
}

var rowValue=new Array();
var selectOne = document.getElementById("select1");
var selectTwo= document.getElementById("select2");
var createTable= document.getElementById('createTable');
var createInput= document.getElementById('createInput');
var addRowValue=document.getElementById('addRow');

let createNum1 =document.getElementById('colNumbers');
let tableName=document.getElementById('tableName');

let table =document.getElementById('table');

let button1 =document.getElementById('button1');

let button2 =document.getElementById('button2');
let button3 =document.getElementById('button3');


selectOne.onchange = function() {
    let item = selectOne.options[selectOne.selectedIndex].value;
    if (item == "CREATE TABLE") {
        CreateTable();
    }
    if (item == "ADD ROW") {
        Faddrow();
    }
    if (item == "DELETE ROW") {

        DELETEROW();
    }
    if (item == "DELETE TABLE") {
        while (trID.length > 0) {
            var deleted = document.getElementById(trID.pop());
            table.removeChild(deleted);
        }
        createInput.style.display='none';
        button1.style.display='none';
        createTable.style.display='none';
        button2.style.display='none';
        addRowValue.style.display='none';
        button3.style.display='none';
    }
}


function CreateTable() {
    createTable.style.display = "block";
}


createNum1.oninput = function () {
    let createNum = createNum1.value;
    for (var i = 0; i < createNum; i++) {
       inputOne[i] = document.createElement("input");
        inputOne[i].placeholder = "Attr" + (i + 1);
        inputOne[i].type="text";
        inputOne[i].style.width ='100px';
        inputOne[i].style.borderRadius ='3px';
        inputOne[i].id=colId[i];

        createInput.appendChild(inputOne[i]);

        }

createInput.style.display='block';
button1.style.display="block";

}
button1.onclick=function () {
    let tablesName=tableName.value;
    let createdOption= new Option(tablesName);
    createdOption.selected=true;
   selectTwo.appendChild(createdOption);//选中option

    let tr=document.createElement('tr');
    trs++;
       trID.push(trs+"w100");
       tr.id=trID[trID.length-1];
    let createNum2 = createNum1.value;
    let  tdWord=new Array();
    for(let j=0;j<createNum2;j++){
      tdWord[j]=document.getElementById(colId[j]);
        let td=document.createElement('td');
        td.innerHTML=tdWord[j].value;
        tr.appendChild(td);
    }
table.appendChild(tr);
}


function Faddrow() {
   createInput.style.display='none';
    button1.style.display='none';
    createTable.style.display='none';
    button2.style.display='block';
    let createNum = createNum1.value;
    for (var i = 0; i < createNum; i++) {
        addRow[i] = document.createElement("input");
        addRow[i] .type="text";
        addRow[i] .style.width ='100px';
        addRow[i] .style.borderRadius ='3px';
        addRow[i] .id=rowId[i];

        addRowValue.appendChild(addRow[i]);
    }
   addRowValue.style.display='block';
}

button2.onclick=function () {
    let tr2=document.createElement('tr');
    trs++;
    trID.push(trs+"w100");
    tr2.id=trID[trID.length-1];
    let createNum2 = createNum1.value;
    let  tdsWord=new Array();
    for(let j=0;j<createNum2;j++){
        tdsWord[j]=document.getElementById(rowId[j]);
        let td1=document.createElement('td');
        td1.innerHTML=tdsWord[j].value;
        tr2.appendChild(td1);
    }
    table.appendChild(tr2);

}



function DELETEROW() {
    createInput.style.display='none';
    button1.style.display='none';
    createTable.style.display='none';
    button2.style.display='none';
    addRowValue.style.display='none';
    button3.style.display='block';
var deleted= document.getElementById(trID.pop());
table.removeChild(deleted);
}
button3.onclick=function () {
    var deleted= document.getElementById(trID.pop());
    table.removeChild(deleted);

}