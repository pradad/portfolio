//alert("Si estoy ejecutandome!")

document.getElementById("SaveData").addEventListener("click",function(e){
    e.preventDefault()
    var studentID = document.getElementById("StudentId").value
    var studentName = document.getElementById("Studentname").value
    console.log(studentID,studentName)
    if(studentID=="" || studentName==""){
        alert("Debe llenar los campos!")
    }else{
        localStorage.setItem(studentID,[studentName,"3","4","5"])
        alert("Todo quedó guardado!")
    }
    
})
