document.getElementById("seek").addEventListener("click", function () {
    var inputId = document.getElementById("seekid").value
    var dataConsultada = localStorage.getItem(inputId)
    var array = dataConsultada.split(',')
    console.log(array, dataConsultada)
    if (dataConsultada == null) {
        alert("There is not information about")
    } else {
        var Results = (parseFloat(array[2])+parseFloat(array[3])+parseFloat(array[4]))/3
        var pElement = document.getElementById("seek")
        pElement.innerHTML = array[0] + "<br>"
        pElement.innerHTML = pElement.innerHTML + "Name: " + array[1] + "<br>"
        pElement.innerHTML = pElement.innerHTML + "Score 1: " + array[2] + "<br>"
        pElement.innerHTML = pElement.innerHTML + "Score 2: " + array[3] + "<br>"
        pElement.innerHTML = pElement.innerHTML + "Score 3: " + array[4] + "<br>" + "Sacaste tanto, perdiste o ganaste" + "<br>"
        pElement.innerHTML = pElement.innerHTML + "Final Score: " + Results
        if (Results >=3) {
            alert("Passed")           
        }else{
            alert("Not Passed")
        }

        




    }


})