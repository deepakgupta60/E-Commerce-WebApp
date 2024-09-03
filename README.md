### ************** Session 6 >

Agenda > Props

1) Pass Props as json structure..
2) Have as a prop to pass in child function

Just store value you can use State variable

syntax like that: 
  const [name]=useState('default');

Change Name in State, you can use

Syntax like that:
 using setName = use call back

 <button onClick={()=>setName("change_Name")}>

you can use internet as much as possible.

************** Session 7 >

Agenda : Ternary Operator

? True : False


1) when click on button then show message, another button to hide

2) when we need toggle, scenarios then we can use .. !flag

syntax like that

const [flag]=useState(false) -> means hide

{flag ? <h1> True Code </h1> : <h1> False </h1> }

{flag && <h1>Testing</h1>}

{flag ? <h1> True Code </h1> : null }


3) if have multiple condition then we can use multiple conditions..

Admin
Guest

Syntax like that:

{loginStatus===1 ? "Guest User": loginStatus===2 ? "Member": loginStatus===3 ? "Admin": "Not any User" }

== only compare value
=== compare with value and data types.


4) one task 3 buttons, guest member and admin..
5) input handles in set to variable, input from the users..

Event is onchange, after enter any input then trigger.

Take Home Activity is :

when click on button then show all the details otherwise hide..

i have pass a directly component with props..
syntax:

<input type="text" name="pname" placeholder="enter name here" id="" onChange={(e)=>setName(e.target.value)} />
      {flag && <MyComp3 name={name}/>}
      <button onClick={()=>setFlag(true)}>Show</button>
also use these concept 

{flag ? <MyComp3 name={name}/> : null}

### *************** Session 8

Agenda is :

1) RadioButtons
2) SelectBox
3) CheckBox


Conversion Method
String to Number 
1) Number or parseInt


selectbox - multiple options but only choose one, 
radiobutton - choose when option have only 2 3 otherwise use selectBox

Change Event use in SelectBox
on the time of checkbox use checked as a event.target.checked.. return true or false.


********** Session 5 (New Classes)


there is no rule, for naming conventions..

e.target.value

e = event
target = html field
value = field value..

#### Recap 

Onchange trigger value, after change inside field

SelectBox -> e.target.value
RadioButton -> e.terget.value
CheckBox -> e.target.checkbox

in checkbox return true or false > should we check in console only..

variable use only use useState
change the variable data using their function


### ********** Session 6 (New Classes)

Async

Synchronous way
Task 1 - 5m - start with 0 to 5m - then finish
Task 2 - 6m - start with 6 to 6m - then finish
Task 3 - 7m - after then this trigger

After one is done then next is trigger task.


Asynchronous Task
Task 1 - in backround running, after name filling, then new, after
Task 2 - in running background 
Task 3 - in running background

after task start whole webpage waits for the tasks to finish, we cannot do any other work..


useState - it works in Async ways, 


### tricky way to print javascript variable into dom is first perform all calculations things.. then set to useState function..
  const [bonus, setBonus] = useState();
    setBonus(bon) -> bon is a javascript variable.
    your bonus is: {bonus} <br />


when i give all if condition then trigger all conditions.. then last one is trigger..
when use else if then making a relation..
when do condition wrong, then always true first one..




### ********** Session 7 (New Classes)

Async - > means in running is background

Agenda 

Hooks always start with use words

1) useState > assign a variable to in react
2) useEffect Hooks

useEffect Hook uses

1) if you want to perform any task on loading of component.
2) if you want to perform any task on change in value of state, prop

 useEffect(()=>{
        console.log("use effect hooks is running....")
    },[]) -- > [] sign to not dependent any other thing.. only run at the loading time..
    if not use then always running, when change in variable and on loading,

    when we use dependency multiple list..



Question 
1) why running in twice time on the loading.

answer: remove React.Strict in index.js

what is props: 

parent to child data transfer using props.


### *********** Session 8 (New Classes)

Agenda is:

1) Checkbox
2) Billing System
3) Showing Price on checkbox tick.


### ********** Session 9 (New Classes)

Agenda is:

1) Arrays
2) Map Method 
3) Filter Method


### ******** Session 10 (New Classes)

Agenda

1) Nested JSON
2) Listbox > When we to have many options and one should be able to access as many options they like. it is an alternative to checkbox ?? 
Pending

