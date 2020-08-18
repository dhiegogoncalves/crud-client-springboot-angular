import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../core/auth.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css'],
})
export class SiderbarComponent implements OnInit {
  userName: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userName = this.authService.getUserName();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
