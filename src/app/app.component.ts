import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Pokemodel } from 'src/model/pokemodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {

  pokeModel: Pokemodel[]
  x = [];
  constructor() {
  }

  title = 'Nostra-Pokemon';

  ngOnInit() {
    ; (async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
      this.pokeModel = response.data.results
      for (var i = 1; i< this.pokeModel.length+1; i++) {
          this.pokeModel[i-1].img = "https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png"
      }
      console.log(this.x)
      console.log(this.pokeModel)
    })()
  }
}


