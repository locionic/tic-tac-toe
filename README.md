# Tic-Tac-Toe Game

This is a simple Tic-Tac-Toe game built with React and TypeScript.
Website: https://locionic.github.io/tic-tac-toe/

## Features

- 3x3 game board
- Two human players (X and O)
- Game end detection (win or draw)
- Display of winner or draw announcement
- Game restart functionality
- Score history between players
- Responsive design

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/)
- You have a Windows/Linux/Mac machine.

## Installing and Running Tic-Tac-Toe

To install and run Tic-Tac-Toe, follow these steps:

1. Clone the repository:
   git clone https://github.com/locionic/tic-tac-toe.git

2. Navigate to the project directory:
   cd tic-tac-toe

3. Install the dependencies:
   npm install

4. Start the development server:
   npm start

5. Open your browser and visit http://localhost:3000 to play the game.

## Building for Production

To create a production build, run:
npm run build

This will create a build folder with the production-ready files.

## Deploying

You can deploy this React app to various platforms like Netlify, Vercel, or GitHub Pages. Here's how you can deploy to GitHub Pages:

1. Install the gh-pages package:
   npm install --save-dev gh-pages

2. Add these scripts to your package.json:
   "scripts": {
     // ...other scripts
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }

3. Add the homepage field to your package.json:
   "homepage": "https://your-username.github.io/tic-tac-toe"

4. Deploy the app:
   npm run deploy


## Contributing to Tic-Tac-Toe

To contribute to Tic-Tac-Toe, follow these steps:

1. Fork this repository.
2. Create a branch: git checkout -b <branch_name>
3. Make your changes and commit them: git commit -m '<commit_message>'
4. Push to the original branch: git push origin <project_name>/<location>
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contact

If you want to contact me, you can reach me at locionic@gmail.com

## License

This project uses the following license: [MIT License](https://opensource.org/licenses/MIT).
