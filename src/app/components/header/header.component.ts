import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) { }
  isSuper:any
  ngOnInit(): void {
    this.isSuper = this.auth.issuper();
  }
  signOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
