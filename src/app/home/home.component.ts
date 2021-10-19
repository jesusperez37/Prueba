import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EndpointService } from '../service/endpoint.service';
import { postModel } from './model/postModel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public dataPost: Array<any> = [];
  public dataUser: Array<any> = [];
  public data: Array<any> = [];
  public displayedColumns = ['user', 'title', 'body'];
  public filter: string = "";
  public allinfo: Array<any> = [];
  constructor(
    private Service: EndpointService
  ) { }

  ngOnInit(): void {
    this.getData();
  }
  async getData() {
    this.dataPost = await this.Service.getDataPost()
    this.dataUser = await this.Service.getDataUser();
    if (this.dataUser && this.dataPost) {
      this.data = this.dataPost.map(post => {
        return {
          user: this.dataUser.find((user) => user.id === post.userId),
          userId: post.userId,
          idPost: post.id,
          title: post.title,
          body: post.body,
        }
      })
      this.allinfo = this.data.slice();
    }

  }

  filterText(event: any) {
    let info = this.data.slice();
    if (event.trim()) {
      let data = info.filter(item => item.user.name.includes(event.trim()) || item.title.includes(event.trim()) || item.body.includes(event.trim()))
      if (data) {
        this.data = data;            
      }
    }else{
      this.data = this.allinfo;   
    }
  }


}
