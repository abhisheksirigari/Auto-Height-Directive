import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';

//Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './components/index/app.component';
import { LoginComponent } from './components/login/login.component';
import { AutoHeightDirective } from './directives/auto-height.directive';


// Parent Routes
const routes : Routes = [
{
	path: '',
	component: LoginComponent
},
{
	path: 'login',
	component: LoginComponent
}
];

@NgModule({
	declarations: [
	AppComponent,
	LoginComponent,
	AutoHeightDirective
	],
	imports: [
	BrowserModule,
	RouterModule,
	RouterModule.forRoot(routes),
	FormsModule,
	ReactiveFormsModule,
	BrowserAnimationsModule
	],
	providers: [],
	exports: [
	AutoHeightDirective
	],
	bootstrap: [AppComponent]
})

// enableProdMode();

export class AppModule { }
