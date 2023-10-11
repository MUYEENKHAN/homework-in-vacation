// let btn, name, phone, status;
let btn = document.getElementById('btn')
let name = document.getElementById('name')
let phone = document.getElementById('phone')
let status = document.getElementById('status')

let totalToken = []

let totalTokens = document.getElementById('total-token')
let totalActive = document.getElementById('total-active');
let totalCompleted = document.getElementById('total-completed')
let totalCanceled = document.getElementById('total-canceled')


btn.addEventListener('click', function (e) {
    e.preventDefault();
    let moni;
    if (moni = totalToken.find(function (element) {
        return element.name == name.value && element.phone == phone.value;

    })) {
        moni.status = status.value
    } else {
        let newToken = {
            id: totalToken.length + 1,
            name: name.value,
            phone: phone.value,
            status: status.value
        }
        totalToken.push(newToken)
    }


    totalTokens.innerText = `Total Tokens:0${totalToken.length}`



    let activeToken = totalToken.filter(function (item) {
        return item.status == 'active'
    })

    let completedToken = totalToken.filter(function (item) {
        return item.status == 'completed'
    })

    let canceledToken = totalToken.filter(function (item) {
        return item.status == 'canceled'
    })

    activeHandler(activeToken)
    completedHandler(completedToken)
    canceledHandler(canceledToken)
    tt()

    name.value = '';
    phone.value = '';
    status.value = 'active';

    console.log('clicked');
})


function activeHandler(activeToken) {
    totalActive.innerText = activeToken.length;
    let activeItems = document.getElementById('items');

    let activeArray = [];

    for (let x = 0; x < activeToken.length; x++) {
        activeArray.push(` <div class="item">
        <div>
            <span id="name">${activeToken[x].name}</span>
            <p>${activeToken[x].phone}</p>
        </div>
        <span data-id="${activeToken[x].id}" id="tkn-no">token no:0${activeToken[x].id}</span>
        </div>` )
    }

    activeItems.innerHTML = activeArray.join("");

    // console.log(activeToken);
}

function completedHandler(completedToken) {
    totalCompleted.innerText = completedToken.length;

    let completedItems = document.getElementById('completed');

    let completedArray = [];

    for (let x = 0; x < completedToken.length; x++) {
        completedArray.push(` <div class="item">
        <div>
            <span id="name">${completedToken[x].name}</span>
            <p>${completedToken[x].phone}</p>
        </div>
        <span data-id="${completedToken[x].id}" id="tkn-no">token no:0${completedToken[x].id}</span>
        </div>` )
    }

    completedItems.innerHTML = completedArray.join("");

    // console.log(completedToken);
}

function canceledHandler(canceledToken) {
    totalCanceled.innerText = canceledToken.length;

    let canceledItems = document.getElementById('canceled');

    let canceledArray = [];

    let tkn;

    for (let x = 0; x < canceledToken.length; x++) {
        canceledArray.push(` <div class="item">
        <div>
            <span id="name">${canceledToken[x].name}</span>
            <p>${canceledToken[x].phone}</p>
        </div>
        <span data-id="${canceledToken[x].id}" id="tkn-no">token no:0${canceledToken[x].id}</span>
        </div>` )
        // tkn = canceledToken[x].id;
    }

    canceledItems.innerHTML = canceledArray.join("");
}

function tt() {
    let store;
    let idNo;
    let tknBtn = document.querySelectorAll('#tkn-no');
    tknBtn.forEach(function (item) {
        item.addEventListener('click', function (e) {
            idNo = e.target.getAttribute("data-id")
            store = totalToken.find(function (item) {
                return item.id == idNo
            })
            name.value = store.name
            phone.value = store.phone
            status.value = store.status
            // console.log(store);
        })
    })
}
