let inputData = document.getElementById("data");
const generateBtn = document.getElementById("generate");
let image = document.getElementById("image");
let anchor = document.getElementById('anchor');


function buttonClick() {
    let data = inputData.value;
    var fmt = 'png'
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/qrcode?data=' + data + '&format=' + fmt,
        headers: { 'X-Api-Key': 'nqlaCF35mmdeLKIURJdUQQ==uGyl03HDBQFu3QXW' },
        contentType: 'application/json',
        success: function (result) {
            image.src = `data:image/png;base64,${result}`;
            anchor.href = `data:image/png;base64,${result}`;
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

generateBtn.addEventListener("click", buttonClick);


// var data = 'https://api-ninjas.com';




// $(document).ready(function () {
//     $("#generate").click(function () {
//         $("#p").hide();
//     });
// });




// nqlaCF35mmdeLKIURJdUQQ==uGyl03HDBQFu3QXW