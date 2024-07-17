import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logInOutline } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonIcon,
  IonToast,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonInput,
    IonButton,
    IonIcon,
    IonToast,
  ],
})
export class HomePage {
  loginFailed: boolean = false;

  get emailError(): string {
    const email = this.loginForm.controls.email;
    return email.errors?.['required']
      ? 'Required'
      : email.errors?.['email']
      ? 'Invalid format'
      : 'Valid';
  }

  get passwordError(): string {
    const password = this.loginForm.controls.password;
    return password.errors?.['required'] ? 'Required' : 'Valid';
  }

  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private nav: NavController) {
    addIcons({ logInOutline });
  }

  signIn() {
    this.loginFailed = true;
  }
}
