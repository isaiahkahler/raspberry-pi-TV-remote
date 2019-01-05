this is one of my first "real" programming projects that i made during winter break of 2016. it's a raspberry pi with an infrared blaster and receiver hooked up to GPIO, and a web client that controls which signals are sent to my TV. 


![the web client](https://raw.githubusercontent.com/isaiahkahler/raspberry-pi-TV-remote/master/media/webclient.png "the web client")

![the pi](https://raw.githubusercontent.com/isaiahkahler/raspberry-pi-TV-remote/master/media/pi.jpg "the pi")


originally, i have written a different web client with controls for the LED light strip in my room, but i never really used that enough, so that Raspberry Pi turned into the one i use in my car (peep isaiahkahler/digital-dashboard). the TV remote is used all the time in my house, since it controls the living room TV and everybody has the IP address bookmarked on their phone. 

### the basics

this project was built using LIRC (linux infrared remote control) and it works by recording the buttons on your TV remote and then replicating that signal to control your TV. 

i followed [this tutorial](http://alexba.in/blog/2013/01/06/setting-up-lirc-on-the-raspberrypi/ "Setting up LIRC on the Raspberry Pi") and used [this diagram](http://alexba.in/blog/2013/06/08/open-source-universal-remote-parts-and-pictures/ "Open Source Universal Remote - Parts & Pictures") to wire things up.

the parts consist of 
- (2) IR LEDs
- (1) IR receiver (TSOP38238 38KHz)
- (1) Transistor (P2N2222AGOD-ND)
- (1) 10k Ohm Resistor

i made sure to make the pi start everything on boot, and give it a reserved IP address.

somewhere down the line i used IFTTT to let our Google Home send API signals to the pi, which can control the TV with a simple "hey google, turn on/off the tv". i needed to add port forwarding to enable this.

![applet](https://raw.githubusercontent.com/isaiahkahler/raspberry-pi-TV-remote/master/media/applet.PNG "applet")

since i was a relatively new programmer, i did weird spaghetti code things,  used bad programming practice and convention, and used jquery (bleh).

i should also mention that at the time i had no idea how to setup a static web server, setup and run the backend, and send AJAX requests, so i have to give my brother credit there. thanks @ricokahler