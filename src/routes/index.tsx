import { type RouteObject, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ActivityList from "../pages/ActivityList";
import ActivityDetail from "../pages/ActivityDetail";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ApprovedActivitiesshow from "../pages/ApprovedActivitiesshow";
import MyActivities from "../pages/MyActivities";
import HistoryEvents from "../pages/HistoryEvents";

export const routes: RouteObject[] = [
  { path: "/", element: <HomePage /> },
  { path: "/activities", element: <ActivityList /> },
  { path: "/activities/:id", element: <ActivityDetail /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/activities/:id", element: <ActivityDetail /> },
  { path: "/activities/approved",element: <ApprovedActivitiesshow />,},
  { path: "/my-activities",element: <MyActivities />,},
  { path: "/history", element: <HistoryEvents /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/home", element: <Navigate to="/" replace /> },

];
