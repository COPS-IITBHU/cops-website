---
layout: post
title:  "CSOC ML Week5"
date:   2019-06-26
desc: "5th blog of CSOC ML which contains links to many resources"
keywords: "Neural Networks, Computer Vision"
categories: [Blog]
tags: [knowledge]
icon: fa-camera
---

---
# Introduction
Hello and welcome to week 5 of CSOC ML although it is not exactly that but let us go on with it. Hope that you have gone through most of the resources given to you till now and have found the resources helpful. This week we will start with some advanced topics like Neural Networks and Convolutional Neural Networks. The main aim from this week onwards will be to give you a general idea about the modern state of Machine Learning and provide you the resources which will act as starting points to explore and get an insight of the field. The materials provided may be too much to cover in just weeks(they will be!!) but as mentioned above these will act as a guide to you in the future so don't force yourself with completing everything within 2 weeks!!

# Courses
Before we start I will be providing a list of awesome courses that you can do in these topic. These courses will give you a lot of knowledge about the field.
- [Andrew Ng's Course on Deep Neural Networks](https://www.coursera.org/learn/neural-networks-deep-learning)
- [Andrew Ng's course on Convolutional Neural Networks](https://www.coursera.org/learn/convolutional-neural-networks)
- [CS231n: Convolutional Neural Networks for Visual Recognition](https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv)

The first two courses give you a strong idea and intuition about Neural Networks and Convolutional Neural Networks. The third is a more comprehensive and exhaustive course on both the subjects by Stanford University. Once you complete the course on Neural Networks(1st course), the third course is highly recommended. Take your time to go through these courses.


# Neural Networks
Now coming to the more meatier part, what are **neural networks**??? Neural networks are a set of algorithms, modeled loosely after the human brain, that is designed to recognize patterns. [This video](https://youtu.be/aircAruvnKk) will make things much clearer and give you an intuitive idea about neural networks. Now, the question arises how do the neural networks learn to identify or recognize patterns? These three videos will give you a clear idea about this:
- [Gradient descent, how neural networks learn](https://www.youtube.com/watch?v=IHZwWFHWa-w)
- [Backpropagation and what is backpropagation really doing?](https://www.youtube.com/watch?v=Ilg3gGewQ5U)
- [Backpropagation calculus](https://www.youtube.com/watch?v=tIeHLnjs5U8&t=10s)

Also for more insights go through the [first two chapters of this book](http://neuralnetworksanddeeplearning.com/index.html). The two chapters explain things more mathematically with the appropriate code. So people who want strong mathematical justification(which should be all of you guys) this is a very good resource.

# Convolutional Neural Networks
If you have grasped the concept of neural networks clearly then understanding Convolutional Neural Networks(CNN in short) would not be hard. CNN's are widely used with the data involved is images, although they have several other applications. The following blog will make things clearer:
- [Blog 1](https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53)
- [Blog 2](https://towardsdatascience.com/the-most-intuitive-and-easiest-guide-for-convolutional-neural-network-3607be47480)
- [Blog 3](https://medium.com/@RaghavPrabhu/understanding-of-convolutional-neural-network-cnn-deep-learning-99760835f148)
- [Video](https://www.youtube.com/watch?time_continue=381&v=FmpDIaiMIeA)

These blogs and videos will help you get good intuition about Convolutional Neural Network. We will be providing some more resources on this the next week. Go through the Stanford course and Andrew Ng's course mentioned above for the more in-depth understanding of the concept and to get insight into more useful applications.

# Programming libraries
Now one question you may all have is "Do I have to code the Neural Networks and CNN's from scratch along with backpropagation etc..". The obvious answer is **NO!!**. There are a lot of programming frameworks that do it for you and if you are considering going into this field knowledge about any one of these is a must. We will discuss two famous and widely used frameworks, Tensorflow and Pytorch.

## Tensorflow
Many of you must have heard about this. TensorFlow(https://www.tensorflow.org/) is an end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries and community resources that lets you easily build and deploy ML powered applications. Tensorflow has changed a lot over time and its present integration with another deep learning framework **Keras** has made it much easier to work on it. There are several tutorials on tensorflow available online. So just **Google**. However to get started, go through this [basic tutorial](https://www.tensorflow.org/tutorials/keras/basic_classification). More can be found on their official page.

## Pytorch
Pytorch(https://pytorch.org/) is another famous library for Deep learning. It is an open source deep learning platform that provides a seamless path from research prototyping to production deployment. The best thing about Pytorch is it is pythonic and hence very easy to learn. The best way to learn pytorch is through the [official tutorials](https://pytorch.org/tutorials/). These are extremely good tutorials. [This blog](https://medium.com/deeplearningbrasilia/deep-learning-introduction-to-pytorch-5bd39421c84) also provides some great insights. Also, you can get several more resources on this just by **Googling**

# Colab
Bigger neural networks mean more and more computation and more and more time. Hence **GPU's (Graphics processing unit)** are a must if you want to train your networks fast. [This blog](https://www.analyticsvidhya.com/blog/2017/05/gpus-necessary-for-deep-learning/) will explain the benefit of using a GPU and why they are essential for Deep learning. Now all of your systems may not have an Nvidia Graphics card or may not have the requirements to smoothly run ML algorithms. DO NOT WORRY!!. **Colab** provides you free GPU's!! Seriously!!. For anyone who doesn’t already know, Google has done the coolest thing ever by providing a free cloud service based on Jupyter Notebooks that support free GPU. You can use colab to run your ML algorithms and networks. All you need is a google account which is also free!!. 

[This article](https://towardsdatascience.com/getting-started-with-google-colab-f2fff97f594c) will help you understand Colab and its functionalities. Make yourselves familiar with this platform as **all the assignments in the coming weeks will be on Colab**.

Well, a lot of material has been provided to you. Do not rush through it go through them slowly and if you get stuck anywhere ask your doubts in any of the various groups and get them cleared. These materials cover most of the import concepts in the field. So start with the first course on Neural Networks by Andrew Ng and then go through all the blogs and videos given in The Neural Networks and Convolutional Neural Networks section. Start with Tensorflow and make yourself familiar with Colab. This will be sufficient for the next assignment. Meanwhile, continue to go through the above-mentioned courses. 
Also, all those who have submitted the assignment will get reviews through the email they have provided. So, ALL THE BEST!!

