import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "react-query";
import { Col, Row } from "reactstrap";

const MainDashboardLayout = () => {
    const queryClient = new QueryClient();

    return (
        <>
            <Row>
                <Col xs={2} lg={3} md={3} sm={3}>
                    <SideBar />
                </Col>
                <div className="col-lg-8">
                    <QueryClientProvider client={queryClient}>
                        <Outlet />
                    </QueryClientProvider>
                </div>
            </Row>
        </>
    );
};

export default MainDashboardLayout;
