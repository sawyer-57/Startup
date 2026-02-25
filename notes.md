# CS 260 Notes

[My startup - ](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## Beginning/learning to use everything

- git clone will make a copy of the repo when I insert the code HTML
- ls to check if it is there 
- pwd to check where I am 
- cd ___ to move to the repo folder 
- git status to see if modifications were made 
- make sure to always save after modifying

1. modify and save 
2. git add __ [name of location of change] 
3. git commit -m "commit message"
4. git push 

- if you make changes on github, you need to sync to local copy on vs code
-> git pull

To add images in markdown: 
- add folder in repo
- move image into that folder
- access image by: ![given name](FolderName/imageName.png)

- cmd shift P (in terminal) shows all the different commands if you don't know how. >command

- HTML: structure
- CSS: style
- JavaScript: interaction

Console notes: 
- Allows you to navigate your disk, run console applications,run scripts
- ls: Lists files and directories in the current directory
- cd: Changes the current directory
- cp: Copies files or directories
- mv: Moves or renames files or directories
- rm: Removes files or directories
- ssh: secure remote shell
- scp: secure remote copy
- git: repository manipulation
- vi: command line editor

- use warp as my shell

- application (ex. HTTPS) : functionality like web browsing
- Transport (ex. TCP/UDP) : Packet delivery 
- TCP: slower, but is a consistent stream and won't miss any data (better for documents etc..)
- UDP: faster, may miss information (better for movies, games etc..)
- Internet (ex. IP) : establishing connections, routing
- Link (ex. fiber, hardware) : physical connections

- Domain Name System (DNS) : written name that connects to IP address
- use dig : dig [url ex. byu.edu] +short -> will take you there 
- or curl [IP address] -> will give info back
- curl -v byu.edu -> will give info (may tell you exactly what to type with https://)

Domain name
- ex. react.simon.cs260.click
- [subdomain.]*secondary(sld).top(tld) (secondary.top is the root)
- tld : ex. .com, .edu, .gov, .net, .click ...

localhost 127.0.0.1 -> just for your computer 
- renting a domain name: route 53

Servers 
- renting a server: ec2
- change region to n. virginia
- name it something like cs260-[app name]-[your name] 

## AWS

instance ID: i-0b3bd195013865f5a
elastic IP address: 34.227.255.97
to see my key, use command: ls -l ~/.ssh
key name: levelup.pem

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This part wasn't bad, it was a bit repetitive with the headers and footers, but overall it was pretty straight forward. 

## CSS

This part was a little tricky to get it exactly how I wanted. I had to do more research in how to make things work certain ways, but overall it was fun to watch my vision come to life and to play around with it. 

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```


```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting everything up was pretty straight forward, I like how this is a lot more organized, it felt good getting everything organized and put together. It did mess up a lot of my previous CSS, I got lots of it fixed but not back to how it was before which made me sad. If I get more time I'll go back in and try to figure it out. 

## React Part 2: Reactivity

It's so fun to look at my app working like it should! Some of the react stuff was a little confusing at first, but after reviewing the examples and simon code, it is slowly coming to make more sense. It's cool how this makes everything work!

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
