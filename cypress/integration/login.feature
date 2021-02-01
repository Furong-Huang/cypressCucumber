Feature: login functionality

     As a user I can login the system 

     Scenario: a user can login successfully with correct credential
     Given I am at login page
     When I input username and password 
          | username      | password      |
          | standard_user | secret_sauce  |
     And I click the button
     Then "ADD TO CART" should be shown

     Scenario: a user can login failure with lockedout user
     Given I am at login page
     When I input username and password 
          | username        | password      |
          | locked_out_user | secret_sauce  |
     And I click the button
     Then "Sorry, this user has been locked out." should be shown

          Scenario: a user can login failure with wrong user
     Given I am at login page
     When I input username and password 
          | username      | password      |
          | wrong_user    | secret_sauce  |
     And I click the button
     Then "Username and password do not match any user in this service" should be shown


    