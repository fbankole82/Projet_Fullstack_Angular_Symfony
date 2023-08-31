import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-add-inscription',
  templateUrl: './add-inscription.component.html',
  styles: [
  ]
})
export class AddInscriptionComponent implements OnInit {
  public crudApi:any;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    // Logique de soumission du formulaire ici
  }

}
