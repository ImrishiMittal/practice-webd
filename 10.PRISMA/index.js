require("dotenv/config");

const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
});

const prisma = new PrismaClient({
    adapter
});


async function main(){

    const student = await prisma.student.createMany({
        data:[
            {
                name:"Rishi",
                age:22,
                email:"rishi11@gmail.com"
            },
            {
                name:"Rahul",
                age:22,
                email:"rahulnayak@gmail.com"
            },
            {
                name:"Shaurya Goyal",
                age:23,
                email:"goyalsaxse@gmail.com"
            },
            {
                name:"Depti",
                age:21,
                email:"depti@gmail.com"
            },
            {
                name:"Ishank",
                age:23,
                email:"kumarIshank@gmail.com"
            }
        ]
    });

    const students = await prisma.student.findMany();

    console.log(students);
}

main()
.catch((error)=>{
    console.log(error);
})
.finally(async()=>{
    await prisma.$disconnect();
});