import { routing } from './app.routing';
import { HttpModule, JsonpModule} from '@angular/http';
import { MoviesComponent } from './movies/movies/movies.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { RouterModule , Routes} from '@angular/router';


const appRoutes: Routes = [
    {
        path: '',
        component: MoviesComponent
    },
    {
        path: 'movie/:id',
        component: MovieComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
