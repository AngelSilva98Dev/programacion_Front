import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-pasatiempos',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './pasatiempos.html',
    styleUrl: './pasatiempos.css'
})
export class Pasatiempos {

    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            pasatiempos: this.formBuilder.array([
                this.formBuilder.control('')
            ])
        });
    }

    get pasatiempos(): FormArray {
        return this.form.get('pasatiempos') as FormArray;
    }

    agregarPasatiempo(): void {
        this.pasatiempos.push(this.formBuilder.control(''));
    }

    onSubmit(): void {
        console.log(this.form.value);
    }
}