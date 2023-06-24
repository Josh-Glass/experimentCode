---
title: Electron Experiment Runner Instructions
---


Here's how to get this working with your experiment (assuming it was previously set up to run with the webrunner):

1. replace `static/experiments/de4` with your experiment's folder
2. add your main experiment html file to this folder; change the name to `exp.html`
3. At the end of your main experiment html file, change this line: `next('hey', subject['id'], subject['condition'], subject)` with this line instead: `save(subject)`
    ^ you'll see how i did it in the `exp.html` example file
4. in the `index.html` file, edit the "options" tags to match the number of possible conditions in your experiment
    ^ whatever the "value" option is will be what's fed into your experiment script (so be mindful of whether it's a string variable or a numeric variable)

^ If you do all that, then the experiment should run on the lab computers after you double click the `run.bat` file <-- so make shortcuts on all the running room computers

---

Honestly there could be a better way to do this, and if you learn about webdev + electron you'll figure out what that better way is. But assuming you want to avoid learning webdev + electron, this was a pretty effective method for getting old online experiments to run in person without any serious recoding (besides those 4 steps).


# How it works:

NodeJS and Electron are already installed on the lab computers (if not, you'll have to install them). When you double click the `run.bat` file,  it executes the terminal command: `npm start` <-- which executes an Electron webserver pointing to the `index.html` file.

The `index.html` file contains an text input box for one of the RAs to type the subjects ID number; then, they use the dropdown selection box to pick the right condition number (you'll probably want to edit this to match the number of conditions in your particular study; see step 4).

After the ID num and condition are selected, the RA clicks "Start", the `exp.html` file is loaded, which should run your experiment exactly as if you were running it online.

Also, all the data saves to the `data/` folder.


# More Background Info

Electron is a tool that runs a webserver as a local app on your computer, which has the look and feel of a native app for whatever OS you're using. It's extremely intuitive and easy to use, and allows you to translate webcoding skills (html/javascript) into native app building skills. And, it's almost flawlessly cross-platform; you only build your app once, and it will work for Linux, MacOS, & Windows.

It's used by a bunch of major apps, like Slack, Discord, & Obsidian.

The major downside is that it eats a lot of RAM <-- but honestly that's worth how easy it is to get native apps up and running very quickly. It was pretty effective for translating our online studies to in-person, given that I wanted to do as little work / recoding as possible. There could be a more seamless toolkit / setup you can use for this purpose, but 4 steps is well below my laziness threshold.

Best of luck