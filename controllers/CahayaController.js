let db = require('./../config/connection');

exports.index = (req, res) => {
    db.query("SELECT * FROM cahaya", (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}

exports.detail = (req, res) => {
    db.query("SELECT * FROM cahaya WHERE id=?", [req.params.id], (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}

exports.store = (req, res) => {
    let cahaya = {
        intensitas: req.body.intensitas,
    }

    db.query("INSERT INTO cahaya (intensitas) VALUES (?)",  [cahaya.intensitas], (err, result) => {
        if (err) res.status(500).send({ 'Error : ': err })
        else res.status(201).send({ 'Result : ': result })
    })
}

exports.update = (req, res) => {
    let cahaya = {
        id: req.params.id,
        intensitas: req.body.intensitas,
    }

    db.query("UPDATE cahaya SET intensitas=? WHERE id=?",  [cahaya.intensitas, cahaya.id], (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}

exports.destroy = (req, res) => {
    db.query("DELETE FROM cahaya WHERE id=?", [req.params.id], (err, result) => {
        if (err) res.status(404).send({ 'Error : ': err })
        else res.status(200).send({ 'Result: ': result })
    })
}