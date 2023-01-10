Exercise 1: Matching Numbers
Task	Text	 
Match	3.14529	
Match	-255.34	
Match	128	
Match	1.9e10	
Match	123,340.00	
Skip	720p

My Answer: \d$
Suggested Answer:  ^-?\d+(,\d+)*(\.\d+(e\d+)?)?$

Exercise 2: Matching Phone Numbers
Task	Text	Capture Groups	 
Capture	415-555-1234	415	
Capture	650-555-2345	650	
Capture	(416)555-3456	416	
Capture	202 555 4567	202	
Capture	4035555678	403	
Capture	1 416 555 9292	416

My Answer: (\d{3})
Suggested Answer:  (\d{3})

Exercise 3: Matching Emails
Task	Text	Capture Groups	 
Capture	tom@hogwarts.com	tom	
Capture	tom.riddle@hogwarts.com	tom.riddle	
Capture	tom.riddle+regexone@hogwarts.com	tom.riddle	
Capture	tom@hogwarts.eu.com	tom	
Capture	potter@hogwarts.com	potter	
Capture	harry@hogwarts.com	harry	
Capture	hermione+regexone@hogwarts.com	hermione	

My Answer: ^([\w\.]*).*(@.+\.com)$
Suggested Answer:  none

Exercise 4: Capturing HTML Tags
Task	Text	Capture Groups	 
Capture	<a>This is a link</a>	a	
Capture	<a href='https://regexone.com'>Link</a>	a	
Capture	<div class='test_style'>Test</div>	div	
Capture	<div>Hello <span>world</span></div>	div	

My Answer: \W(\w{1,3})
Suggested Answer:  <(\w+)

Exercise 5: Capturing Filename Data
Task	Text	Capture Groups	 
Skip	.bash_profile		
Skip	workspace.doc		
Capture	img0912.jpg	img0912 jpg	
Capture	updated_img0912.png	updated_img0912 png	
Skip	documentation.html		
Capture	favicon.gif	favicon gif	
Skip	img0912.jpg.tmp		
Skip	access.lock		


My Answer: ^(.+)\.(jpg|png|gif)$
Suggested Answer:  (\w+)\.(jpg|png|gif)$


Exercise 6: Matching Lines
Task	Text	Capture Groups	 
Capture				The quick brown fox...	
Capture	   jumps over the lazy dog.


My Answer: ^\s*([\S ]+)
Suggested Answer:  ^\s*(.*)\s*$


Exercise 7: Extracting Data From Log Entries
Task	Text	Capture Groups	 
Skip	W/dalvikvm( 1553): threadid=1: uncaught exception		
Skip	E/( 1553): FATAL EXCEPTION: main		
Skip	E/( 1553): java.lang.StringIndexOutOfBoundsException		
Capture	E/( 1553):   at widget.List.makeView(ListView.java:1727)	makeView ListView.java 1727	
Capture	E/( 1553):   at widget.List.fillDown(ListView.java:652)	fillDown ListView.java 652	
Capture	E/( 1553):   at widget.List.fillFrom(ListView.java:709)

My Answer: ^.*\.(\w+)\(([\w.]+):(\d+)\)$
Suggested Answer:  (\w+)\(([\w.]+):(\d+)\)$


Exercise 8: Extracting Data From URLs
Task	Text	Capture Groups	 
Capture	ftp://file_server.com:21/top_secret/life_changing_plans.pdf	ftp file_server.com 21	
Capture	https://regexone.com/lesson/introduction#section	https regexone.com	
Capture	file://localhost:4040/zip_file	file localhost 4040	
Capture	https://s3cur3-server.com:9999/	https s3cur3-server.com 9999	
Capture	market://search/angry%20birds	market search	


My Answer: (\w+)://([\w\.\-]+)(:(\d+))?
Suggested Answer:  (\w+)://([\w\-\.]+)(:(\d+))?




