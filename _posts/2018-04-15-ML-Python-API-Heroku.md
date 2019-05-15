---
layout: post
title:  "Creating an ML based Python API hosted on heroku"
date:   2018-04-15
desc: "Building an AR Marker Detection program using ArUco Library"
keywords: "Jekyll,gh-pages,website,blog,easy"
tags: [PyTorch,Flask,Heroku]
categories: Blog
icon: 
---

# Creating an ML based Python API hosted on Heroku

Since long I’ve been thinking of creating an API which fellow developers could use over cloud. But I didn’t want it to be the traditional [Hello World API](https://github.com/shubhamvadhera/hello-world-rest) or [simple SQL Flask API](https://medium.com/python-pandemonium/build-simple-restful-api-with-python-and-flask-part-1-fae9ff66a706)  —  supporting the classical user name and email ID GET, PUT, POST, DELETE REST requests. Since AI and ML are so pervasive now, I thought of giving ML a try — and it is easy : )

## Image Classification using PyTorch
![PyTorch Logo](https://cdn-images-1.medium.com/max/800/1*t6hCM90evdnlPw4l9VK3AQ.png)

Since everything’s on the cloud and the free versions I needed an AI/ML project with small, lightweight dependencies for the cloud. I forked a project named [Img2vec](https://github.com/christiansafka/img2vec) that uses PyTorch to generate feature vectors for a dataset of images and then does a simple match([cosine similarity](http://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.cosine_similarity.html) in **sklearn**) of a test image with others using pretrained models. The readme provides enough snippets to make the demo work on your system.

## Training the image data set

For the sake of simplicity, I’m skipping the data set training part — there are lot of docs over the internet. For our API purpose, I’m generating image vectors and storing them as **csv** files. Since computations will happen over cloud, if we generate vectors on runtime, the API will always timeout. But the API will generate vector for the image data you’ll ping and read other vectors from csv files.

## Setting up the Flask app
![Flask Logo](https://cdn-images-1.medium.com/max/800/1*H3aEP7X3hd7wVCigrF3O1Q.png)

For a simple image match, I needed a POST or PUT request. There are many frameworks that support REST features, I used flask on Python 3.6. As the official site reads

> Flask is a lightweight WSGI web application framework. It is designed to make getting started quick and easy

So here’s the idea:

+ The server receives an image as byte stream
+ Those bytes are encoded back to an image using [Pillow](https://pillow.readthedocs.io/en/5.1.x/) in Python
+ A feature vector is generated for that image
+ That vector is matched against the training data images
+ Closest matching images are returned back (with a download URL and a percentage match value)

Here’s the gist of the API :

```python
# endpoint to detect image
@app.route("/image_clustering", methods=["PUT"])
def image_clustering():

    # Image converted in Base64 encoded byte stream
    bytes = request.get_data()
    results = search(bytes)  # returns a list of image matches
    return jsonify(results)
```
**Note**: The test Image posted is not normal byte stream, its base64 encoded image byte stream — a standard way to ship [binary data across networks](https://stackoverflow.com/questions/201479/what-is-base-64-encoding-used-for).

**Note**: Get the source [code here](https://github.com/AKS1996/k-means-clustering-api).

## Setting up the Heroku server
![Heroku Logo](https://cdn-images-1.medium.com/max/800/1*w2RAR48UbSAYv-6y_V-cdA.png)

Setting up the server is pretty straight forward, but there are a few issues I encountered:

+ **Slug Size**: Heroku provides a max slug size of 500 MB, the total data an app can hold(code, executables, and media files like images, pdfs) after compression. This is an issue since python libraries like SciPy and PyTorch are pretty hefty in size — PyTorch with CUDA 8 is ~600MB alone. But there are workarounds.
+ **PyTorch Version**: PyTorch provides a CPU only build variant, a small 45 MB library providing all the features we need for deployment.
+ **SciPy Manual Install**: Don’t know why, but an online install of SciPy on Heroku turns out to be buggy(more of it [here](https://stackoverflow.com/a/37648960/8243704). Instead I downloaded the SciPy whl(or the source code) as a file and manually installed it on the server.
+ **JPEG vs PNG**: In the demo code, I’ve used JPEG extension files(with base64 encoded data beginning from /9j/9…). So if you ping the server with images in other formats like PNG(base64 encoded data starts with iVi…) you will get an error.

## Demo Time
You can take a demo in many ways

+ You can install an app([get it here](https://github.com/AKS1996/k-means-clustering-api/blob/master/ImageMatch.apk)) on your android device. Click an image it’ll take some time and will display the closest matching images.
+ You can use [this python script](https://github.com/AKS1996/k-means-clustering-api/blob/master/sample_python_script.py). Just enter the relative path of the image on your desktop and it will display the results
+ You can make a PUT request online(I recommend [Hurl.it](https://www.hurl.it/) for starters) to [this URL](http://beard-app.herokuapp.com/image_clustering) with base64 encoded image data as body.

For the sample cat image shown, the results are

![cat](https://cdn-images-1.medium.com/max/800/1*Bo-R0IHSwuCVQOceaS9X1Q.jpeg)

```json
[
  [
    0.8155140106062471, 
    "https://www.googleapis.com/download/storage/v1/b/python-clustering-api.appspot.com/o/images%2FFace%2F124.jpg?generation=1522585329188523&alt=media"
  ], 
  [
    0.8145577585207011, 
    "https://www.googleapis.com/download/storage/v1/b/python-clustering-api.appspot.com/o/images%2FFace%2F242.jpg?generation=1522585299229997&alt=media"
  ], 
  [
    0.7914929138145477, 
    "https://www.googleapis.com/download/storage/v1/b/python-clustering-api.appspot.com/o/images%2FFace%2F212.jpg?generation=1522584727478100&alt=media"
  ], 
  [
    0.7806927914191767, 
    "https://www.googleapis.com/download/storage/v1/b/python-clustering-api.appspot.com/o/images%2FFace%2F099.jpg?generation=1522585251917855&alt=media"
  ], 
  [
    0.6948463995381056, 
    "https://www.googleapis.com/download/storage/v1/b/python-clustering-api.appspot.com/o/images%2FFace%2F119.jpg?generation=1522584693369035&alt=media"
  ]
]
```

If the article helped you, **please comment below**. Feel free to ask if faced any problems reading the article.
