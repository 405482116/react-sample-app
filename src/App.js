import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Auth from "./Auth";
import Basic from "./Basic";
import CustomLink from "./CustomLink";
import ModalGallery from "./ModalGallery";
import Nesting from "./Nesting";
import NoMatch from "./NoMatch";
import PreventingTransitions from "./PreventingTransitions";
import QueryParameters from "./QueryParameters";
import RecursivePaths from "./RecursivePaths";
import RouteConfig from "./RouteConfig";
import Sidebar from "./Sidebar";
import StaticRouterContext from "./StaticRouterContext";
import UrlParameters from "./UrlParameters";
// import AnimatedTransitions from "./AnimatedTransitions";

const paths = [
    'Auth', 'Basic', 'CustomLink', 'ModalGallery', 'Nesting', 'NoMatch',
    'PreventingTransitions', 'QueryParameters', 'RecursivePaths', 'RouteConfig',
    'Sidebar', 'StaticRouterContext', 'UrlParameters',
    // 'AnimatedTransitions'
]
function App() {
    return (
        <Router>
            <div>
                <ul>{paths.map((item, i) => (<>
                    <Link key={i} to={`/${item}`}>
                        {item}
                    </Link><br />
                </>))
                }
                </ul>
                <hr />

                <Switch>
                    {paths.map((item, i) => {
                        return (
                            <>
                                <Route exact path={`/Auth`}>
                                    <Auth />
                                </Route>
                                <Route exact path={`/Basic`}>
                                    <Basic />
                                </Route>
                                <Route exact path={`/CustomLink`}>
                                    <CustomLink />
                                </Route>
                                <Route exact path={`/ModalGallery`}>
                                    <ModalGallery />
                                </Route>
                                <Route exact path={`/Nesting`}>
                                    <Nesting />
                                </Route>
                                <Route exact path={`/NoMatch`}>
                                    <NoMatch />
                                </Route>
                                <Route exact path={`/PreventingTransitions`}>
                                    <PreventingTransitions />
                                </Route>
                                <Route exact path={`/QueryParameters`}>
                                    <QueryParameters />
                                </Route>
                                <Route exact path={`/RecursivePaths`}>
                                    <RecursivePaths />
                                </Route>
                                <Route exact path={`/RouteConfig`}>
                                    <RouteConfig />
                                </Route>
                                <Route exact path={`/Sidebar`}>
                                    <Sidebar />
                                </Route>
                                <Route exact path={`/StaticRouterContext`}>
                                    <StaticRouterContext />
                                </Route>
                                <Route exact path={`/UrlParameters`}>
                                    <UrlParameters />
                                </Route>
                                {/* <Route exact path={`/AnimatedTransitions`}>
                                    <AnimatedTransitions />
                                </Route> */}
                            </>
                        )
                    })}
                </Switch>
            </div>
        </Router>

    )
}

export default App;