import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  constructor() { }

  show(text: string, options: any = []) {
    this.toasts.push({text,...options});
  }

  showDanger(text: string, options: any = {}) {
    this.toasts.push({text,className:'bg-danger text-light',header:'Error',...options});
  }

  showWarning(text: string, options: any = {}) {
    this.toasts.push({text,className:'bg-danger text-light',header:'Warning',...options});
  }

  showSuccess(text: string, options: any = {}) {
    this.toasts.push({text,className:'bg-danger text-light',header:'Success',...options});
  }

  showPrimary(text: string, options: any = {}) {
    this.toasts.push({text,className:'bg-danger text-light',...options});
  }

  showInfo(text: string, options: any = {}) {
    this.toasts.push({text,className:'bg-danger text-light',...options});
  }

  showDark(text: string, options: any = {}) {
    this.toasts.push({text,className:'bg-danger text-light',...options});
  }
}
