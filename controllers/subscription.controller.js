import Subscription from "../models/subscription.model.js";

// Get All subscription
export const getAllSubcription = async (req, res, next) => {
  try {
    const subscription = await Subscription.find();
    res.status(200).json({ success: true, data: subscription });
  } catch (error) {
    next(error);
  }
};

// Get Subscription By Specific ID
export const getSubscriptionById = async (req, res, next) => {
  try {
    const subscription = await Subscription.findById(req.params.id);

    if (!subscription) {
      return res
        .status(404)
        .json({ success: false, message: "Subscription not found" });
    }

    res.status(200).json({ success: true, data: subscription });
  } catch (error) {
    next(error);
  }
};

// Create a new subcription
export const crateSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json({ success: true, data: subscription });
  } catch (error) {
    next(error);
  }
};

// updating existing subscription
export const updateSubscription = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedSubscription = await Subscription.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedSubscription) {
      return res
        .status(404)
        .json({ success: false, message: "Subscription not found" });
    }
    res.status(200).json({ success: true, data: updatedSubscription });
  } catch (error) {
    next(error);
  }
};

// Get subscription details related to spesific user by ID
export const getUserSubscription = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      const error = new Error("You are not the owner of this account");
      error.status = 401;
      throw error;
    }
    const subscription = await Subscription.find({ user: req.params.id });
    res.status(200).json({ success: true, data: subscription });
  } catch (error) {
    next(error);
  }
};

// Delete subscripiton by ID
export const deleteSubscription = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedSubscription = await Subscription.findByIdAndDelete(id);

    if (!deletedSubscription) {
      return res
        .status(404)
        .json({ success: false, message: "Subscription not found" });
    }

    res.status(200).json({ success: true, message: "Subscription deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// Cancel a subscription
export const cancelSubscription = async (req, res, next) => {
  try {
    const { id } = req.params;

    const canceledSubscription = await Subscription.findByIdAndUpdate(
      id,
      { status: "Canceled" },
      { new: true }
    );

    if (!canceledSubscription) {
      return res
        .status(404)
        .json({ success: false, message: "Subscription not found" });
    }

    res.status(200).json({ success: true, data: canceledSubscription });
  } catch (error) {
    next(error);
  }
};

// Get upcoming subscription renewals

export const getUpcomingRenewals = async (req, res, next) => {
  try {
    const upcomingRenewals = await Subscription.findById(req.params.id).select(
      "name createdAt renewalDate "
    ); // Sort by renewal date

    res.status(200).json({ success: true, data: upcomingRenewals });
  } catch (error) {
    next(error); // Pass error to error-handling middleware
  }
};
