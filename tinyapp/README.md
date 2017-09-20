A good README should contain an overview, usage instructions, running requirements, documentation and resources used, etc. For this app, please also list what you learned from developing this app.

Overview: This app allows users to race bugs across a screen. Users can choose from one of two buttons, where each button controls the motion of one bug. It was constructed as a tool to learn react native, and the various debugging, structuring, and conceptual challenges that accompany the framework. 

Running requirements: Must have react-native and react-navigation installed. To view all dependencies, view package.json. To run on android emulator, type 'npm run android'. 

Documentation: All of the code for rendering and moving the bugs is housed in App.js. It features 2 views, the home view and the play view. The home view simply renders a text box, an image, and a button which navigates to the Play screen. The play screen contains 2 buttons and 2 images. By pressing the buttons, a function is called which increases the left margin of each bug, moving it across the screen. This app uses react-navigation in order to switch between pages. All other documentation used was the react-native documentation, which holds information on the components of react, as well as the broader structure. 

From developing this app, I learned to begin to think about the differences between react and react-native. Specifically, understanding the purpose and relevance of a view took me a while, but I am now beginning to understand how important views can be. Additionally, I learned to begin thinking about laying out an app on a phone, which requires different considerations than building a website. 

