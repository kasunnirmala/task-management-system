import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../common/footer/FooterComponent';
import { HeaderComponent } from '../../common/header/HeaderComponent';

@Component({
  selector: 'app-home-page',
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './HomePage.html',
  styleUrl: './HomePage.css',
})
export class HomePage {}
