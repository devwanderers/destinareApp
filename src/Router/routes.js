import { Route } from 'react-router-dom'
// import PrivateRoute from "./CustomRoutes/PrivateRoute"
// import PublicRoute from './CustomRoutes/PublicRoute'
// import SignInLayout from './../components/Layouts/SignInLayout'
import * as paths from '../constants/routerConstants'
import MarketLayout from '../components/Layouts/MarketLayout'

const routes = [
    {
        name: 'LandingPage',
        path: paths.HomePath,
        route: Route,
        componentProps: { routes: [] },
        exact: true,
    },
    // {
    //     name: 'AuthView',
    //     path: paths.LoginInPath,
    //     route: PublicRoute,
    //     componentProps: {
    //         auth: 'login',
    //         routes: [],
    //     },
    //     layout: SignInLayout,
    // },
    // {
    //     name: 'AuthView',
    //     path: paths.SignInPath,
    //     route: PublicRoute,
    //     componentProps: {
    //         auth: 'signin',
    //         routes: [],
    //     },
    //     layout: SignInLayout,
    // },
    // {
    //     name: 'DashboardView',
    //     path: paths.DashboardPath,
    //     route: Route,
    //     componentProps: {
    //         routes: [],
    //     },
    //     layoutProps: {
    //         menuKey: 'menu-item-dashboard',
    //     },
    //     layout: MarketLayout,
    // },
    {
        name: 'StakingView',
        path: paths.StakingView,
        route: Route,
        componentProps: {
            routes: [],
        },
        layoutProps: {
            menuKey: 'menu-item-staking',
        },
        layout: MarketLayout,
    },
    // {
    //     name: 'PresaleView',
    //     path: paths.PresaleView,
    //     route: Route,
    //     componentProps: {
    //         routes: [],
    //     },
    //     layout: MarketLayout,
    // },
    {
        name: 'PrivateSaleView',
        path: paths.PrivateSalePath,
        route: Route,
        componentProps: {
            routes: [],
        },
        layout: MarketLayout,
    },
    {
        name: 'InvestView',
        path: paths.InvestPath,
        route: Route,
        componentProps: {
            routes: [],
        },
        layout: MarketLayout,
    },
    // {
    //     name: 'TripvixiaIFrame',
    //     path: paths.TravelPath,
    //     layout: SignInLayout,
    //     route: Route,
    // },
    {
        name: 'Error404View',
        route: Route,
    },
]

export default routes
