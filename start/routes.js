'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')

Route.on('/frame-styles').render('frame-styles')

Route.on('/structural-framing').render('structural-framing')

Route.on('/roof-systems').render('roof-systems')

Route.on('/wall-panels').render('wall-panels')

Route.on('/contact').render('contact')

Route.on('/privacy-terms').render('privacy-terms')