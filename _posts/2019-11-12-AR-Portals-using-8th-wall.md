---
layout: post
title:  "AR Portals using 8th wall "
date:   2019-11-12
desc: "Web AR for mobile devices!"
keywords: "AR,Javascript,WebGL, New Feature"
categories: [Blog]
tags: [knowledge]
icon: fa-camera
---

---  

# AR Portals using 8th wall  
## 8th wall web:  

 Web AR for mobile devices!  

![](http://www.upl.co/uploads/download-381573502754.jpg)   
Built entirely using standards-compliant JavaScript and WebGL, 8th Wall Web is a complete implementation of 8th Wall’s Simultaneous Localization and Mapping (SLAM) engine, hyper-optimized for real-time AR on mobile browsers. Features include 6-Degrees of Freedom Tracking, Surface Estimation, Lighting, World Points and Hit Tests.  

### Web AR Examples

* A-Frame Examples(Recommended to start)  
* Babylon.js Examples  
* three.js Examples  
* Camera Pipeline Examples  
* Amazon Sumerian Setup  

## Prerequisites  
> install npm

# Getting Started  
1. Head over to [8th wall website](https://www.8thwall.com/) and sign up if you haven't.  
2. Go to device authorization and authorize your browser and phone (through QR code scan). You will see developer mode "ON".  
3. Go to settings and grab app key. We will use that later...   
     Well done! :thumbsup:  

## Github :octocat:
1. Go to [Github 8th wall/Web](https://github.com/8thwall/web/)
2. Git Clone Web repository so you have it in your local.

*so far so good...*

## Follow these steps  
1. Go to examples/aframe/portal/index.html  
2. Replace app key on line 15.   
3. Then cd into the serve folder.  
4. npm install   
5. cd .. to reach the root of the repository.   
6. Let's start the server now. Type ./serve/bin/serve -d ./examples/aframe/portal/ -p 7777 -i en0  

## Steps to guide

![](http://www.upl.co/uploads/11358889111573502164.png)   

![](http://www.upl.co/uploads/19219253121573502164.png)  

![](http://www.upl.co/uploads/12367632131573502164.png)  



## Custom Modifications

  “City.mp4” 360 video link: https://cdn.8thwall.com/web/assets/video/city.mp4

Script:
```javascript
AFRAME.registerComponent('play-on-window-click', {
  init: function() {
    this.onClick = this.onClick.bind(this);
  },
  play: function() {
    window.addEventListener('click', this.onClick);
  },
  pause: function() {
    window.removeEventListener('click', this.onClick);
  },
  onClick: function(evt) {
    var video = this.el.components.material.material.map.image;
    if (!video) { return; }
    video.play();
  }
});
// Add this to line 24 before the ending of script tag.  
```

Serve Command:

Make sure you are in the “web-master” directory before executing the following command.  (run “pwd” on Mac or “cd” on Windows to print out the current working directory)

Mac:

./serve/bin/serve -d examples/aframe/portal

Windows:

serve\bin\serve -d examples\aframe\portal

Note: If you are trying to run the serve script from another directory, you’ll likely have to adjust the paths to the serve script and/or project directory.  For example, if you are in the “web-master/serve/bin” directory, you’d run:

Mac:

./serve -d ../../examples/aframe/portal

Windows:

serve.bat -d ..\..\examples\aframe\portal

Asset Declaration:
```
<video id="video" style="display:none"
    autoplay loop crossorigin="anonymous" playsinline
    webkit-playsinline>
  <!-- MP4 video source. -->
  <source type="video/mp4" src="NAME.mp4" />
</video>
// Add this inside <a-assets> on line 94  
```
// Edit NAME.mp4 with city.mp4

Call Asset:
```
 <a-videosphere rotation="0 0 0" src="#video" play-on-window-click>
 </a-videosphere>
 // Add this code to line 173 and remove the unicorn.gltf and the platform over which it's placed.   
```
**Thank YOU**   
![](http://www.upl.co/uploads/download1573502754.png)
