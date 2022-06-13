const pool =require('../config/pg')

const workerModel = {
    getProfile: (id) => {
        return pool.query('SELECT * FROM users where iduser = $1', [id])
    },
    editProfile: (data) => {
        return pool.query('UPDATE users SET fullname = $1, jobdesk = $2, address = $3, workplace = $4, description = $5 WHERE iduser = $6', [data.fullname, data.jobdesk, data.address, data.workplace, data.description, data.id])
    },
    getSkill: (id) => {
        return pool.query('SELECT * FROM skill WHERE users_Id = $1', [id])
    },
    addSkill: (id, skill) => {
        return pool.query('INSERT INTO skill (skillname, users_id) VALUES ($1, $2)',[skill, id])
    },
    getPortofolio: (id) => {
        return pool.query('SELECT * FROM portofolio WHERE id = $1', [id])
    }
}

module.exports = workerModel