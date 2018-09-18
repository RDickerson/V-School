const express = require("express")
const entryRouter = express.Router()
//must reference mongoose Model to query for within the routes
const Entries = require("../models/entry")

entryRouter.route("/")
    .get((req, res) => {
        Entries.find((err, entries) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(entries)
        })
        res.send(entries)
    })
    .post((req, res) => {
        const newEntry = new Entries(req.body)
        newEntry.save((err, newSavedEntry) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(newSavedEntry)
        })
    })


// :id is a request Param
entryRouter.route("/:id")
    .get((req, res) => {
        Entries.findOne({ _id: req.params.id }, (err, foundEntry) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(foundEntry)
        })
    })
    .put((req, res) => {
        Entries.findOneAndUpdate({ _id: req.params.id }, 
                                req.body,
                                { new: true },
                                (err, updatedEntry) => {
                                    if (err) return res.status(500).send(err)
                                    return res.status(201).send(updatedEntry)

        })
    })
    .delete((req, res) => {
        Entries.findOneAndRemove({_id: req.params.id}, (err, deletedEntry) => {
            if (err) return res.status(500).send(err)
            return res.status(202).send({message: "Entry was deleted"})
        })
    })


module.exports = entryRouter