const mongoose = require('mongoose');// 引入mongoose
const Schema = mongoose.Schema; // 声明schema
let ObjectId = Schema.Types.ObjectId//  声明object类型

// 创建用户的Schema

const userSchema = new Schema ({
    UserId:ObjectId,
    userName:{unique:true,type:String},
    password:String,
    createAt:{type:Date,default:Date.now()},
    lastLoginAt:{type:Date,default:Data.now()}
})

// 发布模型
mongoose.model('User',userSchema)


/* 备注：
 定义Schema，他相当于MongoDB数据库的一个映射。
 Schema是一种以文件形式存储的数据库模型骨架，无法直接通往数据库端，
 也就是说它不具备对数据库的操作能力。Schema是以key-value形式Json格式的数据。
*/

/* 备注：
Mongoose中的三个概念
schema ：用来定义表的模版，实现和MongoDB数据库的映射。用来实现每个字段的类型，长度，映射的字段，不具备表的操作能力。
model ：具备某张表操作能力的一个集合，是mongoose的核心能力。我们说的模型就是这个Mondel。
entity ：类似记录，由Model创建的实体，也具有影响数据库的操作能力。
*/