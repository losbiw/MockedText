const input = document.getElementById('input');
const result = document.getElementById('result');
const submit = document.getElementById('submit');

submit.addEventListener('click', showResult);

window.addEventListener('keydown', e=>{
    if(e.key === "Enter") showResult();
});

function convert(string){
    string = string.toLowerCase();
    const spreaded = [...string];

    let mocked = "";
    let spaces = [];
    let spaceIndex = 0;

    for(i in spreaded){
        if(spreaded[i] == " "){
            spreaded.splice(i, 1);
            spaces.push(i);
        }
    }
    
    for(i in spreaded){
        if(spaces.lenght !== 0 && i === spaces[spaceIndex]){
            mocked += " ";
            spaceIndex++;
        }
        
        if(i % 2 !== 0){
            spreaded[i] = spreaded[i].toUpperCase();
            mocked += spreaded[i];
        }
        else mocked += spreaded[i];
    }

    return mocked;
}

function showResult(){
    if(input.value !== ""){
        const string = input.value;
        const converted = convert(string);

        result.setAttribute('style', 'visibility: visible');
        result.textContent = converted;
    }
}