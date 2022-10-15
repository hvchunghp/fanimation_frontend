import { AxiosServiceService } from 'src/app/axios-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  commentData: any
  id: any
  commentId: any
  constructor(private service: AxiosServiceService, private _router: ActivatedRoute, private _toastService: ToastService) { }


  ngOnInit(): void {
    this.id = this._router.snapshot.paramMap.get('id');
    this.getCommentData(this.id)
  }
  commentForm = new FormGroup({
    comment: new FormControl('', Validators.required)
  })
  getCommentData(id: any) {
    this.service.getCommentData(id).then((res) => {
      this.commentData = res
      for (let i = 0; i < this.commentData.length; i++) {
        let date = new Date(res[i].time)
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();
        this.commentData[i].time = dd + '/' + mm + '/' + yyyy;
        this.commentId = this.commentData[i].id;
      }
    })
  }

  sendComment(id: any) {
    if (this.commentForm.value.comment === '') {
      this._toastService.error('Missing input');
    }
    this.service.sendComment(id, this.commentForm.value).then((res) => {
      this.commentForm.reset();
      this.getCommentData(this.id)
    })
  }

  deleteComment(id: any) {
    this.service.deleteComment(id).then((res) => {
      this._toastService.success('Delete successfully');
      this.getCommentData(this.id)
    })
  }
}
