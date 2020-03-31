import { Injectable } from "@angular/core";
import { MovieInterface, CategoryInterface } from "./movies.interface";
import { UsersService } from "../users/users.service";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor(private usersService: UsersService) {
    this.getMoviesByUser();
  }

  getCategories(mostWatched: boolean = false) {
    let categories: CategoryInterface[] = [
      {
        id: 1,
        title: "Action",
        views: parseInt(localStorage.getItem(`viewsCategory-1`)),
        movies: this.getMoviesByCategory(1)
      },
      {
        id: 2,
        title: "Comedy",
        views: parseInt(localStorage.getItem(`viewsCategory-2`)),
        movies: this.getMoviesByCategory(2)
      },
      {
        id: 3,
        title: "Thriller",
        views: parseInt(localStorage.getItem(`viewsCategory-3`)),
        movies: this.getMoviesByCategory(3)
      }
    ];
    return mostWatched
      ? categories.sort((a, b) => {
          if (a.views < b.views) {
            return 1;
          }
          if (a.views > b.views) {
            return -1;
          }
          return 0;
        })
      : categories;
  }

  getCategory(id: number) {
    return this.getCategories().find(item => item.id === id);
  }

  getMovies(mostWatched: boolean = false) {
    let movies: MovieInterface[] = [
      // action
      {
        id: 1,
        title: "6 Underground",
        description: "Large movie descriptions here",
        synopsis: "A small movies description here.",
        category: 1,
        mp4:
          "https://angular-netflix.s3-sa-east-1.amazonaws.com/action-6-underground.mp4",
        thumb: "assets/thumbs/action-6-underground.jpg",
        relevance: 99,
        age: 18,
        views: parseInt(localStorage.getItem(`viewsMovie-1`)),
        viewsByCountry: JSON.parse(
          localStorage.getItem(`viewsMovieByCountry-1`)
        ) || [{ countryID: "", views: 0 }]
      },
      {
        id: 2,
        title: "Marvel's Defender's",
        description: "Large movie descriptions here",
        synopsis: "A small movies description here.",
        category: 1,
        mp4:
          "https://angular-netflix.s3-sa-east-1.amazonaws.com/action-marvels-defenreders.mp4",
        thumb: "assets/thumbs/action-marvel-defenders.jpg",
        relevance: 20,
        age: 18,
        views: parseInt(localStorage.getItem(`viewsMovie-2`)),
        viewsByCountry: JSON.parse(
          localStorage.getItem(`viewsMovieByCountry-2`)
        ) || [{ countryID: "", views: 0 }]
      },
      {
        id: 3,
        title: "Spencer",
        description: "Large movie descriptions here",
        synopsis: "A small movies description here.",
        category: 1,
        mp4:
          "https://angular-netflix.s3-sa-east-1.amazonaws.com/action-spencer.mp4",
        thumb: "assets/thumbs/action-spencer.jpg",
        relevance: 20,
        age: 18,
        views: parseInt(localStorage.getItem(`viewsMovie-3`)),
        viewsByCountry: JSON.parse(
          localStorage.getItem(`viewsMovieByCountry-3`)
        ) || [{ countryID: "", views: 0 }]
      },
      {
        id: 4,
        title: "Triple Frontier",
        description: "Large movie descriptions here",
        synopsis: "A small movies description here.",
        category: 1,
        mp4:
          "https://angular-netflix.s3-sa-east-1.amazonaws.com/action-triple-frontier.mp4",
        thumb: "assets/thumbs/action-triple-frontier.jpg",
        relevance: 20,
        age: 18,
        views: parseInt(localStorage.getItem(`viewsMovie-4`)),
        viewsByCountry: JSON.parse(
          localStorage.getItem(`viewsMovieByCountry-4`)
        ) || [{ countryID: "", views: 0 }]
      },
      {
        id: 5,
        title: "Wu Assassins",
        description: "Large movie descriptions here",
        synopsis: "A small movies description here.",
        category: 1,
        mp4:
          "https://angular-netflix.s3-sa-east-1.amazonaws.com/action-wu-assasins.mp4",
        thumb: "assets/thumbs/action-wu-assassins.jpg",
        relevance: 20,
        age: 18,
        views: parseInt(localStorage.getItem(`viewsMovie-5`)),
        viewsByCountry: JSON.parse(
          localStorage.getItem(`viewsMovieByCountry-5`)
        ) || [{ countryID: "", views: 0 }]
      },
      // comedy
      {
        id: 6,
        title: "#BlackAf",
        description: "Large movie descriptions here",
        synopsis: "A small movies description here.",
        category: 2,
        mp4:
          "https://angular-netflix.s3-sa-east-1.amazonaws.com/comedy-blackaf.mp4",
        thumb: "assets/thumbs/comedy-blackaf.webp",
        relevance: 20,
        age: 18,
        views: parseInt(localStorage.getItem(`viewsMovie-6`)),
        viewsByCountry: JSON.parse(
          localStorage.getItem(`viewsMovieByCountry-6`)
        ) || [{ countryID: "", views: 0 }]
      },
      {
        id: 7,
        title: "Love Jacket",
        description: "Large movie descriptions here",
        synopsis: "A small movies description here.",
        category: 2,
        mp4:
          "https://angular-netflix.s3-sa-east-1.amazonaws.com/comedy-lovejacket.mp4",
        thumb: "assets/thumbs/comedy-love-jacket.webp",
        relevance: 70,
        age: 18,
        views: parseInt(localStorage.getItem(`viewsMovie-7`)),
        viewsByCountry: JSON.parse(
          localStorage.getItem(`viewsMovieByCountry-7`)
        ) || [{ countryID: "", views: 0 }]
      },
      {
        id: 8,
        title: "Malibu Rescue",
        description: "Large movie descriptions here",
        synopsis: "A small movies description here.",
        category: 2,
        mp4:
          "https://angular-netflix.s3-sa-east-1.amazonaws.com/comedy-malibu-rescue.mp4",
        thumb: "assets/thumbs/comedy-malibu-rescue.jpg",
        relevance: 20,
        age: 18,
        views: parseInt(localStorage.getItem(`viewsMovie-8`)),
        viewsByCountry: JSON.parse(
          localStorage.getItem(`viewsMovieByCountry-8`)
        ) || [{ countryID: "", views: 0 }]
      },
      {
        id: 9,
        title: "Murder Mistery",
        description: "Large movie descriptions here",
        synopsis: "A small movies description here.",
        category: 2,
        mp4:
          "https://angular-netflix.s3-sa-east-1.amazonaws.com/comedy-murder-mystery.mp4",
        thumb: "assets/thumbs/comedy-murder-mystery.jpg",
        relevance: 55,
        age: 18,
        views: parseInt(localStorage.getItem(`viewsMovie-9`)),
        viewsByCountry: JSON.parse(
          localStorage.getItem(`viewsMovieByCountry-9`)
        ) || [{ countryID: "", views: 0 }]
      },
      // thriller
      {
        id: 10,
        title: "A fall from grace",
        description: "Large movie descriptions here",
        synopsis: "A small movies description here.",
        category: 3,
        mp4:
          "https://angular-netflix.s3-sa-east-1.amazonaws.com/thriller-a-fall-from-grace.mp4",
        thumb: "assets/thumbs/thriller-a-fall-from-grace.jpg",
        relevance: 20,
        age: 18,
        views: parseInt(localStorage.getItem(`viewsMovie-10`)),
        viewsByCountry: JSON.parse(
          localStorage.getItem(`viewsMovieByCountry-10`)
        ) || [{ countryID: "", views: 0 }]
      },
      {
        id: 11,
        title: "Badla",
        description: "Large movie descriptions here",
        synopsis: "A small movies description here.",
        category: 3,
        mp4:
          "https://angular-netflix.s3-sa-east-1.amazonaws.com/thriller-badla.mp4",
        thumb: "assets/thumbs/thriller-badla.webp",
        relevance: 34,
        age: 18,
        views: parseInt(localStorage.getItem(`viewsMovie-11`)),
        viewsByCountry: JSON.parse(
          localStorage.getItem(`viewsMovieByCountry-11`)
        ) || [{ countryID: "", views: 0 }]
      },
      {
        id: 12,
        title: "Bird Box",
        description: "Large movie descriptions here",
        synopsis: "A small movies description here.",
        category: 3,
        mp4:
          "https://angular-netflix.s3-sa-east-1.amazonaws.com/thriller-bird-box.mp4",
        thumb: "assets/thumbs/thriller-bird-box.jpg",
        relevance: 10,
        age: 18,
        views: parseInt(localStorage.getItem(`viewsMovie-12`)),
        viewsByCountry: JSON.parse(
          localStorage.getItem(`viewsMovieByCountry-12`)
        ) || [{ countryID: "", views: 0 }]
      },
      {
        id: 13,
        title: "Pandora",
        description: "Large movie descriptions here",
        synopsis: "A small movies description here.",
        category: 3,
        mp4:
          "https://angular-netflix.s3-sa-east-1.amazonaws.com/thriller-pandora.mp4",
        thumb: "assets/thumbs/thriller-pandora.webp",
        relevance: 20,
        age: 18,
        views: parseInt(localStorage.getItem(`viewsMovie-13`)),
        viewsByCountry: JSON.parse(
          localStorage.getItem(`viewsMovieByCountry-13`)
        ) || [{ countryID: "", views: 0 }]
      },
      {
        id: 14,
        title: "The Occupant",
        description: "Large movie descriptions here",
        synopsis: "A small movies description here.",
        category: 3,
        mp4:
          "https://angular-netflix.s3-sa-east-1.amazonaws.com/thriller-the-occupant.mp4",
        thumb: "assets/thumbs/thriller-the-occupant.jpg",
        relevance: 20,
        age: 18,
        views: parseInt(localStorage.getItem(`viewsMovie-13`)),
        viewsByCountry: JSON.parse(
          localStorage.getItem(`viewsMovieByCountry-13`)
        ) || [{ countryID: "", views: 0 }]
      },
      {
        id: 15,
        title: "The Plataform",
        description: "Large movie descriptions here",
        synopsis: "A small movies description here.",
        category: 3,
        mp4:
          "https://angular-netflix.s3-sa-east-1.amazonaws.com/thriller-the-plataform.mp4",
        thumb: "assets/thumbs/thriller-the-plataform.jpg",
        relevance: 20,
        age: 18,
        views: parseInt(localStorage.getItem(`viewsMovie-13`)),
        viewsByCountry: JSON.parse(
          localStorage.getItem(`viewsMovieByCountry-13`)
        ) || [{ countryID: "", views: 0 }]
      }
    ];
    return mostWatched
      ? movies.sort((a, b) => {
          if (a.views < b.views) {
            return 1;
          }
          if (a.views > b.views) {
            return -1;
          }
          return 0;
        })
      : movies;
  }

  geMoviesByUsersViews() {
    let users = this.usersService.getUsers();
    // users.map(item=>)
  }

  getCountriesByViews() {
    let countriesMovies = [];
    let countries = this.usersService.getCountries();
    let newCountriesArray = countries.map(country => {
      // sum all views of country in movies
      let totalViews: number = 0;
      this.getMovies().map(movie => {
        if (movie.viewsByCountry) {
          let { views } = movie.viewsByCountry.find(
            movieCountry => movieCountry.countryID === country.id
          ) || { views: 0 };
          totalViews = totalViews + views;
        }
      });

      // new obj return, now with total views of this country
      return {
        id: country.id,
        title: country.name,
        views: totalViews,
        movies: this.getMoviesByCountry(country.id)
      };
    });
    //
    return newCountriesArray.sort((a, b) => {
      if (a.views < b.views) {
        return 1;
      }
      if (a.views > b.views) {
        return -1;
      }
      return 0;
    });
  }

  getMoviesByCountry(id: string) {
    return this.getMovies().filter(movie =>
      movie.viewsByCountry.find(movieCountry => movieCountry.countryID === id)
    );
  }

  getMoviesByUser() {
    let user = JSON.parse(sessionStorage.getItem("user"));
    let moviesID =
      JSON.parse(localStorage.getItem(`viewsByUser-${user.id}`)) || [];

    let movies = moviesID.map(id => {
      return this.getMovie(id);
    });

    return [
      {
        id: user.id,
        title: user.name,
        views: movies.length,
        movies
      }
    ];
  }

  getMovie(id: number) {
    return this.getMovies().find(item => item.id === id);
  }

  getMoviesByCategory(category: number, mostWatched: boolean = false) {
    let movies = this.getMovies().filter(item => item.category === category);
    return mostWatched
      ? movies.sort((a, b) => {
          if (a.views < b.views) {
            return 1;
          }
          if (a.views > b.views) {
            return -1;
          }
          return 0;
        })
      : movies;
  }

  setViews(movieID: number, categoryID: number, countryID: number) {
    // set's by movie
    const views: any =
      parseInt(localStorage.getItem(`viewsMovie-${movieID}`)) || 0;
    localStorage.setItem(`viewsMovie-${movieID}`, views + 1);

    // set's by category
    const viewsCategory: any =
      parseInt(localStorage.getItem(`viewsCategory-${categoryID}`)) || 0;
    localStorage.setItem(`viewsCategory-${categoryID}`, viewsCategory + 1);

    // set's by user
    const user = JSON.parse(sessionStorage.getItem("user"));
    let userMovie =
      JSON.parse(localStorage.getItem(`viewsByUser-${user.id}`)) || [];
    if (!userMovie.includes(movieID)) {
      userMovie.push(movieID);
      localStorage.setItem(`viewsByUser-${user.id}`, JSON.stringify(userMovie));
    }

    // set's by country
    let viewsByCountry =
      JSON.parse(localStorage.getItem(`viewsMovieByCountry-${movieID}`)) || [];

    let haveCountry =
      viewsByCountry.length > 0 &&
      viewsByCountry.find(item => item.countryID === countryID);

    // check if array is empty
    // make a array with user country
    if (viewsByCountry.length === 0) {
      localStorage.setItem(
        `viewsMovieByCountry-${movieID}`,
        JSON.stringify([
          {
            countryID,
            views: 1
          }
        ])
      );
      return true;
    }

    // check if array is not empty and country is not pushed yet
    // push a new country to existing array
    if (viewsByCountry.length > 0 && !haveCountry) {
      viewsByCountry.push({
        countryID,
        views: 1
      });
      localStorage.setItem(
        `viewsMovieByCountry-${movieID}`,
        JSON.stringify(viewsByCountry)
      );
      return true;
    }

    // check if array is not empty and country is already pushed
    // count new views to existing country in array
    if (viewsByCountry.length > 0 && haveCountry) {
      viewsByCountry.map(item => {
        if (item.countryID === countryID) {
          item.views = item.views + 1;
        }
        return item;
      });

      localStorage.setItem(
        `viewsMovieByCountry-${movieID}`,
        JSON.stringify(viewsByCountry)
      );
      return true;
    }
  }
}
