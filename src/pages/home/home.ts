import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import audioNames from '../home/audio-names';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  buttons = audioNames;

  constructor(public navCtrl: NavController) {

  }

  playAudio(audioTitle) {
    let audio = new Audio();
    audio.src = `../../assets/audio/${audioTitle}.mp3`;
    audio.load();
    audio.play();
  }
}
