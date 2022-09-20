# E27: Five problems every software engineer should be able to solve (Part 2)
Santiago Valdarrama wrote a blog post entitled five problems every software engineer should be able to solve in less than an hour. https://web.archive.org/web/20200414191515/http://www.shiftedup.com/2015/05/07/five-programming-problems-every-software-engineer-should-be-able-to-solve-in-less-than-1-hour Stop for a second and check it out!

If these five problems really take an hour to solve, that’s much too long for a WOD, so let’s just try to solve the second one. More important, we’ll use this as an opportunity to practice using GitHub, git, IntelliJ IDEA, Javascript, Underscore, and ESLint.

The WOD
For this practice WOD, solve the following variation of the second of the five problems that Santiago Valdarrama thinks should take less than an hour.

Ready? Let’s begin:

Start your timer.

Create an empty GitHub repo called “ziplist” and clone it to your local computer. Don’t forget to check the box so that a README file is created.

Open the local repo in IntelliJ. If IntelliJ asks if you want to add a .gitignore file, you can say yes.

Set up your project to use our Javascript coding standards. In a nutshell:
Select the ics-se-coding-standards.xml preference template (Preferences > Editor > Code Style).
Disable IntelliJ Javascript inspection (Preferences > Editor > Inspections > Javascript).
Define the Javascript Language as ECMAScript6+ (Preferences > Languages & Frameworks > Javascript).
Enable ESLint (Preferences > Languages & Frameworks > Javascript > Code Quality Tools > ESLint).
Once you have done the one time tasks, then all you should need to do is:
Download sample.eslintrc.js into the project directory, and rename it to .eslintrc.js.
Download sample.package.json into the project directory, and rename it to package.json.
Download sample.gitignore into the project directory, and rename it to .gitignore.
CD into the project directory, and run npm install to install ESLint.
Create two files: index.html and ziplist.js. The index.html should load the Underscore package (available at <script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>) followed by ziplist.js. Note that the order of loading is important!

Write a function called zipList that accepts two lists of equal length and returns the result of alternatingly taking elements. For example: given the two lists [‘a’, ‘b’, ‘c’] and [1, 2, 3], the function should return [‘a’, 1, ‘b’, 2, ‘c’, 3]. zipList should not use Underscore. Now write a function called zipListTheSimpleWay that does the same thing using Underscore.

Make sure ESLint is running. For example, add newlines to the end of a file to see that an ESLint error is triggered.

Make sure that there is a green checkmark indicating that ESLint does not detect any problems with your code.

Commit your finished program to GitHub.

Check that your code is on GitHub.

Stop your timer and record your time. Be sure to record it, because you will need your WOD time data when you write your technical essay.

