import { Component, OnInit } from '@angular/core';
import { CreateBoardModalService } from '../../services/create-board-modal-service.1/createBoardModal.service';


@Component({
  selector: 'app-create-board-modal',
  templateUrl: './create-board-modal.component.html',
})
export class CreateBoardModalComponent implements OnInit {

  public display: Boolean;
  constructor(private CBM: CreateBoardModalService) { }

  ngOnInit() {
    this.CBM.openModal()
      .subscribe((data) => {
        console.log(data);
        if (data) {
          this.display = data;
        }
      });
  }


}

