const Section = require('../models/Section');

const getSections = async (req, res) => {
  // console.log(req.query)
  const sections = await Section.find(req.query)
  res.status(200).json(sections);
}

const addSection = async (req, res) => {
  // console.log(req.body)
  const { name, student } = req.body;
  const section = await Section.create({
    name,
    user: student
  })
  res.status(201).json(section);
}

const getSection = async (req, res) => {
  const sections = await Section.findById({ _id: req.params.id})
  res.status(200).json(sections);
}

const updSection = async (req, res) => {
  const { name, student } = req.body;
  const sections = await Section.findByIdAndUpdate({ _id: req.params.id }, {
    name,
    user: student
  })
  res.status(200).json(sections);
}

const delSection = async (req, res) => {
  const sections = await Section.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json(sections);
}

module.exports = {
  getSections,
  addSection,
  getSection,
  updSection,
  delSection
}
