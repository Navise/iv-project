const reg_val = document.querySelector(".r0");
console.log(reg_val.value)

const input = document.querySelectorAll("input");

inputValues = {};

input.forEach(input => {
    let defval = input.value;

    input.addEventListener("focus" , ()=>{
        if(input.value == defval){
            input.value = ''
        }
    })

    input.addEventListener("keydown", (event)=>{
            if(event.key == "Enter"){
                const className = input.className;
                const value = input.value;
                let hexValue = parseInt(input.value).toString(16);
                
                while(hexValue.length < 8){
                    hexValue = '0' + hexValue;
                }
                hexValue = '0x'+hexValue;
                input.value = hexValue;
                inputValues[className] = value;
            }
    })
})