in state variable not use push function for storing elements


Multiple Select using Change Event

Pseudo Code
1) selected options pass to function
2) perform operation and add to new array
3) add to dom - using useState


Question: selected countries visiting places..

show 2 places to in order list, taj mahal, usa statue of liberty..


To Do List
1) One Way Binding (input value pass only)
2) Two Way Binding (input value pass and receive)




### Session 11 (Listbox) or multiple select

### Session 12 

** Agenda

1) Routing (it is used to navigate user from one path to another, we can say one page to another. it is an alternative to a tag in html)


in react not used anchor tag..

1) Package: react router dom

Fragment or <> </>

first create path means url or routes

<BrowserRouter>
<Routes>
<Route path="/home" element={<Home />} >
</Routes>
</BrowserRouter>

browser router always should be a root element, or parent element..

if not install then end of the install 
-g or --save


splitting


### Session 13 - Routing 2 (Structuring)

Browser router should we use in root element and wrap to our running component..

.. back directory
. current directory..


Login Page

if user is gtb and pass is 123 then redirect to another page

from one compoent to redirect to another component..

### Session 14 - Practice Proble


### Questions and Answers:


Question 1 - UseEffects




Mongo DB - Database - collection based

in window..

mongodb community

first set environment variables

and then run and type mongod - to start server

and also create folder in c drive -> data>db to start server

then start mongodb server using command - in run -> mongod and also run mongodb shell using > mongosh

MongoDB - Database - NoSQL Table > Collection Record / Row - Document Format / JSON Insert, React, Update, Delete

for then in shell

use shoppingdb - means shopping database name

there are not any fix structure..

#### Session 22
API - Format JSON, URL Based API's

rest api works on http methods - get, put, post, delete, patch.. form submit in two methods - get and post,

default request .. / -

make a server using express js - because of when we create a server using node js, then its taking code length is too much..

for use express.js - npm i express also install nodemon for server change automatically..

#### Session 23
Recap prev - api create / req / resp

Agenda - API Creation

How to run post api..

postman is using for api testing for post and get both.

data sent through post api..

search params.. passing or read data in api..

#### Session 24
Agenda

for the send data to server use ..
send signup/ register data use fetch method to post api..

use cors in server file for different ports thats why

server listen ----

make api use the name

-- /api/register

localhost:9000 already created

react to api - data pass api to react - read data

#### Session 25
Mongoose - package for schema based - structure - basically what columns - means create a schema.. node connnect with mongodb -

install mongoose package..

syntax is:

const mongoose = require("mongoose") mongoose.connect('mongodb://127.0.0.1:27017/test') -- when u connect then automatically create database

#### Session 26
agenda

signup page through redirect to new page.

login page..

toast > for showing message.s

react toast..

css and import and add in app file

and toast container..

and add theme for coloring..

RECAP SESSION 26
send code with signup in result have a json code. always use try and catch for exception handling...

use react toasify - for showing alerts and toast message for prompting.. syntax is simple

first use npm i toast then in app or root component use their css and their file import when we need a theme then use toastcontainer tag inside that tag use theme={}

like instead of message use toast.error(msg);

Login Component

same as register use login

but in the case of login you can use a get method..

login open using get method.. let res =fetch(config.endpoint+"/api/login") query or parameters use to pass a query.

pass the query params inside the url for login.. (username, password)

just pass the variables data using query param

inside server.js - use try { for checking if login username and password is match with mongodb database then.. result are store in a result variable..

use var result = await registerModel.findOne(username:uname, password:pass) if(result.ok) { resp.send(msg, statuscode=1)

} else {

} }

#### Session 27
Agenda - Admin Page

Search User -> Enter Username - Name, Phone - display
Evolving process - to change daily changes..

List of members just normally using fetch users.
Session 28
insert delete (done) view member (done) delete member - for carefully listen and understand..

api run with delete method..

like app.delete

when u delete then one thing is notice that is

means as a params is a request app.delete("/api/deluser/:id",(req,resp)=>{ try{ let result = await registerModel.deleteOne({_id:req.params.id}) } })

for deletion for the users..

for examps

?& - req.query path/params - req.params body - body.body

same procedure for deletion..

deleteOne

same as another function findByIdAndDelete(req.params.id) - return deleted data -- not return and deletedcount thing..

