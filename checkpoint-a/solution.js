// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// TODO: export the five functions spec.md asks for:
//   loadOrders()        async
//   myOrders(orders)
//   summarize(orders)
//   describeOrder(id)   async, and must never throw
//   toJsonLines(orders)
//
// Nothing is started for you this time. Everything you need is in modules
// 00 to 08.
const { findAllOrders, findOrderById } = require("./orders-db");

async function loadOrders() {
  return await findAllOrders();
}

function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Giza" && order.status === "pending"
  );
}

function summarize(orders) {
  return orders.reduce((total, order) => total + order.quantity, 0);
}

async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student} ordered ${order.quantity} x ${order.item}`;
  } catch {
    return `Could not find order ${id}`;
  }
}

function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({
      item: order.item,
      quantity: order.quantity,
    }))
  );
}

module.exports = {
  loadOrders,
  myOrders,
  summarize,
  describeOrder,
  toJsonLines,
};
