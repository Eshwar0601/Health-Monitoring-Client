import React from "react";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <>
            <div className="stickySidebar">
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                    <CDBSidebarHeader
                        prefix={<i className="fa fa-bars fa-large"></i>}
                    >
                        <a
                            href="/dashboard"
                            className="text-decoration-none"
                            style={{ color: "inherit" }}
                        >
                            Dashboard
                        </a>
                    </CDBSidebarHeader>
                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink
                                exact
                                to="/"
                                activeClassName="activeClicked"
                            >
                                <CDBSidebarMenuItem icon="columns">
                                    Home
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />
                            <NavLink
                                exact
                                to="/dashboard/tables"
                                activeClassName="activeClicked"
                            >
                                <CDBSidebarMenuItem icon="table">
                                    Periodical Health Data
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink
                                exact
                                to="/dashboard/visualization"
                                activeClassName="activeClicked"
                            >
                                <CDBSidebarMenuItem icon="user">
                                    Graphical Data
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <hr />

                            <NavLink
                                exact
                                to="/dashboard/chd"
                                activeClassName="activeClicked"
                            >
                                <CDBSidebarMenuItem icon="chart-line">
                                    CHD Prediction
                                </CDBSidebarMenuItem>
                            </NavLink>

                            <hr />

                            <NavLink
                                exact
                                to="/"
                                activeClassName="activeClicked"
                                onClick={() =>
                                    localStorage.removeItem("auth-token")
                                }
                            >
                                <CDBSidebarMenuItem icon="exclamation-circle">
                                    Logout
                                </CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                    {/* <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              className="sidebar-btn-wrapper"
              style={{
                padding: "20px 5px",
              }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter> */}
                </CDBSidebar>
            </div>
        </>
    );
};

export default SideBar;
