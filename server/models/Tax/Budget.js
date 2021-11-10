/*
    Budget[이번달]
    :한달마다 BudgetHistory, BudgetAccount로
    Class 만들때 자동 생성
*/
const mongoose = require('mongoose')

const budgetSchema = mongoose.Schema({
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    },
    balance: { // 이번달 세입현황
        income: { //소득세
            type: Number,
            default: 0
        },
        realestate: { //부동산세
            type: Number,
            default: 0
        },
        place: { //자리세
            type: Number,
            default: 0
        },
        electric: { //전기세
            type: Number,
            default: 0
        },
        stamp: { //인지세
            type: Number,
            default: 0
        },
        vat: { //부가가치세
            type: Number,
            default: 0
        },
        stock: { //증권거래세
            type: Number,
            default: 0
        },
        fine: { //벌금
            type: Number,
            default: 0
        }
    },
    debet: { // 이번달 국채
        type: Number,
        default: 0
    },
    expenditure: { // 이번달 세출현황
        culture: {//문화비
            type: Number,
            default: 0
        },
        education: {//교육비
            type: Number,
            default: 0
        },
        environment: {//환경미화비
            type: Number,
            default: 0
        },
        etc: {//기타
            type: Number,
            default: 0
        }
    }

})
const Budget = mongoose.model('Budget', budgetSchema)
module.exports = { Budget }