let cntPerson = 0;

const cntUp = () => {
    cntPerson++;
    console.log(cntPerson)
}

const reply = () => {
    const str = "どうぞどうぞ";
    const action = str.repeat(cntPerson);
    alert(action);
    cntPerson = 0;
}

const cntDown = () => {
    cntPerson--;
    if (cntPerson < 0) {
        alert("もう誰もいない...")
        cntPerson = 0;
    }
}