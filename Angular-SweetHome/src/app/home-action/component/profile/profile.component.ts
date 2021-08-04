import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  form !: FormGroup;
  loading: boolean = false;
  url = '';
  @ViewChild('fileInput') fileInput !: ElementRef;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  onSelectFile(event: Event) {
    // @ts-ignore
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      // @ts-ignore
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        // @ts-ignore
        this.url = event.target.result;
      }
    }
  }

  clearFile() {
    // @ts-ignore
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
}
