let db = require('./../config/connection');

exports.index = (req, res) => {
    db.query("SELECT * FROM suhu", (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}

exports.detail = (req, res) => {
    db.query("SELECT * FROM suhu WHERE id=?", [req.params.id], (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}

exports.store = (req, res) => {
    let suhu = {
        suhu: req.body.suhu,
    }

    db.query("INSERT INTO suhu (suhu) VALUES (?)",  [suhu.suhu], (err, result) => {
        if (err) res.status(500).send({ 'Error : ': err })
        else res.status(201).send({ 'Result : ': result })
    })
}

exports.update = (req, res) => {
    let suhu = {
        id: req.params.id,
        suhu: req.body.suhu,
    }

    db.query("UPDATE suhu SET suhu=? WHERE id=?",  [suhu.suhu, suhu.id], (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}

exports.destroy = (req, res) => {
    db.query("DELETE FROM suhu WHERE id=?", [req.params.id], (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}