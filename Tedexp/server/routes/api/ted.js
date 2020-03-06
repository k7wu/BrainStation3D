// include express in order to use methods like .Router()
const express = require("express");
// reference to the warehouses file in order to write using writeJSONFile
// const warehousesFile = __dirname + "/../../models/warehouses.json";
const topicsFile = __dirname + "/../../models/topics.json";

// work with array of data
// const warehouses = require(warehousesFile);
const topics = require(topicsFile);

// helper functions: writeJSONFile & getNewId
const helper = require("../../helper/helper");
// setup express router
const router = express.Router();

// /**
//  * Get all the warehouses from file
//  */
// router.get("/warehouses", (req, res) => {
//   const warehouseList = warehouses.map(warehouse => {
//     return {
//       id: warehouse.id,
//       warehousename: warehouse.warehousename,
//       address: warehouse.address,
//       addresstwo: warehouse.addresstwo,
//       city: warehouse.city,
//       province: warehouse.province,
//       zip: warehouse.zip,
//       country: warehouse.country,
//       contactname: warehouse.contactname,
//       contacttitle: warehouse.contacttitle,
//       contactphone: warehouse.contactphone,
//       contactemail: warehouse.contactemail,
//       categories: warehouse.categories
//     };
//   });
//   res.json(warehouseList);
// });

/**
 * Get all the topics from file
 */
router.get("/topics", (req, res) => {
  const topicsList = topics.map(topics => {
    return {
      // id: topics.id,
      // item: topics.item,
      // itemdescription: topics.itemdescription,
      // lastordered: topics.lastordered,
      // location: topics.location,
      // quantity: topics.quantity,
      // status: topics.status,
      topics: topics.topic
    };
  });
  res.json(topicsList);
});

// /**
//  * Get warehouse by id
//  */
// router.get('/warehouses/:id', (req, res) => {
//   const found = warehouses.some(warehouse => warehouse.id === req.params.id);
//   if (found) {
//     res.json(warehouses.filter(warehouse => warehouse.id === req.params.id));
//   } else {
//     res
//       .status(400)
//       .json({ errorMessage: `warehouse with ID:${req.params.id} not found` });
//   }
// });

// /**
//  * Get products by warehouse
//  */
// router.get('/topics/:idwarehouse', (req, res) => {
//   const found = topics.some(topics => topics.idwarehouse === req.params.idwarehouse);
//   if (found) {
//     res.json(topics.filter(topics => topics.idwarehouse === req.params.idwarehouse));
//   } else {
//     res
//       .status(400)
//       .json({ errorMessage: `topics with ID:${req.params.idwarehouse} not found` });
//   }
// });


// // /**
// //  * Post new product
// //  */
// router.post('/topics', (req, res) => {
//   newId = helper.getNewId();

//   const newProduct = {
//     id: newId,
//     item: req.body.item,
//     itemdescription: req.body.itemdescription,
//     lastordered: req.body.lastordered,
//     location: req.body.location,
//     country: req.body.country,
//     quantity: req.body.quantity,
//     status: req.body.status,
//     idwarehouse: req.body.idwarehouse
//   };
//   if (!newProduct.item || !newProduct.lastordered || !newProduct.location || !newProduct.country || !newProduct.quantity || !newProduct.status || !newProduct.idwarehouse) {
//     return res.status(400).json({
//       errorMessage:
//         'Please provide all the required information'
//     });
//   }
//   topics.push(newProduct);
//   helper.writeJSONFile(topicsFile, topics);
//   res.json(newId);
// });

module.exports = router;
