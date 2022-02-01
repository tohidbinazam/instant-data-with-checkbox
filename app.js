const all_checkbox = document.querySelectorAll('input[type="checkbox"]');
const output = document.querySelector('.output');


all_checkbox.forEach(data => {
    data.addEventListener('change', function(){
        let checked_data = document.querySelectorAll('input[type="checkbox"]:checked')
        const all_val = [];
        checked_data.forEach(C_data =>{
            all_val.push(C_data.value)
        })
        output.innerHTML = '';
        all_val.forEach((output_data)=>{

            output.innerHTML += `<li class="list-group-item">${output_data}</li>`
        })
    }) 
})



const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hours = document.querySelector('.hours');


setInterval(() => {

    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hourss = date.getHours();

    sec.style.transform = `rotate(${alltime(60, seconds)}deg)`
    min.style.transform = `rotate(${alltime(60, minutes)}deg)`
    hours.style.transform = `rotate(${alltime(12, hourss)}deg)`
}, 1000)


const input = document.querySelector('.top_monitor');
const cal_output = document.querySelector('.bottom_monitor');