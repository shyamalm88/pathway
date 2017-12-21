import { Component, OnInit } from '@angular/core';
import { CreateProjectModalService } from '../../services/create-project-modal-service/createProjectModal.service';


@Component({
  selector: 'app-create-project-modal',
  templateUrl: './create-project-modal.component.html',
})
export class CreateProjectModalComponent implements OnInit {

  public display: Boolean;
  constructor(private CPM: CreateProjectModalService) { }

  ngOnInit() {
    this.CPM.openModal()
      .subscribe((data) => {
        if (data) {
          this.display = data;
        }
      });
  }


}