#### Session 29
Agenda - Encryption. - data should be gone in encrypted form. / like password / credit card / for admin - also not check what is the password.. already created..

bcrypt for encryption of password.. -> encrypted password means hash -

provide salt the time of encryption..

also add salt for different add encryption

auto generate salt -

salt means add extra for create a variation in password. - its not normal to guess it.. first install

npm i bcrypt then implement

first import -- require or saltround = 10; inbuild function for salt..b let hash=bcrypt.hashSync(req.body.pass, saltround)

#### Session 30
Conditional Links - Which depends on your login status if logged in welcome personName changepass signout

if logged out welcome guest login signup

unconditional Link - not dependent on your login status, home, products, search, contact us, feedback..

Login > Save information into the context > then we will read information from context whenever needed on different components..

Create Context --

const userContext = createContext(null)

const [userinfo, setuserinfo]=useState(null);

<userContext.Provider value={{userinfo, setuserinfo}}>

</userContext.Provider>

export {usercontext}

- component use conditions..
const {userinfo} = userContext(userContxt) Welcome {userinfo===null?"Guest":null}

inside guest use unconditional links but in false use conditional link..

we will read context whenever needed..

App File for Components..

const userContext=createContext();

const [userinfo, setuserinfo]=useState(null);

<userContext.Provider value={{userinfo, setuserinfo}}>

</userContext.Provider>

provider user context receiver inside the context provider..

Recap

conditional links - depend on login status.. if logged in welcome person name, change password signout

unconditional links - not depend on login status home, about, product, contact, feedback

what is usecontext: ?

use context for storing global variable.

usecontext hook..

inside provider of context App

Login: save information into the context : then we will read information from context whenever needed on components. // App.js import {createContext} from "react" const userContext = createContext(null);

// in starting should be null

const [userinfo, setuserinfo]=useState();

<userContext.Provider value={{userinfo, setuserinfo}}>

</userContext.Provider>

export {userContext} from "react"

//Header.js const {userinfo, setuserinfo}=useContext(userContext);

first use context Welcome {userinfo==null? <> Guest </>: userinfo.name }

same of links

{ userinfo===null? <> </>: }

for add data in useContext so that use in anywhere

function onlogout() { setuserinfo(null) navigate("/login") }

Due to have a issue, when page load, then info is null set..

//Server.js

with statuscode, also pass userdata:result

//Login.js

const {setuserinfo}=useContext(userContext);

