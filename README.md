# Mad Libs

Remember mad-libs from high school English? If not, check out http://www.madglibs.com/ to get an idea about what I'm referencing.

The purpose of this activity is to help you become comfortable with using basic concepts of javaScript between the instructional period when the instructors introduced these concepts and the following class. Start simple! Do not create a beast that is too complicated that produces tons of complicated frustrated problems. With that in mind, each step increases with difficulty.  That means step 1 should be a no-brainer, but each step forward will require you to apply more of what you have learned, and may require you to look for external resources.  Your goal is to complete step 4.  If you complete step 4, and you're still hungry to learn more, continue onward, and make more complicated.

1. Fork this repo, clone it to your local computer, add a css file and link it to index.html.  Inside this css file, change the background color to your favorite color.  Commit these changes and push to gitHub.  Make the commit message "Initial commit".

2. Create a new file in this directory and save it as main.js.  Link this file to index.html by placing this: <script src="main.js"></script> on the line just above the closing body tag. In main.js, add alert("I'm working with JavaScript");.  Save the file, open index.html in the browser and debug if necessary. When it works, commit these changes and push to gitHub.  Make the commit message the same as the message in the alert.

3. Declare a function and name it mad_libs. When you call this function later, what you should see in the browser is some text.  Make this text resemble a short story.  Use what you remember from high school English about what makes an exciting story. So far this step requires a little bit of creativity, so the next bit will require you to search and destroy.  You already know that console.log(); will print what's in between the parenthesis.  See if you can figure out how to write text to the browser page, which also happens to be known as the document.  Once you've figured this out and you've got a story that's being displaying in the browser's index.html, commit these changes with the message "message recieved, over and out", and push your changes to gitHub.

4. Think of some elements in the story that have something in common.  Create a category for these common elements, such as nowns, verbs, adjectives, adverts, prepositions.  Inside the function mad_libs, create some arrays with the values that appear in your story.  Replace the words in your store with their array and index position and concatinate them with the rest of the words in your story.  Create some new values in your arrays and switch them out with the words the story previously had.  If you are unsure what I mean by this: 1. This is normal in computer programming, and it is an indication that you are learning. 2. Check out the traditional structure of mad-libs.  3. Look at someone else's code.  Find their gitHub username, navigate to their forked repo of my original repo and look at their code from gitHub.  Still confused? Ask someone with working code how it works on a private message in Slack, ask questions in slack, or ask me or Al directly.  Last but not least, commit your changes with the message "mad-libs mission accomplished".

5.  You are a rock star! You figured out this project and you created a highly entertaining program and you are eager to show off to others. So take it a step further, and you have a couple different options here: If you think any of this project could be improved, change the content that you started with and make a pull request on gitHub (BTW, I'd love it if you would do this with the Ping/Pong repo).  If I agree with your changes, I'll implement them and remove the work you committed for this project so the next group of web foundations students has a better experience. OR create some objects with some embedded arrays.  This would be like creating some subcategories. OR check out jQuery and start traversing and manipulating the DOM so that your story looks a little more interesting in index.html.  Look at http://www.pairuptocode.com/exercises/madlibs.html and try out this approach.  This similar exercise uses javascript to request some information from the user and plugs it into the story.  Also, some more css would make things a lot more interesting...And if you do anything after step 4, send a commit message with whatever you did.