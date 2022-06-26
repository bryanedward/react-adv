import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface route {
    // interface
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const lazyOne = lazy( () => import(
    // webpackChunkName: "page1"
    '../pages/LazyPage1' ) )
const lazyTwo = lazy( () => import(
    // webpackChunkName: "page2"
    '../pages/LazyPage2' ) )
const lazyThree = lazy( () => import(
    // webpackChunkName: "page3"
    '../pages/LazyPage3' ) )

export const routers: route[] = [
    {
        to: "/lazy1",
        path: "lazy1",
        Component: lazyOne,
        name: "page1"
    },
    {
        to: "/lazy2",
        path: "lazy2",
        Component: lazyTwo,
        name: "page2"
    },
    {
        to: "/lazy3",
        path: "lazy3",
        Component: lazyThree,
        name: "page3"
    }
]