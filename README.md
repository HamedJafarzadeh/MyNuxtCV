# NuxtCV

This project is a CV template built on NuxtJS and VueJS that is **print-friendly**. It is using reusable items to simplify CV design. 

However it is in the early stage yet. You are welcome to help me extend it.

Demo : http://cv.hamedj.ir


## Steps you need to take  to prepare your CV page
First of all, get a little familiar with [Nuxt.js docs](https://nuxtjs.org). 

then :

###  Files that you need to edit to build your CV

 The left column of the resume can be edited in the `/components/profile.vue` file.

 I tried to keep it easy to edit the resume, so the rest of document can be edited in `page/index.vue` file only.

 ### Google analytics

 In `plugins/googleanalyctics.js` replace `UA-xxxx-2` with your google analytic identification code.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).



## Todo :

- Change all props to slots, in order to have more flexibility 