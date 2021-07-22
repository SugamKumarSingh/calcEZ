var newTerm = "";
var lastBtn = "+";
var percentValue;

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

const toolTip = document.querySelector('.tooltip');
window.addEventListener('mousemove', toolTipXY);

function toolTipXY(e) {
    let x = e.clientX,
        y = e.clientY;
    toolTip.style.top = (y + 20) + 'px';
    toolTip.style.left = (x + 20) + 'px';
};

document.getElementById('resultText').addEventListener('mouseenter', function () {
    toolTip.setAttribute('style', 'display: block')
})

document.getElementById('resultText').addEventListener('mouseleave', function () {
    toolTip.removeAttribute('style', 'display: block')
})

const result = document.getElementById('resultText');
const calculation = document.getElementById('calculationText');

function wrightNum(num) {
    if (!(newTerm.includes('.') && num === '.')) {
        calculation.textContent += num;
        newTerm += num;
        console.log(newTerm);
    }
}

function updateResult(addThis, updateBtn) {
    switch (lastBtn) {
        case "+":
            result.textContent = parseFloat(result.textContent) + parseFloat(addThis);
            break;
        case "-":
            result.textContent = parseFloat(result.textContent) - parseFloat(addThis);
            break;
        case "x":
            result.textContent = parseFloat(result.textContent) * parseFloat(addThis);
            break;
        case "/":
            result.textContent = parseFloat(result.textContent) / parseFloat(addThis);
            break;
    }
    newTerm = "";
    lastBtn = updateBtn;
}

function op(btn) {
    if (calculation.textContent.length !== 0) {
        if (!['+', '-', "x", '/'].includes(calculation.textContent[calculation.textContent.length - 1])) {
            updateResult(newTerm, btn);
            calculation.textContent += btn;
        } else {
            calculation.textContent = calculation.textContent.slice(0, calculation.textContent.length - 1);
            calculation.textContent += btn;
            lastBtn = btn;
        }
    }
}

function percent(btn) {
    if (calculation.textContent.length !== 0 && newTerm > 0) {
        if (btn == "%") {
            percentValue = (parseFloat(result.textContent) * parseFloat(newTerm)) / 100;
            updateResult(percentValue, btn);
            calculation.textContent += btn;
        }
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


document.getElementById('addition').addEventListener('click', function () {
    op('+')
});
document.getElementById('subtraction').addEventListener('click', function () {
    op('-')
});
document.getElementById('division').addEventListener('click', function () {
    op('/')
});
document.getElementById('multiplication').addEventListener('click', function () {
    op('x')
});
document.getElementById('percentage').addEventListener('click', function () {
    percent('%')
});


document.getElementById('clear').addEventListener('click', function () {
    calculation.textContent = "";
    result.textContent = 0;
    newTerm = ""
});

document.getElementById('dot').addEventListener('click', function () {
    wrightNum('.')
});

document.getElementById('equal').addEventListener('click', function () {
    updateResult(newTerm, "=");
    calculation.textContent = result.textContent;
});

const tooltip = document.getElementsByClassName('tooltip')[0];

function restoreText() {
    tooltip.textContent = 'Click To Copy';
}

function copy() {
    document.execCommand("copy");
    tooltip.textContent = 'Copied!'
}

document.getElementsByClassName('nightModeToggle')[0].addEventListener('click', function () {
    document.getElementsByClassName('switch')[0].classList.toggle("switchNM");
    document.getElementsByClassName('nightModeToggle')[0].classList.toggle("nightModeToggleNM");
    document.getElementsByClassName('calculator')[0].classList.toggle("styleNM");
    document.getElementsByClassName('screen')[0].classList.toggle("screenNM");
    document.querySelectorAll('.style').forEach(function (button) {
        button.classList.toggle("styleNM");
    });
    result.classList.toggle('resultTextNM');
    calculation.classList.toggle('calculationNM');
})