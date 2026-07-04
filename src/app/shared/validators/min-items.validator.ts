import {
  AbstractControl,
  FormArray,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export function minItemsValidator(min: number): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    const formArray = control as FormArray;

    const validItems = formArray.controls.filter(item =>
      item.value &&
      item.value.toString().trim() !== ''
    );

    return validItems.length >= min
      ? null
      : { minItems: true };

  };

}