import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icon = "reader-outline";
  private ramos = [
    "Algebra I",
    "Calculo I",
    "Intro. computacion",
    "Intro. ingenieria",
    "Ingles I"
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    this.ramos.forEach(ramo => {
      this.items.push({
        title: ramo,
        note: "Semestre I",
        icon: this.icon
      });
    });
  }

  ngOnInit() {}
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
