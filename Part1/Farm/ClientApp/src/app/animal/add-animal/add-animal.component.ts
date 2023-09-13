import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Animal } from "../animal";

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
  constructor(private service: ApiserviceService) { }

  @Input() animal = new Animal();
  AnimalName = "";

  @Output() close = new EventEmitter();

  ngOnInit(): void {
    this.AnimalName = this.animal.name;
  }

  addAnimal() {
    this.service.addAnimal(this.AnimalName).subscribe({
      next: () => this.close.emit(),
      error: err => alert(err.error),
    });
  }
}
