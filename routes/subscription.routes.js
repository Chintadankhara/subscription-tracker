import { Router } from "express";
import authorize from "../Middlewares/auth.middleware.js";
import { cancelSubscription, crateSubscription, deleteSubscription, getAllSubcription, getSubscriptionById, getUpcomingRenewals, getUserSubscription, updateSubscription } from "../controllers/subscription.controller.js";

const subscriptionRoutes = Router();

subscriptionRoutes.get("/",getAllSubcription);
subscriptionRoutes.get("/:id", authorize,getSubscriptionById);
subscriptionRoutes.post("/",authorize, crateSubscription);
subscriptionRoutes.put("/:id",authorize,updateSubscription);
subscriptionRoutes.delete("/:id",authorize,deleteSubscription);
subscriptionRoutes.get("/user/:id", authorize,getUserSubscription);
subscriptionRoutes.put("/cancel/:id", authorize, cancelSubscription);
subscriptionRoutes.get("/upcoming-renewals/:id",authorize,getUpcomingRenewals);

export default subscriptionRoutes;