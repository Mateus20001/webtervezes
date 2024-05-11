import { Component } from '@angular/core';
import { Jelentkezo } from '../jelentkezes';

@Component({
  selector: 'app-allas-form',
  templateUrl: './allas-form.component.html',
  styleUrls: ['./allas-form.component.css']
})
export class AllasFormComponent {

  powers = ['Takarító', 'Programozó',
            'Közgazdász', 'Pincér'];
  user = JSON.parse(localStorage.getItem('user') as string);

  model = new Jelentkezo(this.user.email, this.powers[0]);

  submitted = false;

  onSubmit() { this.submitted = true; 
    
  }




  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

}
