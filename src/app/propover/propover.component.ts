import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-propover',
  templateUrl: './propover.component.html',
  styleUrls: ['./propover.component.scss'],
})
export class PropoverComponent implements OnInit {

  constructor(private props: PopoverController, private router: Router) { }

  ngOnInit() { }

  teste() {
    this.router.navigate(["/lista-api2"]);
    this.closePop();
    console.log("Teste Clique");

  }

  closePop() {
    this.props.dismiss();
  }
}
