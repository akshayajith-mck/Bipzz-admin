import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { tableHead } from "src/app/module/tableHead";

@Component({
  selector: "app-new-table",
  templateUrl: "./new-table.component.html",
  styleUrls: ["./new-table.component.scss"],
})
export class NewTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private messageService: MessageService, private router: Router) {}
  @Input() inputData: any;
  @Input() flag: any;
  @Input() type!: string;
  @Input() isImg: boolean;
  @Input() head: any;
  value: any;
  // @Input() dataSource!: any[];
  displayedColumns: any = [];
  error: "";
  baseurl: string;

  data!: any;
  ngOnInit(): void {
    this.data = new MatTableDataSource(this.inputData);
    console.log("inputData", this.inputData);
    console.log(this.flag, "flag");
    switch (this.flag) {
      case "userList": {
        this.userList();
        // this.fnSelect = "userList";
        break;
      }
      default:
        this.messageService.add({
          severity: "error",
          summary: "Error Message",
          detail: "Something went wrong while Loading Data",
        });
    }
  }

  // this.data.paginator = this.paginator;
  // this.data.sort = this.sort;

  ngAfterViewInit(): void {
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
  }

  userList() {
    this.displayedColumns = tableHead[0].userList;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();

    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }
  navigateTo(data: any): void {
    switch (this.flag) {
      case "userList": {
        this.router.navigate(["/pages/management/user/profile" || "/"], {
          queryParams: { profileId: data.id || data.userId },
        });
        break;
      }
      default: {
      }
    }
  }
}
