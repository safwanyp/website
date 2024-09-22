---
title: 'Notting'
description: 'A note-taking app built to learn about the Ports and Adapters pattern.'
date: 'Sep 14 2024'
repoURL: 'https://github.com/safwanyp/notting'
---

### What is Notting?

Notting is an app I am working on in my free time to learn and put into practice, my knowledge of
the Ports and Adapters pattern in software engineering.

If I were to briefly explain what the pattern specifies, I would say this - It's a way of separating
an application's core functionality (i.e. business logic) from the technologies it uses. I will try and
make this clear in this post.

### What does Notting do?

Nothing complex. It allows a user to write notes, save them, edit them, and of course view them.

### Why build something that already exists?

Good question and as I said in the beginning, it's just something for me to practice the new things
I'm trying to learn - but that's not all.

I'm reading the book Hexagonal Architecture Explained by Alistair Cockburn and Juan Manuel Garrido de Paz
on the Apple Books app. I like to take notes of my inferences, questions, and other things when reading
books like this. Doing this in the Books app was okay at first, but got really annoying as I kept reading.

Hence I decided to start putting my knowledge into actual code, and thought - why not build an app that lets
me do what I want exactly, while also doing it with my newly gained knowledge?

And here we are.

### How is the Ports and Adapters pattern implemented in Notting?

The whole idea of the pattern is that whatever technology you use should be independent of the core
logic/functionality of the application. There are times when I like to do stuff in my terminal, and other times
in my code editor. But even the code editor changes from time to time. (Right now, I'm trying to move from
VS Code to Zed. I like VS Code because it has everything to help me work efficiently, but has its annoyances).

Another thing to note is that I wnat to be able to switch between storage providers to persist my notes.
Maybe AWS S3, or GCS, or even Git. I don't know what I will go with.

To make these "switches" as easily as possible, Ports and Adapters will come in handy.

The following diagram is something I whipped up to illustrate this implementation.
![Image illustrating the Ports and Adapters implementation in the Notting app](/images/notting-pna_diagram.png)

The app's core logic is defined inside the app itself. To get the app to do something for me (the user), I will
need to go through one of the driver ports, which are on the left-hand side. Let's take the "For Interacting with the App"
port for now.

This port has multiple adapters (or implementations), which allow me to use different methods to do the same thing - interact
with the app. If I decide to use the CLI adapter for the port, I will have to execute commands in a CLI tool to save a note (as an example).
If I use the Web App adapter, I will have to use a web app to do the same thing.

If it isn't clear already, the whole point is that I can use WHATEVER method I want, as long the method conforms to the constaints
defined by the port. This statement is true for all the ports and adapters in the app, regardless of whether they are driver (left-hand side)
or driven (right-hand side) ports.

Now let's take the "For Saving Notes" driven port (right-hand side) as an example. I mentioned earlier that maybe
I want to store my notes in S3, or Git, or something else. To make this possible, I create a port for saving notes, that defines
the constraints that the adapter (S3, Git, etc.) needs to satisfy. As long as these constraints are satisfied, I can seamlessly
switch between providers.

I will not go into the actual code since that will require a much longer post, but the repo is linked at the top of this post
for anyone interested. I have done my best to seperate the commits in the repo, so that it's easy to see how this switching
is possible.

> 💡 As of Sept 22 2024, the app is still a work in progress. I will update this post if anything does change!

### Some other thoughts

The app is a work in progress. I aim to make the repository as easy to parse as possible, so anyone can simply clone and run it.
The ultimate goal is to have a way to self-host it, so that I will no longer have to worry about my note-taking problems lol

If you have any questions, please feel free to reach out to me via any of the contact methods listed on my [home page](/#contact)
or just a start a discussion/issue on the repo linked at the beginning of this post!