else condition { setuserinfo(result.userdata); navigate("/) }

on the time of refresh, not remove data from session, localstorage, cookies.

we use sessionStorage.

Login> We will store information in context variable as well as in sessionstorage. Once user will refresh the page we will fetch information from session and restore it in context because on refreshing. the page information is not deleted from these three.

#### Session 30 - Part 2
Logout Page Login and pass the use context Variable.

#### Session 31 - Part 2
Correction of Refresh Page -- > in this session..

Agenda

Session Storage - information is stored till the time browser is open. Wheneveruser will close browser it will destroy all the data stored in session..

Local Storage - information is stored forever till time developer or user deletes it.

Cookies - information is stored for a particular period of time. after that period it automatically expires.

in all 3 information is stored inside browser i.e. on client side. information will not be stored on server side.

Login > we will store informaton in context variale as well as in sessionstorage. once user will refresh the page we will fetch information from session and restore it in context because on refreshing the page information is not deleted from session/local/cookies..

in the response time only show the other user info and exlude password.. let result = await registerModel.findOne({ username: req.query.un }); let result2 = await registerModel.findOne({ username: req.query.un }).select("-password");

Sessions Storage

RECAP ->

session and context in combination.

we will store in session because of when user close the browser then auto signout.. stay signed in / remember me.. (localstorage)

multi langingual - storage for the future reference..

after login store the data in session as well as context..

NOTE
On the login time store the data in context as well as session..

sessionStorage.setItem("userdata", result.userdata);

// app.js

use useEffect()

if(session.storage.get("userdata")!==null) { setuserinfo(sessionStorage.getItem("data")) }

recap:

Server file.. password and phone remove. search user,

login. js

store data in context and session..

app.js

check session.. if have any data

header.js inside logut then its clear from session.

#### Session 32
Change Password.

Current password New Password Confirm New Password

which user i want to change password.

user unique id and username.

_id username

api req data: current pass, new pass, username.

if currn pass is corrent then changed..

on the login time.. store the name, id, username, password.. minus pass, phone..

on the login time.. store the data..

with the login time store the data in context..

forms..

in server.js

// updateOne..

first checking current password matching..

#### Session 33
Admin Login

Admin - manage the website. Normal / Client user - who uses the website.

when login admin then only shows admin related data..

so that.. only add admin header data..

server.js

by default register user set to normal..

step by step

server.js

schema change -> type added

created

in app.js

#### Session 33 Part 2
Create Admin Login..

Just only one change that is by default pass.. usertype as normal.. admin created successfully.. only admin can change their password use admin header all over..

Recap
Admin Header Admin Login Pass usertype for admin.

first server.js add one column that is usertype

register.js add a by default normal user type

and first type change user type as admin from database..

home page as a admin home page..

AdminHome.js

in AppRoute.js create route for adminhome.js

login.js

when user login then redirect to admin home for admin and other in normal user.. if(userdata.usertype==="admin") then navigate to admin home else if(usertype.usertype=="normal") then navigate to normal home

app.js

take a state as usertype

userinfo===null ? : userinfo.usertype==="admin"?:

created new login with usertype as by default is Admin and show the message in toast admin added successfully.

#### Session 34
Agenda

Manage Category
CategoryName CategoryPicture - admin will upload picture fromtheir computer. Picture file along with other informaiton like category name et.c will be sent to API. API will receive all the informaiton. API will save information like categoryname etc into the database. As for image, only the name of the image will be saved into the database. ACtual image file will be saved into the folder of the website.

FormData

Recap ---

Manage Category

Category Name Category Picture

we need a FormData();

formData is working on key value pairs..

using multipart/form data added using FormData. enctype

using multer for handling multipart/form-data - primarily used for uploading file.

multer function if you want a new table then create a schema and model of that..

Summary: first input from field

set to e.target.value[0]

take two state one for name and second for pic..

formData as a object for store in single object.. pic and name.

const formData = new FormData();

formData.append(name) formData.append(picture)

using multer for file upload.. in that multer have two thing one is destination, second is name..

give the callback as

same copy from multer function..

schema, model and api.. catname, picture, versionKey:false;

give the name in the upload time.. use syntax:

upload.single('picture').async(req,resp)

in api.. or server.js

if(!req.null) // if not choose any file then by default take a static name { picture="defaultpic.jpg" } else // otherwise take a from choosed file pic name { picture=req.file.filename --- > }

directly sent as a

#### Session 35
Agenda

Sub Category

Choose Category SubCategory Name Picture

#### Session 36
Agenda: Manage Products -

Product Name: CatId SubCatId ProductName Rate Discount Description Stock Picture AddedOn - Featured -

#### Session 36
in Product Page..

After select Category then show their sub category inside the option menu..

in Product add elements..

ManageProd.js







#### Session 48 ####

Agenda
Admin pages,
- order, status, order item check..

#### Session 49 ####
Agenda.
User check - placed order checked by through user.. -- their own user order history.. view..

vieworder. js
orderhistory.js

only show the their orders not any other people user..
every person username..

according to userinfo context.. show their orders..

when user login their order history visible..

according to username..
fetch orders..

fetchuserorders
--- req.params.un..
**** Product Search
header.js
-- input search any product then show in next component..

let searchprod = ()=>{
navigate("/searchresult?s=${}")
}

searchresult.js

run is only submit..


get s value and store in a variable

api search product

search products..

setproddata(result.data)


searching querys..
api/searchproduct/:term
-- searchtext = req.params.term

prodname:{


**** Home page settings..

highlights products..
featured only change the yes..
.limit(6)



SMTP --- simple mail transfer protocol

used for sending mails through coding..

status update
order place
forgot password/ reset password
signup
contactus

login > compose > to > subject > mesg > send

outlook mail create --



allow..
in settings.. > pop and imap
let devices and apps use pop


take var,
name, email, phone, msg


package
nodemail ..

transporter.sendmail

require nodemailer

transporter create at globally..

mailoptions = {
text and html..
from:'same email',
heading and their value..
transporter.sendMail(mailoptions, (error, info))
easy to reply thats why..

#### session 51 ####
Agenda
- same id when signin again.. then crash the same server..

error: duplicate keys
some error occured --

SMTP
- email verifications - activation checking
validations - which checks whether use has made any input or not. if there i some input then it will check its format..

hello@gmail.com - validation ok

not validation.. but

use once user will get signup, they will get a link in their email to active their account on our website.. till the user will active its account, user wil not be able to login..

same as last one..

who is signup.. req.body.uname,
activate your account: abc
text dear ${req.body.pname} thank for signing up on our website. clieck on the following link to active on account http:localhost/activate..


for checking purpose.. activated: boolean..
by default value false.

login api..

if(result.activated == true)
{
res.status(1000).send({200})
}

#### Session 52 ####

Agenda - Activated.. false to true...
click link to true.. user identify.. -- uuid --

random id generate -- uuid --- different id generate..
require...

uuid4() -- function call..

actcode:String
-- token = uuid.v4();

link: localhost:3000/activate?token=${token}

database -> token --- get token then activat  their account..

activate page ready..

activate.js
api/activateaccount.. first take value in react..

get get a token from api..

activated:true..

if status is zero then its toast.. msg.. not matched.. == 0 then


#### Session 53 ####
Agenda
- Forget password / reset password.


usernam = check whether username is valid or not > if valid then we will send mail to user with alink to reset password , when click on lin k we will open a componage / to reset password..

link should be on particular time..

first check username is valid or not..

forgotpassword.js

api/forgotpass?un={un}

server.js
forgotpasword, async(req, resp)
{
if(result)
{

reset password. uname and password..
resetpasswordschema = new mongoose.schema({username.String, token:username, password:,

after save then mail

reset password.. page to change the

resetpassword.js

token take to react and check in node..

verify token == token is correct, have a time to verify the token..

forgot password:
verifyToken({

})

api/verifytoken> passs the verify and reset to the link..

set user info..

reset password api call on forgot password..


#### Session 54 ####

Agenda - Third party api integration..

weather info
currency converter
states > cities..
sharing inform - to own websites / to own mobile ap

if you are selling api - to other websites
indian govt data..

json placeholder


mostly websites provide api with key..

free api with paid plan, but for not use for any unethical purpose..
open weather api.. Keys>


fetch or call..

for check - their provided guide to check..

isp is provided according to isp server located in ludhiana, chandigarh - desktop is not sufficient, mobile to track easily..

### Session 55 ####
Agenda
- Validations..
check whether user is doing any input or not. if input is there then we will check whether the format correct or not.
it is done through js or html

-- Client Side

--- client side validation - before submit
--- server side validation - after submit

why need validation..
-- html validations..
function validateForm()
{

}

#### Session 56 ####
Agenda
-  env file. - it used to store global / app / environment variables which used in whole project..

for react only in react used..
REACT_APP_APIURL= -- only use this direct value
no need to take a start name of the variable..
for node then how to use..
SMTP_USER=
SMTP_PASS=

require("dotenv").config(); -- required for so install first then use


#### Session 57 ####
Agenda
- DATABASE understand the concept..

Server.js -->

Schema > Model > APIs.
normal server file..

api calling path. >> api run with url

model > schema  and model..

these files will contain schema and model of the collection. we have to create separate file for each collection..
Category.js >

models are folder, functions..
Category.js (Schema + Model) - export

Controller > are functions..
according to requirements created functions..
asyn functions..

URLs are need to create with http method..
inside routes create a path defines..

server.js --> combines all path..

only import routes file

TodayTask
> to 61

### Session 57 ####
Agenda - MVC  - model view controller

Schema >  Model > APIs

Model -> schame and model in same file..
Category.js (schema + model) - export model
SubCategory.js
these files will contain schema and model of the collection. we have to create separate file for each collection.

inside Controller.. - create a function..

inside routes . create a path.. use express.router();
router.get("/fetchallstudents", stucontroller.getallstudent)

in server.js -> import all routes
keys are same in our react fiels.  name so it wil become so simple just pass a body.

201 -- changes are added to the return from the server..
response json convert and pass to the server..
async wait till -> after completed all synchronous.. done then execute asyncronous.
 


##### Session 58 ####
last  Model > Contructor > Routes.
all information in just one file..

Editor -> WYSIWYG - Editor (what you see is what you get.)
reactquill

follow their documentations.

### Session 59 ####
Agenda - Multiple Image Uploads..

in server.js

when using multiple images. for sending multiple images..

Choose multiple files in webpage (react) > send multiple files to api > api will upload multiple files in our folder and also  save multiple names of files in our database.
addproductpics.js

















Json web token >
admin api create a most secure..


api url leak -> for use to secure apis.. manage category, sub category..

Admin login > issue token > when ever admin will call any api we will send token with api call request > node will verify token and then


use jsonwebtoken..

json bar and secret keys..

automatic session expire...

only admin can create and update any master things.. like category create, product and edit..

token_secret_key =

take some random token and

when login admin then generate token,

send in react > when normal person is login then token is not issue, when admin login then generate token.. and send to react

token store in whenever api call then,

authorization header.. send token value in header..

take from sesion and reuse..

api call and

api call > send..

jwt through verify.. token..


#### Session 62 ###

Routes Secure / Protect -->

admin pages are should be protected.

changepassword.js > once user login then open their pages.. so that it would be secure..

UserRouteProctector.js

<route path={} element={} mycomp = {changepassword}  

passing to the UserProctected and pass the props..

after login then stored in context variable..

showcart ->

all apis are protected..
 

****** Admin pages *****

login or not check through it..

##### Session 63 ####

Agenda -> Multiple Images upload edit and delete..

Prod Pics > Update and Delete..

FetchProdImages > Api Call, for returning pictures..

for delete single image rather then complete array..

api/delprodimage/:id/:imageName >







#### Session 63 ####
--- single image delete through multiple..

#### Session 64 ####
--- multiple images updation..
try to test.. sliders..
--- slider is conflicting.. so curroupt..

--- currept change

react slideshow image -- package for react sliders..
use simple and concise..


#### Session 65 ####

Agenda - Build website > single page application, without react it can run, only run with nodejs,

SPA -> then configure and run..

npm run build

static folder > js > code..

build file need to configure.. > myprojDeploy >

package.json and script
its compulsory.. npm init.. to create package. json..

manually created...
only take dependencies..

npm install... node_modules

server.js >> in just one change add index.html


app.use express




#### Session 65 #####

SPA use for single page application... 

npm run build -> to make a component..

configure according to node js

build folder create copy.. 

open in vs code..

independent way to run normal project..

npm start -> to start
npm run build -> to create a build

npm init -> to create package.json

npm install to node modules install..

package.json -> once filter our packages then install node module..

server.js -> build folder..

to create a configuration > only run server file then run the whole project..

app.use(express.static(__dirname))

app.use("*",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.listen(port,()=>{
    console.log("server is running on port ${port});
})

for environment purpose create .env file..

app.cors()=> when request is coming from another port that's why cors need.. otherwise it don't need..


#### Session 66 ####

Agenda -> captcha > completely automatic public turing test to tell computers and human parts..
for slow of the send message > smtp server busy, human being is run.. google recaptcha..

react google recaptch

developer console > site key need

admin console > 

google.com/recaptcha/admin/site 


version 2 checkbox

create > v2 sitelabel, add domain, site key and secret key... 10 lakh, 

user access pages > tag > 

import google recaptcha

cpverify, setcpverify = useState()

let gcaptchaonchange = (value)=>{
    console.log(value)
    if(value!==null)
    {
        setcpverify(true)
    }
    else
    {

    }
}

tester for human being..
recap > install google recaptcha

admin console > invisible > localhost > check verify.. daily on daily basis..


if captcha verify true then it will login..



#### Session 67 ####
Agenda -> Cookies

Session storage > till browser open store data
local storage > till user not delete data
cookies > particular time store data

for clients side store data.. in every  where store the data then access every where..

store in browsers.. > 


same as local and session storage..
inbuild.. object -> Storage class..

no inbuild option for cookies in javascript.. so use packages for 


universal cookie..

read docs..

cookies.set('mycat', 'pacman')
console.log(cookies.get('mycat'))


make a different component so that easy to clear..

why using cookies..

--- stre user preferences..
--- language store, country store, remember me.
--- Tracking data

#### Session 68 ####

Agenda > implement cookies in project
next time not need to login..


logout > remove cookies


#### Session 69 ####
server.js 

model 
controllers
routes

backend new project

create a backend 
> server.js > for new file > 
> controllers
accountController.js
--- accountModel = require("")

create functions related to controller..

export functions to use in routes..



> model > accountmodel.js > copied all model and schema.. 
--- registerSchema
--- export registerModel

module.export = mongoose.model()

>>>> npm i mongoose..
>>>> npm i bcrypt
>>>> npm i uid dotenv 
> .env >> relate to backend..

related to backend packages.. install in that folder..


> routes

import controllers..
and create new routes.. or path api..
mode.exports = 

inside backend
> npm init

stuapp>
myproj2


#### Session 70 ####

Agenda >>> 

>> routes 
import express
import controllers.
router.post('/signup', accountController.createUser);

export path for server.js
>>> server.js

**** Database connectivity..

import routes from current directory


const accountRoutes = require('./routes/accountRoutes')

for login use only controller.. 

install jwt token for verify..

in controller create a different asyn function and pass to the routes..
--- for deletion use fs package in node.

#### Session 71 ####
>> Redux Tookit.. for managing state managements.. for global object.. for context.. > alternate of context api..


working of redux --- 

> View  -- shown in frontend...

> Action -- 

first create store, all thing retrieve from there..

provider should be inside the root component..

<App/>

const istate = {name:"manish", age:20, gender:"male"}

install reduxt/toolkit..

install react-redux -- for the binding purpose..

create store = configureStore({
    reducer:(state)=>{
        return state;
    }
    preloadedState:istate
})



userinfo.js


#### Session 72 & 73 ####
Agenda - redux

Create Slice > create a sorter way to use redux..

createSlice({name:"userSlice", initialStae:istate, 
    reducers:{
        updateName(state, action)
        {
            state.name = action.payload
        }
    }
})


### Session 74 ###

Agenda - redux use in whole project

remove context and add redux

reducers > authslice.js
slice name, initial state, action functions..

const istate = {isLoggedin:false, pname:"Guest"}
createSlice({
    name:'auth',
    initialState,
    reducers:{
        login(state, action)
        {

        }
    }
})


store using dispatch()

data read from redux

const useSeletor() -> ()

#### Session 75 ####
Agenda - use Reducer..

checking all the condition according to the user status, if a user are login then its login other wise its a guides
replace context from all project and add a redux to it..

when after login, user refresh the page, at that time, store the userinfo in session so that it will remain the same.


dispatch after signout..



### Session 76 ###

live launch - 
online deploy  -

online database - where will store our information.. -- mongoDBAtlas
online webspace - where we save our data -- 
domain name - website name

1) Mongo DB atlas > create clustor

M0 > Advance Configuration..> shared
1) username and password > inside quickstart

if anyone open then assign should be 0.0.0.0/0 if ot then particular give ip address.

finish and close it..

database access > edit and set to admin.. 

then connect with use node> use connection string.. copy and paste in own database compass..

connected to our database > with same our page.. 

new window local connect > category, final category >> simple export full collection with json type.., same as save the all collections.. 

in remote db use add database use collection with simple..

deploy in github for our project file..

frotend in different and backend in different folder..

after install git use 

---> git config --global user.name "abc"
---> git config --global user.email "test@gmail.com"


server.js is push in git but need a url so our url provide free render..

login with github.. 

after that > new  > web service > git repository

what setting need to connect our backend with render method..
>> runtime -- node
>> only change build command and start command 

build command -> npm i node-modules cors mongoose express bcrypt jsonwebtoken uuid multer nodemailer dotenv
start command -> node server.js


server free 
environment variable > smtp and token paste in it

then create web services.


*********** IF Connected with mongoDB or build successfully**** that means its working fine.

api path is online and our database is online.. >> url are generated



******Now deploy frontend part****

only need a public, src, package.json and that lock file..

push in git for frontend 


render again new web service

all are same like backend.. thing,, just change is 
build command and start command.. 

npm i react-quill, node-modules, react-google-capta, slideshow, 

start command: npm start
enviroment variable: REACT_APP_API_URL and their valu are backend url.. 


#### Session 77 ###

Agenda - class component, life cycle method

react life cycle method -- 

#### Session 78 ####


Agenda - Api calling with axios package..


received successful data
- resp.data.msg

error message 
-- err.response.data.msg


ERRORS in AXIOS

-- response
-- request


for first time its blank when it's open


































