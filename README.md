![CF](http://i.imgur.com/7v5ASc8.png) LAB - ORM: Advanced Modeling
=================================================
## Github
https://github.com/Kevinoh47/lab-12/pull/1

## Travis CI
https://travis-ci.com/Kevinoh47/lab-12

[![Build Status](https://travis-ci.com/Kevinoh47/lab-12.svg?branch=working12)](https://travis-ci.com/Kevinoh47/lab-12)

## Heroku
https://codefellows-401-lab12.herokuapp.com/

=================================================
## Before you begin
* You will be continuing to work on your API server
* Provided for you is a working server, which you may use as a starter

## Assignment
###### API Requirements
* Create a new `Model` class/interface to serve as the base for all models
* Convert the Category and Product interfaces to extend from the Model class
* Link the category and product mongo models, with the products being virtually populated into the categories
* Add a validate hook to both models and return an error if the model fails a validation rule
* Add a pre-save hook to both models to convert some element of the data (or to add content to a field) based on some condition.
  * Use your imagination, but make a few logical decisions for your store
  * e.g. Every price must end in .99 or Convert all product names to Title Case, etc.

###### Stretch Goal
* Add a sub-document to the `products` model called `social`
  * This should have 2 fields: `shares` and `likes`, both Numeric
  * On the UI, add a share and a like link that would update this sub-document on each product when clicked.


###### Testing
* test the full CRUD operations of your server and both models
* use supertest for your route testing so you don't spin up a web server
* use `mongodb-memory-server` as a stand-in for `mogngod` so you don't have to spin up a mongo database to test


##  Documentation
* Include your travis badge at the top of your `README.md` file
* Include your Heroku Server link
* In your `README.md`, describe the exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to add any additional information in your `README.md` that you would like.

