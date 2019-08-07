# bitmovin-ads-and-analytics
A proof of concept using the Bitmovin Video Player integrating Analytics and Skippable pre-roll ads. Demo also includes the removal of ads for logged in users, though no Auth is implemented.

## instructions on how to run

ensure that serve is installed globally on your machine. to do this you can run the command npm install -g serve

then run 'serve .' in your terminal when inside of the cloned folder. This should run the video player on localhost:5000

the player has a button at the bottom left that toggles user's logged in/out status. In a true app this would be controlled with authentication/authorization, but I felt it was most necessary to show that the ads were removable/could be re-added.
