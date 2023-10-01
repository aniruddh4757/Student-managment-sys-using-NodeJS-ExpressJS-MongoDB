import StudentModel from '../models/student.js'
import body from 'body-parser'


const getAllDoc = async (req, res)=>{
    try {
        const result = await StudentModel.find()
        res.render('index', {data : result})
        // console.log(result)
    } catch (error) {
        console.log(error)
    }
}

const createDoc = async (req, res)=>{
    try {
        // const {name, age, fees} = res.body
        const doc = new StudentModel({
            name:req.body.name,
            age: req.body.age,
            fees:req.body.fees
        })   
        const result = await doc.save()
        res.send(`
            <script>
                alert('Student added successfully!!');
                window.location.href = '/';
            </script>
        `);
    } catch (error) {
        console.log(error)
    }
}

const editDoc = async (req, res)=>{
    try {
        let id = req.params.id
        const result = await StudentModel.findById(id)
        // console.log(result)
        res.render('edit', {data:result})        
    } catch (error) {    
        console.log(error)
    }
    
}


const updateDocById = async (req, res)=>{
    try {
        // const doc = req.body
        const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)  
        res.send(`
            <script>
                alert('Student updated successfully!!');
                window.location.href = '/';
            </script>
        `);
    } catch (error) {
        console.log(error)
    }
}


const deleteById = async (req, res)=>{
    try {
        const result = await StudentModel.findByIdAndDelete(req.params.id)
        // console.log(req.params.id)
        res.send(`
            <script>
                alert('Student deleted successfully!!');
                window.location.href = '/';
            </script>
        `);
    } catch (error) {
        console.log(error)
    }
}




export {getAllDoc, editDoc, createDoc, updateDocById, deleteById}