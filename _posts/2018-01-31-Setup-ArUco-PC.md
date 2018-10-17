---
layout: post
title:  "Setting Up ArUco on your PC"
date:   2018-01-31
desc: "Setting up opencv's ArUco library for marker detection"
keywords: "Jekyll,gh-pages,website,blog,easy"
categories: [HTML]
tags: [cmake,opencv,aruco,installation]
icon: fa-facebook
---

# Setting up ArUco Library on your PC

![ArUco + OGRE demo. Credits : https://sourceforge.net/projects/aruco/](https://cdn-images-1.medium.com/max/1600/1*zAidwmEHUvUtuqWEJRBQiA.jpeg)

The ArUco library for OpenCV is a lightweight C++ wrapper for Augmented Reality applications. Its simple, efficient and versatile enough to detect hundreds of unique AR markers.

## Pre Requisites
+ Setup OpenCV on your PC. Get the [installation instructions here](https://docs.opencv.org/master/df/d65/tutorial_table_of_content_introduction.html)
+ Basic CMake knowledge. For starters, first two steps of the [official documentation](https://cmake.org/cmake-tutorial) will be enough.

## Installing ArUco Library
The [latest release package](https://sourceforge.net/projects/aruco/) can be found on sourceforge. Now you need to extract and compile the source code using cmake(the instructions mentioned below work on linux; for windows you can use use cmake-GUI).

Note that the official documentation recommends installing it in a working directory, rather than with sudo or admin privileges. Supposing you downloaded it in _Downloads_, open terminal — note that `xxx` is downloaded zip library version

```
cd ~/Downloads
unzip arucoxxx.zip
cd aurucoxxx
mkdir build
cd build
cmake .. -DCMAKE_INSTALL_PREFIX=<pathToInstall>
make
make install
```

Here the _pathToInstall_ will be preferred location. I kept it in the same folder as

```
-DCMAKE_INSTALL_PREFIX=../aruco_src
```

![If you can see this, you’ve completed the installation](https://cdn-images-1.medium.com/max/1600/1*DIdAo2rIuXSnCF0gGNLl5A.png)

To make sure that ArUco finds the correct library files, generate a config file(refer [this blog](http://miloq.blogspot.in/2012/12/install-aruco-ubuntu-linux.html) for more).

```
sudo gedit /etc/ld.so.conf.d/aruco.conf
# Add the following line and save it:
# /usr/local/lib

# Now, in your terminal, execute:
sudo ldconfig
```
Note that since the installation is not global you’ve to **always include** _pathToInstall_ in `CMakeLists.txt` file of your project as

```
# Adding local ArUco Library
include_directories(/home/<pc-name>/Downloads/arucoxxx/aruco_src/include/)
link_directories(/home/<pc-name>/Downloads/arucoxxx/aruco_src/lib/)
```

That’s it. Found this article helpful? If so, please comment below. Feel free to ask any questions.
