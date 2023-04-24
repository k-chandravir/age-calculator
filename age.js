function calculateAge(){
    let date = document.getElementById("date").value;
    const bDay = new Date(date);
    let birthDate = bDay.getDate();
    let birthMonth = bDay.getMonth()+1;
    let birthYear = bDay.getFullYear();

    const sysDate = new Date();
    let currentDate = sysDate.getDate();
    let currentMonth = sysDate.getMonth()+1;
    let currentYear = sysDate.getFullYear();

    let months = new Map([
        [1, 31],
        [3, 31],
        [4, 30],
        [5, 31],
        [6, 30],
        [7, 31],
        [8, 31],
        [9, 30],
        [10, 31],
        [11, 30],
        [12, 31]
    ]);

    if(currentDate > birthDate){
        document.querySelector("#day").innerHTML = Math.abs(currentDate-birthDate);
    }else{
        if((currentYear % 4 == 0) && currentMonth == 2){
            currentMonth--;
            currentDate += 29;
        }else{
            currentDate += 28;
            currentMonth--;
        }

        document.querySelector("#day").innerHTML = Math.abs(currentDate-birthDate);
    }

    if(currentMonth > birthMonth){
        document.querySelector("#month").innerHTML = Math.abs(currentMonth-birthMonth);
    }else{
        currentMonth += 12;
        currentYear--;
        document.querySelector("#month").innerHTML = Math.abs(currentMonth-birthMonth);
    }
    document.querySelector("#year").innerHTML = Math.abs(currentYear-birthYear);
    
}





