var express = require("express")
var mysql = require("mysql")
var cors = require("cors")
var bodyParser = require("body-parser")
var multer = require("multer")
const path = require('path');
const fs = require('fs')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const db = mysql.createConnection({
    host: "localhost",
    port: 8222,
    user: "root",
    password: "",
    database: "ionicdemo"
})

// Set up storage for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname + ".jpeg");
    }
});

const upload = multer({ storage: storage });

app.post("/attendance", upload.single("image"), (req, res) => {
    try {
        const file = req.file;
        console.log('File received:', file);
        const { image } = req.body;
        // console.log(image)
        const sql = 'INSERT INTO `attendance`(`Name`) VALUES (?)'
        db.query(sql, [file.filename], (err, data) => {
            if (err) {
                return res.json(err)
            }
            else {
                return res.json("success")
            }
        })
    } catch (error) {
        console.error('Error handling file upload:', error);
        res.status(500).json({ message: 'Error handling file upload' });
    }
})

//login screen
app.post("/login", (req, res) => {
    const { name, password } = req.body;
    // console.log(user, pass);
    const sql = "SELECT * from login WHERE user=? And pass=?;";
    db.query(sql, [name, password], (err, data) => {
        if (data.length == 0) {
            return res.json("user not found");
        }
        else {
            return res.json("success");
        }
    })
})
// to get data
app.get('/contact', (req, res) => {
    const sql = 'SELECT * FROM `contact`';
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("DATA NOT FOUND")
        }
        else {
            return res.json(data)
        }
    })
})
//add constact
app.post('/addContact', (req, res) => {
    const { name, phone, location } = req.body;
    // console.log("Data" + name + phone + location)
    const sql = "INSERT INTO `contact`(`Name`, `Phone`, `Location`) VALUES (?,?,?)";
    db.query(sql, [name, phone, location], (err, data) => {
        if (err) {
            return res.json(err)
        }
        else {
            return res.json("Inserted Successfully")
        }
    })
})
//delete contact
app.delete('/delete', (req, res) => {
    const { id } = req.body;
    // console.log(id)
    const sql = "DELETE FROM `contact` WHERE id=?"
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json(err)
        } else {
            return res.json("Contact Deleted Successfully")
        }
    })
})

//to edit contact
app.put('/edit', (req, res) => {
    const { name, phone, location, editID } = req.body;
    // console.log(name, phone, location, editID)
    const sql = "UPDATE `contact` SET `Name`=?,`Phone`=?,`Location`=? Where id=?";
    db.query(sql, [name, phone, location, editID], (err, data) => {
        if (err) {
            return res.json(err)
        }
        else {
            return res.json("Updated!")
        }
    })
})

//leave

app.post("/leave", (req, res) => {
    const { Date, Reason } = req.body;
    console.log(Date, Reason)
    const sql = "INSERT INTO `leave`( `Date`, `Reason`) VALUES (?,?)"
    db.query(sql, [Date, Reason], (err, data) => {
        if (err) {
            return res.json(err)
        } else {
            return res.json("Successfully update leave data")
        }
    })
})


app.listen(8115, () => {
    console.log("Running...")
})