import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private http : HttpClient,
    private loadCtrl : LoadingController,
    private router: Router
  ) {}

  dataPost = [];
  post : any = {};


  public async loaderPresent(): Promise<any> {
    const loading = await this.loadCtrl.create({
      message: "LOADING ...",
      backdropDismiss: true
    });

    return loading;
  }

  async getDataPost() {

    var loading = await this.loaderPresent();

    this.http.get("https://reqres.in/api/users?page=2").subscribe((res : any) => {
      console.log(res);
      this.dataPost = res.data;

      if (loading) {
        loading.dismiss();
      }
    });
  }
  ionViewDidEnter() {
    this.getDataPost();
  }
  pindah(){
    this.router.navigate(['/hal2']);
  }

}
