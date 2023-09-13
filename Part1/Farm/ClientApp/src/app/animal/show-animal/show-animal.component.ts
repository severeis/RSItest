import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import {Animal} from "../animal";

@Component({
  selector: 'app-show-animal',
  templateUrl: './show-animal.component.html',
  styleUrls: ['./show-animal.component.css']
})
export class ShowAnimalComponent implements OnInit {
  constructor(private service: ApiserviceService) { }

  @ViewChild("closeModal", {static: false})
  closeModal: ElementRef|undefined;

  AnimalList: Animal[] = [];
  ModalTitle = "";
  ActivateAddAnimalComp: boolean = false;
  animal = new Animal();

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick() {
    this.animal = new Animal();
    this.ModalTitle = "Add Animal";
    this.ActivateAddAnimalComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure?')) {
      this.service.deleteAnimal(item.name).subscribe({
        next: () => this.refreshDepList(),
        error: err => alert(err.error),
      });
    }
  }

  closeClick() {
    this.ActivateAddAnimalComp = false;
    this.closeModal && this.closeModal.nativeElement.click();
    this.refreshDepList();
  }


  refreshDepList() {
    this.service.getAnimalList().subscribe(data => {
      this.AnimalList = data;
    });
  }
}
