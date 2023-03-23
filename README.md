# Simple HTML
## Setting-up
- Fork it
- On bash
`npm install -g firebase-tool`
`firebase login`
`firebase init`
- Choose a project or create a new one
- Firebase hosting (first option)
- Choose your forked repository on github
- Choose "/" as public folder
- don't rewrite index or 404
- All else is standard, auto deploy when PR is your choice. If you have no idea, choose no.
- When init is done add .[files] to gitignore and publish changes to github
      firebase deploy
- Access the page at the address provided
## Testing
- No workflow available yet
## Building
- Push changes and check address provided