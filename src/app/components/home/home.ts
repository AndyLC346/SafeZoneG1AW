import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
