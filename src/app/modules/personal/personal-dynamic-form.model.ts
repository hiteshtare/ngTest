import {
    DynamicFormControlModel,
    DynamicInputModel,
    DynamicDatePickerModel
} from '@ng2-dynamic-forms/core';

export const PERSONAL_DYNAMIC_FORM_MODEL: DynamicFormControlModel[] = [

    new DynamicInputModel({

        id: 'firstName',
        label: 'First Name',
        placeholder: 'Enter your first name',
        validators: {
            required: null
        }
    }),

    new DynamicInputModel({
        id: 'lastName',
        label: 'Last Name',
        placeholder: 'Enter your last name',
        validators: {
            required: null
        }
    }),
    new DynamicInputModel({
        id: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        validators: {
            required: null
        }
    }),
    new DynamicInputModel({
        id: 'mobileNo',
        label: 'Mobile No',
        placeholder: 'Enter your mobile no',
        validators: {
            required: null
        }
    }),

    new DynamicDatePickerModel({
        id: 'dob',
        label: 'Date Of Birth',
        placeholder: 'Enter your Date of Birth',
        validators: {
            required: null
        },
        format: 'dd/mm/yy'
    })
];
