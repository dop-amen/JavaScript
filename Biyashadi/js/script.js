let gender = 'Male'
let age = 35
let area = 'Dhaka'
let JobJob = 'Yes'
let shompod = 'Yes'

if (gender == 'Male') {
    console.log('Proceed to age');
    if (age >=30 && age < 40 ) {
        console.log('Proceed to area');
        if (area == 'Dhaka') {
            console.log('Proceed to JobJob');
            if (JobJob == 'Yes') {
                console.log('Proceed to Shompod');
                if (shompod == 'Yes') {
                    console.log('Congrats ma man. You are eligible, Phone deo. Number-01987654321');
                    
                }
            }
            else {
                console.log('Kam koren sir pls');
            }
        }
        else {
            console.log('Network er baire');
        }
    }
    
    else {
        console.log('NAH NAH')
    }
}
else{
    console.log('Hoibona. Bad den');
    
}