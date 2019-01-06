import { Component, OnInit } from '@angular/core';
import { GuestCommentModel } from '../data/guest-comment-model';
import { CommentService } from '../services/comments/comment.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-guest-comments',
  templateUrl: './guest-comments.component.html',
  styleUrls: ['./guest-comments.component.css']
})
export class GuestCommentsComponent implements OnInit {

  showComments: Boolean = environment.showComments;
  comments: GuestCommentModel[] = [];
  comment: GuestCommentModel = new GuestCommentModel();

  constructor(
    private commentService: CommentService
  ) {
    this.getComments();
  }

  ngOnInit() {
  }

  getComments() {
    this.commentService.getComments()
      .subscribe(comments => {
        this.comments = comments;
      });
  }

  clearComment() {
    this.comment = new GuestCommentModel();
  }

  addComment(comment: GuestCommentModel) {

    comment.source = 'Regards';

    this.commentService.addComment(comment)
      .subscribe( () => {
        this.comment = new GuestCommentModel();
        this.getComments();
      }
    );
  }

}
