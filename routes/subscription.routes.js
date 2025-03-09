import { Router } from "express";

const subscriptionRoutes = Router();

subscriptionRoutes.get("/", (req, res) => {
    res.send({title:'GET all subscription'})
});
subscriptionRoutes.get("/:id", (req, res) => {
    res.send({title:'GET subscription details'})
});
subscriptionRoutes.post("/", (req, res) => {
    res.send({title:'CREATE subscription'})
});
subscriptionRoutes.put("/:id", (req, res) => {
    res.send({title:'UPDATE subscription'})
});
subscriptionRoutes.delete("/:id", (req, res) => {
    res.send({title:'DELETE subscription'})
});
subscriptionRoutes.get("/user/:id", (req, res) => {
    res.send({title:'GET all user subscription'})
});
subscriptionRoutes.put("/:id/cancel", (req, res) => {
    res.send({title:'CACEL subscription'})
});
subscriptionRoutes.get("/upcoming-renewals", (req, res) => {
    res.send({title:'GET upcoming subscription'})
});

export default subscriptionRoutes;