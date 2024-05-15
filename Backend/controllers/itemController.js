const Item = require('../models/item');

const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "not able to fetch data",err });
  }
};

const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(400).json({ error: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "not able to fetch data by ID",err });
  }
}

const createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: "not able to create item",err});
  }
};

const updateItem = async (req, res) => {
  try {
    const updateItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updateItem) return res.status(404).json({ error: 'Item not found' });
    res.json(updateItem);
  } catch (err) {
    res.status(500).json({ message: "unable to update data",err });
  }
};

const deleteItem = async (req, res) => {
  try {
    const deleteItem = await Item.findByIdAndDelete(req.params.id);
    if (!deleteItem) return res.status(404).json({ error: 'Item not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: "enable to delete data",err});
  }
};

module.exports = { getItems, getItemById, createItem, updateItem, deleteItem };
