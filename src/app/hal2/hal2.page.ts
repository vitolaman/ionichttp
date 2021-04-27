import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-hal2',
  templateUrl: './hal2.page.html',
  styleUrls: ['./hal2.page.scss'],
})
export class Hal2Page implements OnInit {

  constructor(
    private http : HttpClient,
    private loadCtrl : LoadingController,
    private toastCtrl : ToastController
  ) { }
  post : any = {};
  upt : any = {};
  del : any = {};
  ngOnInit() {
  }
  submit(){
    this.http.post("https://reqres.in/api/users", this.post).subscribe((res:any) => {
      console.log(res);
      this.toastCtrl.create({
        duration : 3000,
        message : "ID for new Item is "+ res.id,
        position : 'bottom'
      }).then(l => l.present())
    })
    this.post = {};
  }
  update(){
    this.http.put("https://reqres.in/api/users/2", this.post).subscribe((res:any) => {
      console.log(res);
      this.toastCtrl.create({
        duration : 3000,
        message : "Item updated at: "+ res.updatedAt,
        position : 'bottom'
      }).then(l => l.present())
    })
    this.upt = {};
  }
  delete(){
    this.http.delete("https://reqres.in/api/users/2", this.post).subscribe((res:any) => {
      console.log(res);
      this.toastCtrl.create({
        duration : 3000,
        message : "Item deleted",
        position : 'bottom'
      }).then(l => l.present())
    })
    this.del = {};
  }
}
