# ISLab Scala Parallel Text Classification

Van-Duyet Le (me@duyetdev.com)

More information comming soon.

# Using 

Start Prediction Server
````bash
pio-start-all
````

Import the data
````bash
pio import --appid 3 --input data/vnexpress-1000-import-able.json
````

Build, Train and deploy server
````bash
pio build
pio train
pio deploy
````

List server
````bash
pio app list # list all app 
````

### API Endpoint 

* Event server: **http://localhost:7070/events.json?accessKey=xxxxxx**

# TextManipulationEngine

Look at the following [tutorial](https://docs.prediction.io/demo/textclassification/) for a Quick Start guide and implementation details.

# Release Information

## Version 2.2

Modified PreparedData to use MLLib hashing and tf-idf implementations.

## Version 2.1

Fixed dot product implementation in the predict methods to work with batch predict method for evaluation.

## Version 2.0

Included three different data sets: e-mail spam, 20 newsgroups, and the rotten tomatoes semantic analysis set. Includes Multinomial Logistic Regression algorithm for text classification.

## Version 1.2

Fixed import script bug occuring with Python 2.

## Version 1.1 Changes 

Changed data import Python script to pull straight from the [20 newsgroups](http://qwone.com/~jason/20Newsgroups/) page.

