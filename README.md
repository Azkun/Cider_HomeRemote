# Cider Home Remote

A local remote gui for the music app "Cider", using Node.js (Express.js). This is hosted on the same PC as Cider is used, and its only purpose is to serve as a remote to use on your phone while you're not able to access Cider on your PC (when playing...)

## /!\ DISCLAIMER

I do not use Git & GitHub alot, so please do not be surprised for any errors regarding my commits or things like that. Also, I made this project very fast and I do not wish to compile it to a executable, nor to make the UI better.

# How to use

Clone the repository to access it in your PC

```
git clone https://github.com/Azkun/Cider_HomeRemote.git
```

After installing the repo, head to the

```
npm install
npm start
```

By default, the port used is 3005, you can change that in the index.js file.
Head up to localhost:3005/, or in your phone, make sure to be on the same WiFi as your PC, and head up to your PC's ip without forgetting :3005. To get your PC's IP, there's different methods, but in Windows, you have to open a CMD & use ipconfig. Open tickets for any issues (May not work in MacOS & Linux as Cider RPC local server may not work the same way)