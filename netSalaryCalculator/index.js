// get the form element from index.html
let form = document.getElementById('prompt');
form.addEventListener('submit',(e) => {
    e.preventDefault()
    let monthlyPay = document.getElementById('monthlyPay').value
    // console.log(monthlyPay);
    //  function to calculate the total amount to be deducted as payee tax;
    const calculatePayeeTax = () => {
        let rateOfTax;
        let payeeTax;
        //  get the different applicable tax rates
        if (monthlyPay >= 0 && monthlyPay < 24000){
            rateOfTax = 10;
            payeeTax = rateOfTax * 0.01 * monthlyPay;
            return payeeTax;
        }
        else if (monthlyPay >= 24000 && monthlyPay <= 32333){
            rateOfTax = 25;
            payeeTax = rateOfTax * 0.01 * monthlyPay;
            return payeeTax;
        }
        else if(monthlyPay > 32333){
            rateOfTax = 30;
            payeeTax = rateOfTax * 0.01 * monthlyPay
            return payeeTax;
        }
        else{
            console.log("Not a valid monthly pay")
        }
    };
    // calculate amount to be deducted as nhif payments
    const calculateNhifDeductions = () => {
        let deduction;
        if(monthlyPay >= 0 && monthlyPay <= 5999){
            deduction = 150;
            return deduction;
        }
        else if(monthlyPay > 5999 && monthlyPay <= 7999){
            deduction = 300 
            return deduction;
        }
        else if(monthlyPay > 7999 && monthlyPay <= 11999){
            deduction = 400
            return deduction;
        }
        else if(monthlyPay > 11999 && monthlyPay <= 14999){
            deduction = 500
            return deduction;
        }
        else if(monthlyPay > 14999 && monthlyPay <= 19999){
            deduction = 600
            return deduction;
        }
        else if(monthlyPay > 19999 && monthlyPay <= 24999){
            deduction = 750
            return deduction;
        }
        else if(monthlyPay > 24999 && monthlyPay <= 29999){
            deduction = 850
            return deduction;
        }
        else if(monthlyPay > 29999 && monthlyPay <= 34999){
            deduction = 900
            return deduction;
        }
        else if(monthlyPay > 34999 && monthlyPay <= 39999){
            deduction = 950
            return deduction;
        }
        else if(monthlyPay > 40000  && monthlyPay <= 44999){
            deduction = 1000
            return deduction;
        }
        else if(monthlyPay > 44999 && monthlyPay <= 49999){
            deduction = 1100
            return deduction;
        }
        else if(monthlyPay > 49999 && monthlyPay <= 59999){
            deduction = 1200
            return deduction;
        }
        else if(monthlyPay > 59999 && monthlyPay <= 69999){
            deduction = 1300
            return deduction;
        }
        else if(monthlyPay > 69999 && monthlyPay <= 79999){
            deduction = 1400
            return deduction;
        }
        else if(monthlyPay > 79999 && monthlyPay <= 89999){
            deduction = 1500
            return deduction;
        }
        else if(monthlyPay > 89999 && monthlyPay <= 99999){
            deduction = 1600
            return deduction;
        }
        else if(monthlyPay > 100000 ){
            deduction = 1700
            return deduction;
        }
        else{
            console.log("Kindly enter a valid monthlyPay")
        }
        
    };
    

    const calculateNssfDeductions = (pension = true) => {

        if(pensionable = true){
            pension = 0.06 * monthlyPay;
            return pension;
        }
        else{
            
            if (payFrequency === Monthly){
                pension = 400;
                return pension;
            }
            else if (payFrequency === Biweekly){
                pension = 200;
            }
            else if (payFrequency === Weekly){
                pension = 100;
            }
            return pension;
        }
    }
        
            
        
        
    
    // calculatePayeeTax()
    // console.log(calculateNhifDeductions())
    const netSalary = monthlyPay - calculatePayeeTax() - calculateNhifDeductions() - calculateNssfDeductions();
    const netSalo = document.getElementById('netSalary')
    netSalo.innerText = Math.floor(netSalary);
    })