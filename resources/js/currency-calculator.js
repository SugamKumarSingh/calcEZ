var newTerm = "";

for (var item of document.querySelectorAll(".style")) {
    item.addEventListener("mousedown", function (evt) {
        evt.target.classList.add("styleOnClick");
    }, false);
}

document.getElementById('clear').addEventListener("mousedown", function () {
    document.querySelector(".style").classList.add("styleOnClick");
    document.getElementsByTagName('svg')[0].setAttribute("width", "13px");
    document.getElementsByTagName('svg')[0].setAttribute("height", "13px");
});

document.addEventListener("mouseup", function () {
    for (var item of document.querySelectorAll(".style")) {
        item.classList.remove("styleOnClick");
    }
    document.getElementsByTagName('svg')[0].classList.remove('styleOnClick');
    document.querySelector(".style").classList.remove("styleOnClick");
    document.getElementsByTagName('svg')[0].setAttribute("width", "15px");
    document.getElementsByTagName('svg')[0].setAttribute("height", "15px");
});

const convertFrom = document.getElementById('convertFromText');
const convertTo = document.getElementById('convertToText');

function wrightNum(num) {
    if (!(convertFrom.textContent.includes('.') && num === '.')) {
        if (convertFrom.textContent == "0") {
            if (num == ".") {
                convertFrom.textContent += num;
            }
            else {
                convertFrom.textContent = num;
            }
        }
        else {
            convertFrom.textContent += num;
        }
        convertTo.textContent = (parseFloat(convertFrom.textContent) * 0.0134344).toFixed(2);
    }
}

document.getElementById('num0').addEventListener('click', function () {
    wrightNum(0)
});
document.getElementById('num1').addEventListener('click', function () {
    wrightNum(1)
});
document.getElementById('num2').addEventListener('click', function () {
    wrightNum(2)
});
document.getElementById('num3').addEventListener('click', function () {
    wrightNum(3)
});
document.getElementById('num4').addEventListener('click', function () {
    wrightNum(4)
});
document.getElementById('num5').addEventListener('click', function () {
    wrightNum(5)
});
document.getElementById('num6').addEventListener('click', function () {
    wrightNum(6)
});
document.getElementById('num7').addEventListener('click', function () {
    wrightNum(7)
});
document.getElementById('num8').addEventListener('click', function () {
    wrightNum(8)
});
document.getElementById('num9').addEventListener('click', function () {
    wrightNum(9)
});
document.getElementById('dot').addEventListener('click', function () {
    wrightNum('.')
});
document.getElementById('clear').addEventListener('click', function () {
    convertFrom.textContent = 0;
    convertTo.textContent = 0;
    newTerm = ""
});
document.getElementById('backspace').addEventListener('click', function () {
    convertFrom.textContent = convertFrom.textContent.slice(0, -1);
    convertTo.textContent = (parseFloat(convertFrom.textContent) * 0.0134344).toFixed(2);
});

document.getElementsByClassName('nightModeToggle')[0].addEventListener('click', function () {
    document.getElementsByClassName('switch')[0].classList.toggle("switchNM");
    document.getElementsByClassName('nightModeToggle')[0].classList.toggle("nightModeToggleNM");
    document.getElementsByClassName('calculator')[0].classList.toggle("styleNM");
    document.getElementsByClassName('convertFromScreen')[0].classList.toggle("convertFromScreenNM");
    document.getElementsByClassName('convertToScreen')[0].classList.toggle("convertToScreenNM");
    document.getElementsByClassName('currencyFrom')[0].classList.toggle("currencyFromNM");
    document.getElementsByClassName('currencyTo')[0].classList.toggle("currencyToNM");
    document.querySelectorAll('.style').forEach(function (button) {
        button.classList.toggle("styleNM");
    });
    convertFrom.classList.toggle('resultTextNM');
    convertTo.classList.toggle('resultTextNM');
})