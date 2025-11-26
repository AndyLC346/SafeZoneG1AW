import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Menu } from "./components/menu/menu";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet, RouterOutlet, MatIconModule, MatButtonModule, CommonModule, FormsModule, Menu],
})
export class App {
  protected readonly title = signal('SafeZoneG1AW');
  isMuted = true; // comienza silenciado
  volumenPersonalizado = 0.2; // para poner la cantidad de volumen

  toggleMute(audio: HTMLAudioElement) {
    if (this.isMuted) {
      // Desmutea y fija volumen personalizado
      this.isMuted = false;
      audio.muted = false;
      audio.volume = this.volumenPersonalizado;
      if (audio.paused) {
        audio.play();
      }
    } else {
      // Mutea
      this.isMuted = true;
      audio.muted = true;
    }
  }

}
