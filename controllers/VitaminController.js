let db = require('./../config/connection');

exports.index = (req, res) => {
    db.query("SELECT * FROM vitamin", (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}

exports.detail = (req, res) => {
    db.query("SELECT * FROM vitamin WHERE id=?", [req.params.id], (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}

exports.store = (req, res) => {
    let vitamin = {
        ketinggian: req.body.ketinggian,
    }

    db.query("INSERT INTO vitamin (ketinggian) VALUES (?)",  [vitamin.ketinggian], (err, result) => {
        if (err) res.status(500).send({ 'Error : ': err })
        else res.status(201).send({ 'Result : ': result })
    })
}

exports.update = (req, res) => {
    let vitamin = {
        id: req.params.id,
        ketinggian: req.body.ketinggian,
    }

    db.query("UPDATE vitamin SET ketinggian=? WHERE id=?",  [vitamin.ketinggian, vitamin.id], (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}

exports.destroy = (req, res) => {
    db.query("DELETE FROM vitamin WHERE id=?", [req.params.id], (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}