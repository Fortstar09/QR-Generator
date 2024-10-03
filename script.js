let inputData = document.getElementById("data");
let sizeValue = document.getElementById("size");
let fgColor = document.getElementById("fgColor");
let bgColor = document.getElementById("bgColor");
const generateBtn = document.getElementById("generate");
const editBtn = document.getElementById("edit");
let image = document.getElementById("image");
let anchor = document.getElementById('anchor');




function getEdit() {

}

function buttonClick() {
    let data = inputData.value;
    let size = sizeValue.value;
    let fg_color = fgColor.value;
    let bg_color = bgColor.value;

    console.log(data, size, fg_color, bg_color);

    $.ajax({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/qrcode?data=${data}&format=png&size=${size}&fg_color=${fg_color}&bg_color=${bg_color}`,
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
editBtn.addEventListener("click", buttonClick);


// var data = 'https://api-ninjas.com';




// $(document).ready(function () {
//     $("#generate").click(function () {
//         $("#p").hide();
//     });
// });




// nqlaCF35mmdeLKIURJdUQQ==uGyl03HDBQFu3QXW