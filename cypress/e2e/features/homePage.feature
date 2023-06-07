Feature: Validating Home Page

# Background: 
#     Given I access the home page

Scenario: CT001: Validating Home Page Title
        Given I access the home page
        And Not logged in
        When Page load
        Then In the upper left corner you should display the title "conduit"

Scenario: CT002: Validating Field" Global Feed"
        Given I access the home page
        And Not logged in
        When Page load
        Then It must present the field "Global Feed"

Scenario: CT003: Validate Link When Clicking on Post Author Name
        Given I access the home page
        And Not logged in
        When Click on the name of the author "Anah Benešová" of the post
        Then You should load a new page with the author's name "Anah Benešová" as the title
        And Below it should present 2 tabs "Articles" and "Favorites"
        And Must display all posts related to the selected author "Anah Benešová"


Scenario: CT004: Validate Link When Clicking on Post Author Image
        Given I access the home page
        And Not logged in
        When Click on the image next to the author "Anah Benešová" of the post
        Then You should load a new page with the author's name "Anah Benešová" as the title
        And Below it should present 2 tabs "Articles" and "Favorites"

Scenario: CT005: Accessing the "Sign in to see your Feed" Tab Without Having Logged In
        Given I access the home page
        And Not logged in
        When click on the tab Sign in to see your Feed
        Then Will load the login screen

Scenario: CT006: Validating Post Date
        Given I access the home page
        And Not logged in
        Then In the post field, below the name must present the date "Fri Dec 09 2022"

Scenario: CT007: Tab "Global Feed" Validating Field "Read More"
        Given I access the home page
        And Not logged in
        When Click on the Read More field at the end of the post
        Then will load a new page with the title of the post highlighted "If we quantify the alarm, we can get to the FTP pi"

Scenario: CT008: Read More - Validate Link When Clicking On The Author's Name
        Given I access the home page
        And Not logged in
        And Click on the Read More field at the end of the post
        When Click on the name of the author "Anah Benešová" of the post
        Then You should load a new page with the author's name "Anah Benešová" as the title
        And Below it should present 2 tabs "Articles" and "Favorites"
        And Must display all posts related to the selected author "Anah Benešová"

Scenario: CT009: Read More - Validate Link "Sign In"
        Given I access the home page
        And Not logged in
        And Click on the Read More field at the end of the post
        When Click on the "Sign in" link at the bottom of the page
        Then Will load the login screen

Scenario: CT010: Read More - Validate Link "Sign Up"
        Given I access the home page
        And Not logged in
        And Click on the Read More field at the end of the post
        When Click on the "sign up" link at the bottom of the page
        Then Will load the Sign Up screen

Scenario: CT011: Click On The "rerum" First Post
        Given I access the home page
        And Not logged in
        When Click on the "rerum" link that is next to the red more of the first post
        Then Will display a new tab named "rerum"

Scenario: CT012: Click On The "maiores" First Post
        Given I access the home page
        And Not logged in
        When Click on the "maiores" link that is next to the red more of the first post
        Then Will display a new tab named "maiores"

Scenario: CT013: Click On The "rerum" First Post and Click "voluptate"
        Given I access the home page
        And Not logged in
        When Click on the "rerum" link that is next to the red more of the first post
        And Will display a new tab named "rerum"
        Then Click on the "voluptate" link that is next to the red more of the first post
        And Will display a new tab named "voluptate"

Scenario: CT014: Click On The "rerum" First Post and Validate "Read More"
        Given I access the home page
        And Not logged in
        And Click on the "rerum" link that is next to the red more of the first post
        And Will display a new tab named "rerum"
        When Click on the Read More field at the end of the post
        Then will load a new page with the title of the post highlighted "Try to transmit the HTTP card, maybe it will override the multi-byte hard driv"

Scenario: CT015: Validating Field "Popular Tags" tag "Implementations"
        Given I access the home page
        And Not logged in
        When click on the tab "implementations"
        Then Will display a new tab named "implementations"

Scenario: CT016: Validating Field "Popular Tags" tag "Implementations" Read More
        Given I access the home page
        And Not logged in
        And click on the tab "implementations"
        When Click on the Read More field at the end of the post
        Then will load a new page with the title of the post highlighted "Create a new implementation"

Scenario: CT017: Validating Pagination
        Given I access the home page
        And Not logged in
        When Scroll to the end of the page and click on page 2
        Then The page should be directed to tab 2





















