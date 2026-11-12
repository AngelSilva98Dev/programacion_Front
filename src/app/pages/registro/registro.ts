
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-registro',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './registro.html',
    styleUrl: './registro.css'
})
export class Registro {

    registroForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.registroForm = this.formBuilder.group({
            nombre: ['', Validators.required],
            email: ['', Validators.required],
            direccion: this.formBuilder.group({
                calle: [''],
                ciudad: ['']
            })
        });
    }

    onSubmit(): void {
        console.log(this.registroForm.value);
    }

    cargarDireccion(): void {
        this.registroForm.patchValue({
            direccion: {
                calle: 'Calle Falsa 123',
                ciudad: 'Springfield'
            }
        });
    }
}