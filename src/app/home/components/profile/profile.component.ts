import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/core/models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: Profile | any 
  constructor(private activatedRoute: ActivatedRoute) { }
  getProfile() {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data.profile);
      this.profile = data.profile
    })
  }
  ngOnInit(): void {
    this.getProfile()
  }

}
