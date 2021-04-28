# Professional-README-Generator_Node.js

# Overview

The challenge was to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). 

As a reference point, the [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) also served as a reminder of everything that a high-quality, professional README should contain. 

The application was to be invoked by using the following command:

```bash
node index.js
```

# Demo

Because this application will not be deployed, I have provided a link here to a walkthrough video that demonstrates its functionality:
https://drive.google.com/file/d/1TfYjemzgZyV0o0zQeHOaZVhkVyqBGgUn/view 

# Design crtierion

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

# Issues

I encountered issues attempting to enable a badge icon correponding to the license and have been unable to implement this into the current rendition on my codebase. 

# Assumptions

The challenge was a test of my understanding of the node js module thus far. 

# Screen Prints

![image](https://user-images.githubusercontent.com/61643257/116386562-3f28de80-a85d-11eb-8a08-f1663208490a.png)

![image](https://user-images.githubusercontent.com/61643257/116386625-4ea82780-a85d-11eb-9134-4db4432e1347.png)

![image](https://user-images.githubusercontent.com/61643257/116386726-67b0d880-a85d-11eb-8e74-cc0bfb8466da.png)

![image](https://user-images.githubusercontent.com/61643257/116386811-79927b80-a85d-11eb-9827-ee3d46e03cba.png)


