// Calculator Project !!!
let heldValue = null;
let heldOperation = null;
let nextValue = null;

$('.digits button').click(function () {
    if (nextValue === null) {
        nextValue = 0;
    } 
        nextValue = nextValue + $(this).text()

        $('.next-value').text(updateDisplay('.next-value', nextValue))
})

$('.add').click(function () {
    $(this).html(console.log('Add Function is working')
    )
    setHeldOperation(add);
    $('.next-operation').text('+')
    updateDisplay();
})

$('.subtract').click(function () {
    $(this).html(console.log('Subtract Function is working')
    )
    setHeldOperation(subtract);
    $('.next-operation').text('-')
    updateDisplay();
})

$('.multiply').click(function () {
    $(this).html(console.log('Multiply Function is working')
    )
    setHeldOperation(multiply);
    $('.next-operation').text('*')
    updateDisplay();
})

$('.divide').click(function () {
    $(this).html(console.log('Divide Function is working')
    )
    setHeldOperation(divide);
    $('.next-operation').text('/')
    updateDisplay();
})

$('.equals').click(function () {
    $(this).html(console.log('Equals Function is working')
    )
    setHeldOperation(null)
    $('.next-operation').text('')
    updateDisplay();
})

$('.clear-all').click(function () {
    $('.next-value').text(nextValue = null);
    $('.held-value').text(heldValue = null);
    $('.next-operation').text(heldOperation = null);
})

$('.clear-entry').click(function () {
    $('.next-value').text(nextValue = null);
})

function showValue(location, value) {
    if (value === null) {
        $(location).text('')
    } else {
        $(location).text( Number(value) )
    }
}

function updateDisplay() {
    showValue('.held-value', heldValue);
    showValue('.next-value', nextValue)
}

//
function add (x, y) {
    return (Number(x) + Number(y))
}

function subtract (x, y) {
    return (Number(x) - Number(y))
}

function multiply (x, y) {
    return Number(x) * Number(y)
}

function divide (x, y) {
    return Number(x) / Number(y)
}
//

function setHeldOperation(operation) {
    if (heldOperation !== null) {
        heldValue = heldOperation(heldValue, nextValue)
    }
    else if(nextValue !== null)
    {
        heldValue = nextValue;
    }
        nextValue = null;
        heldOperation = operation;
}


