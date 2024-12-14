<h1>My TMDB Movie App - Redux Toolkit Query</h1>

This modern movie application, developed using The Movie Database (TMDb) API, offers the user an interactive and functional movie experience. React and TypeScript technologies were used in the project, and Vite was configured to increase the application's performance and optimize the user experience. In addition, a responsive design was developed using TailwindCSS to create a user-friendly interface.
Users can access current movie suggestions under Popular Movies, Top Rated Movies, and Trending Categories. In the Trending Categories section, thanks to the React-Select integration, users can select and see the movies in their preferred genre listed.
There is a special detail page for each movie. On this page:
Included are the movie's name, IMDb score, spoken languages, and summary information.
The names and photos of the actors in the movie are shown with a user-friendly SplideJS slider.
Users can add and remove the movies they want to watch to their favorite lists. Favorite movie management is managed with the Redux Toolkit, which improves the user experience.

<h2>Technical Details</h2>

- State Management:
Redux Toolkit and React-Redux are used for global state management throughout the application. This provides a fast and reliable data flow, especially in the favorites listing feature.

- API Requests:
  Asynchronous data requests to the TMDb API with Axios have been optimized with Tanstack React Query, facilitating cache management and data query processes.

- Type Checks:
  The application has been developed with TypeScript, providing strong static type checking. This has increased the reliability of the code base and minimized the possibility of errors.

- Style and Design:
  TailwindCSS has created a flexible and modern design for the application while providing a fully responsive structure that automatically adapts to the user device.

<h2> The following technologies were used in the frontend development phase of my site: </h2>

- TypeScript
- React (Vite)
- Axios
- React-Redux
- Reduxjs/Toolkit
- React-Select
- React-Icons
- Splidejs / React-Splide

<h3>Main Page</h3>

![](/public/main.png)

![](/public/main2.png)

<h3>Trending Categories</h3>

![](/public/trending-categories.png)

![](/public/trending-categories2.png)

<h3>Movie Detail</h3>

![](/public/movie-detail.png)

<h3>Favorites </h3>

![](/public/favorite-list.png)

![](/public/favorite-empty-page.png)
