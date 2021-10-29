# Assignment-10: Health Care Website

[Link-1](https://health-care-bd11a.firebaseapp.com/)
[Link-2](https://health-care-bd11a.web.app/).

## Available Features

In this project you will about below features

### `Dynamic side navbar`

side navbar is created from array data by using map.If you want to create dropdown navbar, you just have to giv data in property called subNav

### `React Router`

React router dom is used to route from one route to another route

### `Dynamic Routing`

Dynamic routing is used to show service details from service and department details from department

### `Private Routing`

Here all pages are not free to create private page I used private route from react router

### `Firebase Authentication`

To see private route you have to login via email and password or login via google

### `Dynamic Rating`

Dynamic readonly rating used to show best service and department

### `Responsive`

Responsive for all devices

### `Hosting`

Hosted in Firebase to fix firebase reload 404 not found problem

In firebase.json file implement below code
{
"hosting": {
"public": "build",
"rewrites": [
{
"source": "**",
"destination": "/index.html"
}
],
"ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
}
}
