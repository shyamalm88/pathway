import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CreateProjectModalService } from '../../shared/services/create-project-modal-service/createProjectModal.service';
import { CreateBoardModalService } from '../../shared/services/create-board-modal-service.1/createBoardModal.service';

@Component({
  selector: 'app-pw-left-main-nav',
  templateUrl: './pw-left-main-nav.component.html',
  styleUrls: ['./pw-left-main-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PwLeftMainNavComponent implements OnInit {


  constructor(private CPM: CreateProjectModalService, private CBM: CreateBoardModalService) { }

  ngOnInit() {
  }

  public openCreateProjectModal() {
    this.CPM.createModal(true);
  }
  public openCreateBoardModal() {
    this.CBM.createModal(true);
  }
}
