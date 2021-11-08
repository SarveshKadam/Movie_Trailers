# Movie Trailers

A React application for Movie Trailers.

You can view the [Live App](https://bookmyshow-movietrailers.netlify.app/).

## Features ⭐


⚡️ Includes Reusable Components\
⚡️ Includes Lazy Loading of Images\
⚡️ Filtering Feature by Genres and Languages\
⚡️ Responsive Modern UI Design


## Folder Structure :file_folder:

```

├── public
│   └── index.html
├── src
│   └── Components
│   |     └── AppliedFilter
│   |     └── Card
│   |     └── CardList
│   |     └── CustomElements
│   |     └── Header
│   |     └── LazyImage
│   |     └── Modal
│   |     └── Trailer
│   |     └── Main
│   └── Content
│   |     └── genre.json
│   └── Helpers
│   |     └── embedYt.js
│   |     └── fetchThumbnail.js
│   └── images
│   └── App.js
│   └── index.js
```
The file `index.js` which executes when our client side application is ran
We have a `components` folder for our different components.<br />


## Design :triangular_ruler:

On the react side, we have created different components such as Card for designing each Movie Card, CardList for listing of Movies, Custom Elements for elements such as DropDown, Header component for Navigation Bar, Pop ups are achieved using Modal component and Trailer Component for displaying each Movie Details with Trailer.
In the react we have used `React Hooks` such as `useState`, `useEffect`.

## Technologies used 🛠️

- [Node](https://nodejs.org/en/) - JavaScript Runtime
- [React](https://reactjs.org/) - JavaScript Library

## Deployment 📦

I used [netlify](https://www.netlify.com/) to host the react app
