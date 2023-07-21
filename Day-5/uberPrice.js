class Uber{
    rupeesPerKM = 25;
    constructor(name, from, to, totalKM, isFirstBooking){
        this.name = name;
        this.from = from;
        this.to = to;
        this.totalKM = totalKM;
        this.isFirstBooking = isFirstBooking;
    }

    getUberPrice(){
        if(this.isFirstBooking){
            let rideCost = this.totalKM * this.rupeesPerKM;
            let afterTenPerDiscount = rideCost - rideCost * 0.1;
            console.log(`YAY! You got a welcome discount of 10 percent.`);
            console.log(`Uber Price for the ride after discount is Rs. ${afterTenPerDiscount}`);
        }else{
            let rideCost = this.totalKM * this.rupeesPerKM;
            console.log(`Uber Price for the ride is Rs. ${rideCost}`);
        }
    }
}

const obj = new Uber("Rajesh", "Tambaram", "Perambur", 32, true);
obj.getUberPrice();