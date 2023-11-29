// CREATE AN ARRAY OF EMPLOYEES
// let employees,testEmployees = [
    let employees = [
[10000001,'Melanie Gomez',2345,'mgomez@gmail.edu','Sales'],
[10000002,'Stefanie Rasmussen',2355,'sras@gmail.edu','Administrative'],
[10000003,'Maria Sachez',2365,'msanchezz@gmail.edu','Engineering'],
[10000004,'John Doe',2366,'jdoe@gmail.edu','Marketing'],
[10000005,'Matt Damon',2349,'mdamon@gmail.edu','Sales']]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// window.addEventListener(load,init)
window.addEventListener("load",init)
const $ = (id) => document.getElementById(id)
let form = $('addForm')
let employeeTable = $('empTable')
// let empTableData = document.querySelector(employeeTable.tbody);
let empTableData = $('empTableBody')
let empCount =$('empCount')
// let empId = $('empId')


// let storedEmployees = []
function init() {
    // IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
    // console.log('employees array: ' + employees)
    let storageEmp = localStorage.getItem('employees') || ''
    if (storageEmp.length >= 1){
        employees = JSON.parse(localStorage.getItem('employees'));
    }
    buildGrid(employees);
}

form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    // window.alert("in form event listener)")
    e.preventDefault;

    // GET THE VALUES FROM THE TEXT BOXES
    // ids from index.html addForm  id name extension email department empTable 

    let inputId =  $('empId').value;
    let inputName = $('name').value;
    let inputExt = $('extension').value;
    let inputEmail = $('email').value;
    let inputDept = $('department').value;


    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmp = [inputId,inputName,inputExt,inputEmail,inputDept];
    // window.alert("existing employees" + employees)
    // window.alert("new added record" + newEmp)

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmp)
    // window.alert(employees); //show changed array
    // BUILD THE GRID
    buildGrid(employees);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('empId').focus();
});

// DELETE EMPLOYEE
employeeTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    // window.alert('in table event listener)')
    // if (e.target.classList.contains('delete')) 
    // {
        if (confirm('Are you sure you want to delete this employee?')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE) move up to table body(tbody-tr-td) so can delete row
        // rowDel = e.target
        rowDel = e.target.parentNode.parentNode.rowIndex
        // window.alert("row to be deldeted is " + rowDel)
        employeeTable.deleteRow(rowDel)

        // REMOVE EMPLOYEE FROM ARRAY without leaving gaps
        employees.splice(rowDel-1,1)

        // BUILD THE GRID
        buildGrid(employees)
        }
    // }
})

// BUILD THE EMPLOYEES GRID
function buildGrid(employees) {

    let employeeCount = 0
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTableData.innerHTML = '';
    
    let tdIns=[''];

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    employees.forEach(emp => {
        tdIns += "<tr>"
        for(let i=0; i < emp.length; i++){
            tdIns += '<td> ' + emp[i] + '</td>' ;
        }
        tdIns += '<td> <button> X </button> </td> </tr>'
        employeeCount += 1;

        // directly set tbody content to tdIns
        // empTableData.innerHTML = tdIns;

        // BIND THE TBODY TO THE EMPLOYEE TABLE
        //using appendChild on tbody to append a new row.
        let trow = document.createElement('tr');
        trow.innerHTML = tdIns;
        empTableData.appendChild(trow)
        tdIns = ''  //set it to blank before new rows creation

  

    });
  
    // UPDATE EMPLOYEE COUNT
    empCount.innerHTML = ("("+ employeeCount + ")")
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))
};