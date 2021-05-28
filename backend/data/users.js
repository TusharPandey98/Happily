import bcrypt from 'bcryptjs'
const users = [

    {
        name:'AdminUser',
        email:'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:'true'
    },
    {
        name:'Jhon Doe',
        email:'jhon@example.com',
        password: bcrypt.hashSync('123456',10),

    },
    {
        name:'Vin Diesel',
        email:'vin@example.com',
        password:bcrypt.hashSync('123456',10),
      
    }

]

export default users