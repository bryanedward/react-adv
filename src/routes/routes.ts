import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../pages/NoLazy";
import { Principal } from "../pages/Principal";

type JSXComponent = () => JSX.Element;

interface route {
    // interface
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const lazyLayout = lazy( () => import(
    // webpackChunkName: "lazy layout"
    '../layout/LazyLayout' ) )

export const routers: route[] = [
    {
        to:'/principal',
        path:'principal',
        Component: Principal,
        name:'Shopping'
    },
    {
        to: "/lazyload",
        path: "/lazyload/*",
        Component: lazyLayout,
        name: "dashboard"
    },
    {
        to: "/lazy2",
        path: "lazy2",
        Component: NoLazy,
        name: "page2"
    }
]