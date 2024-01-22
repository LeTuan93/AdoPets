import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes, privateRoutes } from '~/routes';
import { DefaultLayout } from '~/Layout';
import statusLogin from './components/FormLogin/statusLogin';

function App() {
    const [status, setStatus] = useState(statusLogin());
    
    function handleStatusChange(newStatus) {
        setStatus(newStatus);
    }
    return (
        <Router>
            <div className="App">
                <Routes>
                    {status
                        ? privateRoutes.map((route, index) => {
                              const Page = route.component;

                              let Layout = DefaultLayout;

                              if (route.layout) {
                                  Layout = route.layout;
                              } else if (route.layout === null) {
                                  Layout = Fragment;
                              }

                              return (
                                  <Route
                                      key={index}
                                      path={route.path}
                                      element={
                                          <Layout onStatusChange={handleStatusChange}>
                                              <Page />
                                          </Layout>
                                      }
                                  />
                              );
                          })
                        : publicRoutes.map((route, index) => {
                              const Page = route.component;

                              let Layout = DefaultLayout;

                              if (route.layout) {
                                  Layout = route.layout;
                              } else if (route.layout === null) {
                                  Layout = Fragment;
                              }

                              return (
                                  <Route
                                      key={index}
                                      path={route.path}
                                      element={
                                          <Layout onStatusChange={handleStatusChange} >
                                              <Page />
                                          </Layout>
                                      }
                                  />
                              );
                          })}
                </Routes>
            </div>
        </Router>
    );

}
export default App;