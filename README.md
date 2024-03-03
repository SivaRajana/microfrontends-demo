# Microfrontend Demo with React

Welcome to the microfrontend demo with React! This simple and easy-to-understand demo will guide you through the process of running our example microfrontend setup. In this setup, we have three main directories: 'mfe1', 'mfe2', and 'shell'. Each demonstrating a separate element of a microfrontend architecture.

Before you start, make sure you have `Node.js` and `npm` installed on your machine.

## Getting Started

To get started with this demo, let's install the necessary node modules for each microfrontend and the shell.

**Microfrontend mfe1**

First, navigate to the 'mfe1' directory, install the necessary dependencies and start the application.

```bash
cd mfe1
npm install
npm start
```

After running these commands, you should see microfrontend 'mfe1' running in your browser.

**Microfrontend mfe2**

The same steps must be followed for the second microfrontend. Navigate to the `mfe2` directory, install the dependencies, and run the application.

```bash
cd mfe2
npm install
npm start
```

Microfrontend 'mfe2' should now also be running in your browser.

**Shell**

Finally, start the shell application by following the same steps. In the `shell` directory, install the necessary dependencies and start the application.

```bash
cd shell
npm install
npm start
```

The shell application which combines and orchestrates the mfe2 microfrontends should now be accessible in your browser.

## What is happening

In this demo, 'shell' acts as the main container application for our mfe2 microfrontends 'mfe1' and 'mfe2'. Each microfrontend is a standalmfe1 application, and they are being stitched together in the shell. This is a basic example of how microfrontends enable us to break up a monolithic UI into simpler, smaller applications.

It's exciting to explore the world of microfrontends, where smaller manageable teams can develop deploy and scale their respective features independently.

Happy Coding! <br/>
[My linkedIn profile - Siva Rajana](https://www.linkedin.com/in/siva-rajana/)
