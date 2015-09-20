# ISLab Scala Parallel Text Classification

Van-Duyet Le (me@duyetdev.com)

More information comming soon.

# Using 

## Install Engine Prediction Core 

Install Prediction.io server:
````
$ bash -c "$(curl -s https://install.prediction.io/install.sh)"
````

## Deploying 

It takes 6 simple steps to deploy and use an engine:

1. Install and Run PredictionIO
2. Create an Engine by downloading an Engine Template
3. Generate an App ID and Access Key, if you are integrating PredictionIO with a new application
4. Collecting Data
5. Deploy the Engine as a Service
6. Use the Engine

**Install Scala Parallel Text Classification:**
````bash
git clone https://github.com/duyetdev/scala-parallel-textclassification islab-scala-parallel-textclassification
cd islab-scala-parallel-textclassification
````

## Engine Commands

Start Prediction Server
````bash
pio-start-all
````


* `pio build` Build the engine at the current directory.
* `pio train` Kick off a training using an engine.
* `pio deploy` Deploy an engine as an engine server. If no instance ID is specified, it will deploy the latest instance.


Import the data
````bash
pio import --appid <app_id> --input data/vnexpress-1000-import-able.json
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

