# Counter Exercise

Counter Exercise is the name given to an skill test exercise developed by Pedro Rocha during it's free time.
This exercise is based in the popular framework Rails powered by the powerfull Ruby Programing language. The versions used to build and necessary to run this exercise are:

  - ruby 2.3.1p112
  - Rails 5.0.0.1

Has requested by the test examinatores, this exercise has to be able to send realtime updates to every single user connected to the website. To this purpose i've implemented a third party service named [Pusher][pusher] that add's that feature to our app.

### Please notice that,
I focused on learning the base fundamentals of the ruby language and the rails framework, every piece of code has been writen based on the best pratices present at [RubyOnRails.Org][rubyguides]


## Aplication Folder Structure

This folder has the following structure ( Only folders that have been modified will be referenced, all others are just Scafolded by the fault by the rails generator ):
  - `app` ( Aplication Files )
    -  `assets` ( Styles and Javscript Files ) 
        -  `config` ( Configuration Files ) 
            - `manifest.js` ( Assets folders )
        - `images` ( Aplication images )
        - `javascripts` ( Javscript files )
            - `application.js` ( Setup script files to load at an application wide level (head))
            - `cable.js` ( Websocket communitcation config files )   
            - `channels` ( 'empty folder' :) )
            - `index.coffee` ( Index controller default coffee script file )
            - `main.js` ( Push Notifictation Setup scripts and animations )
            - `pusher.js` ( Pusher.com library to receive Push Notifications published through pusher channels [Pusher][pusher] )
            - `sckecth.js` ( HTML5 Canvas drawing library, particle
        - `stylesheets` ( CSS, SASS files )
            - `_mixins.scss` ( Some SASS methods to write some common css properties )
            - `application.css` ( Setup additional CSS,SASS files to load at an application wide level (head) ) 
            - `index.scss` ( Styles applied to the html elements present at `app/views/index/index.html.erb` )
            - `main.scss` ( Styles that apply to Body and HTML tags )
    - `channels` ( Websocket files )
    - `controllers` ( Application controllers )
        - `application_controller.rb` ( Base Application Controller )
        - `concerns` ( Empty folder :) )
        - `index_controller.rb` ( Application controller , all app logic(magic) happens here  )  
    - `helpers` ( Application helpers )
        - `application_helper.rb` ( Scafolded file to place helper methods to be used in the Application Controller )
        - `index_helper.rb` ( Scafolded file to place helper methods to be used in the Index Controller )
    - `jobs` ( Application jobs )
        -  `application_job.rb`  ( Scafolded file to place jobs related with the Application Controller )
    - `mailers` ( Application mailers )
        -  `application_mailer.rb`  ( Scafolded file to place mailer methods related with the Application Controller )
    - `models` ( Application models )
        -  `application_record.rb`  ( Scafolded file that establishes a default active record connection to the Application database files )
        -  `concers` ( 'empty folder' :) )
        -  `hit.rb` ( Hits table database access model , that extends from the ActiveRecord library )
    - `views` ( Application view files )
        - `index` ( Views related with the Index Controller )
            - `index.html.erb` ( Index Controller layout files )
        - `layouts`
            - `application.html.erb` ( Application base HTML  )
            - `mailer.html.erb` ( Scafolded sample file that provides a default layout to HTML emails )
            - `mailer.text.erb` ( Scafolded sample file that provides a default layout to TEXT emails )
  - `...`
  - `db` ( Database files and Migrations )
    - `migrations` ( Migration files folder )
        -  `20160817014944_create_hits.rb` ( Migration file that creates the hits table on the Application database )
 - `...`
 - `public` ( Rails Server public file folder )
    - `sounds` ( Sound file folder )
        - `beep.wav`( Sound played when notification arrives )
  
## Setting up the APP
Before you run the Rails server, first you need to install all the librarys required by this app. For this purpose you are required to run the follwing shell command in the root of your app folder:

```sh
$ bundle install
```

After all gem's are installed and ready to be used by our app we need to create/migrate our datatables, for this purpose we need to run the following shell command in the root folder of our app:

```sh
$ bin/rails db:migrate
```

## Running the APP

To start the webserver and run the app, just type the following in your shell, while located on your app's root folder:

```sh
$ bin/rails server
```

And finaly open the following url in your browser

 - [http://localhost:3000][localhost]

Please notice that your firewall may block this communication, allow communications on the port 3000.

The server is setup to be accessed from other network host, just type the Local IP address of the machine running the server to test it from other devices.
 


License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [pusher]: <https://pusher.com/>
   [rubyguides]: <http://guides.rubyonrails.org/>
   [localhost]: <http://localhost:3000>
   
   
