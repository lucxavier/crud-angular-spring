import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormUtilsService {
  constructor() {}

  getFieldErrorMessage(formGroup: FormGroup, fieldName: string): string {
    const field = formGroup.get(fieldName) as FormControl;
    return this.getErrorMessageFromField(field);
  }

  getErrorMessageFromField(field: UntypedFormControl): string {
    if (field?.hasError('required')) {
      return 'O campo é obrigatório.';
    }

    if (field?.hasError('maxlength') && field.errors) {
      const requiredLength = field.errors['maxlength']['requiredLength'];
      return `O campo não pode ter mais que ${requiredLength} caracteres.`;
    }

    if (field?.hasError('minlength') && field.errors) {
      const requiredLength = field.errors['minlength']['requiredLength'];
      return `O campo não pode ter menos que ${requiredLength} caracteres.`;
    }

    return field['errors'] ? 'Error' : '';
  }
}
