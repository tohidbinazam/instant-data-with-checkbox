/**
 * clock degree count
 * @param {*} time 
 * @param {*} current 
 * @returns 
 */
function alltime(time, current){
    return ((current * 360) / time) - 180
}


/**
 * all calculator function
 */
let all_data = [];
let getval = (val) => {
    all_data.push(val)
    input.innerHTML = all_data.join('');
}

let result = () => {
    let cal_str = all_data.join('');
    cal_output.innerHTML = eval(cal_str);
}
let allclear = () => {
    all_data = [];
    input.innerHTML = 0;
    cal_output.innerHTML = '00';
}
let clears = () => {
    all_data.pop();
    input.innerHTML = all_data.join('');
}