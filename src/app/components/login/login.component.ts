import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../services/config/config.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	animations: [routerTransition()],
	host: {'[@routerTransition]': ''}
})
export class LoginComponent implements OnInit {
	constructor() { }

	
	ngOnInit() {
		
	}

	

}
