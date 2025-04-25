# Jason's Website

This is my personal website hosted on GitHub Pages.

## Firebase Setup for Comments

The website's comment system uses Firebase Realtime Database for storing and retrieving user comments. To set this up:

1. Create a Firebase project at https://console.firebase.google.com/
2. Add a web app to your project
3. Create a Realtime Database (in test mode is fine for starting)
4. Create a `.env.local` file with your Firebase configuration:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your_project_id-default-rtdb.firebaseio.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

5. Add the same environment variables to your GitHub Pages deployment environment

### Comment Approval System

The website includes a comment moderation system. When visitors submit comments, they're saved with `approved: false` in Firebase and won't appear on the site until approved. To approve comments:

1. Go to the Firebase console: https://console.firebase.google.com/
2. Navigate to your project
3. Select "Realtime Database" from the left menu
4. Find your comments in the database tree (they're under the "comments" node)
5. For each comment you want to approve, click on the entry and change the `approved` field from `false` to `true`
6. Click the checkmark to save the changes

Only comments with `approved: true` will display on the website.

### Firebase Database Rules

For a simple comment system that allows anonymous reads and writes, you can use these rules:

```json
{
  "rules": {
    "comments": {
      ".read": true,
      ".write": true,
      "$comment": {
        ".validate": "newData.hasChildren(['name', 'text', 'timestamp', 'approved']) && 
                      newData.child('name').isString() && 
                      newData.child('text').isString() && 
                      newData.child('timestamp').isString() &&
                      newData.child('approved').isBoolean()"
      }
    }
  }
}
```

For production, you might want to add rate limiting or other security measures.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

This site is deployed to GitHub Pages. To deploy:

1. Make sure to add the Firebase environment variables to your GitHub repository's secrets
2. Run the deploy command:

```bash
npm run deploy
```

## Environment Variables

The following environment variables are used in this project:

- `NEXT_PUBLIC_FIREBASE_*`: Firebase configuration (see above)

For GitHub Pages deployment, you'll need to add these variables to your repository's secrets or use a GitHub Actions workflow that includes them. 