import { LightningElement } from 'lwc';

export default class Lwc_Input_variable extends LightningElement {

    name='Mayur';
    phone='123456789';
    salary=5
    dob;
    finalSal;

    showme(){
        const a=this.salary;
        this.finalSal=a*2
    }
}