import {AbstractControl, ValidatorFn} from '@angular/forms';

export const dateValidator: ValidatorFn = (control: AbstractControl) => {
  ​
    if (control?.value === null)
      return null;
  ​
    const valueStr: string = control?.value;
  ​
    const str: string[] = valueStr.split('-');
    const date = new Date(+str[0], +str[1] - 1, +str[2]);
    const now = new Date();
  ​
    return date >= now ? null : {isBeforeToday: true};
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  